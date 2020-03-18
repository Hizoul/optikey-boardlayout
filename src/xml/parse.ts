import { cloneDeep, find, get } from "lodash"
import { js2xml, xml2js } from "xml-js"
import { ExtendedJSONSchema, iterateSubFields } from "@xpfw/form/dist"
import { keyGroupSchema } from "../form/defKeyGroup"
import { isObject } from "mobx/lib/internal"

export interface IKeyboard {
  Keyboard: {
    Name: string
    Height: number
    BorderThickness: string
    SymbolMargin: number
    Grid: {Cols: number, Rows: number}
    Content: any[]
  }
}

const getElementText = (ele: any, def?: any) => get(ele, "elements[0].text", def)

const getViaSchema = (schema: ExtendedJSONSchema, xmlEle: any) => {
  const object: any = {}
  iterateSubFields(schema, (key, subSchema) => {
    let value = getElementText(find(xmlEle, ["name", key]))
    if (subSchema.type === "number") {
      value = Number(value)
      if (!isNaN(value)) {
        object[key] = value
      }
    } else if (value != null) {
      object[key] = value
    }
  })
  return object
}

const xmlParser: (xml: string) => any = (xml: string) => {
  const data = xml2js(xml, {compact: false})
  const root = data.elements[0].elements
  const Name = getElementText(find(root, ["name", "Name"]))
  const BorderThickness = getElementText(find(root, ["name", "BorderThickness"]))
  const Height = Number(getElementText(find(root, ["name", "Height"]), "30"))
  const SymbolMargin = Number(getElementText(find(root, ["name", "SymbolMargin"]), "10"))
  const grid = get(find(root, ["name", "Grid"]), "elements", [])
  const Rows = Number(getElementText(find(grid, ["name", "Rows"]), "7"))
  const Cols = Number(getElementText(find(grid, ["name", "Cols"]), "3"))
  const Position = getElementText(find(root, ["name", "Position"]), "Top")
  const DockSize = getElementText(find(root, ["name", "DockSize"]), "Full")
  const Width = Number(getElementText(find(root, ["name", "Width"]), "100"))
  const HorizontalOffset = Number(getElementText(find(root, ["name", "HorizontalOffset"]), "1"))
  const VerticalOffset = Number(getElementText(find(root, ["name", "VerticalOffset"]), "1"))
  const BackgroundColor = getElementText(find(root, ["name", "BackgroundColor"]), "White")
  const BorderColor = getElementText(find(root, ["name", "BorderColor"]), "Black")
  const WindowState = getElementText(find(root, ["name", "WindowState"]), "Docked")
  const keys = get(find(root, ["name", "Content"]), "elements", [])
  const Content = keys.map((entry: any) => {
    const eles = entry.elements
    const keyGroupProperties = getViaSchema(keyGroupSchema, eles)
    const ele: any = {
      name: entry.name,
      Row: Number(getElementText(find(eles, ["name", "Row"]), "7")),
      Col: Number(getElementText(find(eles, ["name", "Col"]), "7")),
      ...keyGroupProperties
    }
    const Text = getElementText(find(eles, ["name", "Text"]))
    if (Text != null) {
      ele.Text = Text
    }
    const Width = getElementText(find(eles, ["name", "Width"]))
    if (Width != null) {
      ele.Width = Width
    }
    const Height = getElementText(find(eles, ["name", "Width"]))
    if (Height != null) {
      ele.Height = Height
    }
    const ShiftUpLabel = getElementText(find(eles, ["name", "ShiftUpLabel"]))
    if (ShiftUpLabel != null) {
      ele.ShiftUpLabel = ShiftUpLabel
      ele.labelType = "Case Sensitive Text"
    }
    const ShiftDownLabel = getElementText(find(eles, ["name", "ShiftDownLabel"]))
    if (ShiftDownLabel != null) {
      ele.ShiftDownLabel = ShiftDownLabel
      ele.labelType = "Case Sensitive Text"
    }
    const Label = getElementText(find(eles, ["name", "Label"]))
    if (ele.caseSensitive == null && Label != null) {
      ele.Label = Label
      ele.labelType = "Text"
    }
    const sym = getElementText(find(eles, ["name", "Symbol"]))
    if (sym != null) {
      ele.Symbol = sym
      ele.labelType = "Symbol"
      switch (ele.Symbol) {
        case "SpaceIcon": {
          ele.Text = "&#32;"
          break
        }
        case "EnterIcon": {
          ele.Text = "&#13;"
          break
        }
        case "TabIcon": {
          ele.Text = "&#9;"
          break
        }
      }
    }
    const Action = getElementText(find(eles, ["name", "Action"]))
    if (Action != null) {
      ele.Action = Action
    }
    return ele
  })

  const keyboard: any = {
    Keyboard: {
      Name,
      Height,
      SymbolMargin,
      BorderThickness,
      DockSize,
      Position,
      Width,
      HorizontalOffset,
      VerticalOffset,
      BackgroundColor,
      BorderColor,
      WindowState,
      Grid: {Rows, Cols},
      Content
    }
  }
  return keyboard
}

const objToNonCompactElements = (obj: any, toSkip: string[] = []) => {
  const nonCompact: any[] = []
  for (const k of Object.keys(obj)) {
    if (toSkip.indexOf(k) === -1) {
      nonCompact.push({
        name: k, type: "element",
        elements: 
        (typeof obj[k] === "object") ? objToNonCompactElements(obj[k]) : [{type: "text", text: obj[k]}]
      })
    }
  }
  return nonCompact
}

const toXml = (keyboard: IKeyboard) => {
  let changedContent = []
  for (const key of keyboard.Keyboard.Content) {
    let newKey = cloneDeep(key)
    console.log("LOOKING AT ", newKey)
    if (newKey.Text === "&") {
      newKey.Text = "&amp;amp;"
      newKey.Label = "&amp;amp;"
    }
    delete newKey.labelType
    let name = newKey.name
    delete newKey.name
    let r = newKey.Row
    let c = newKey.Col
    newKey = objToNonCompactElements(newKey)
    if (r < keyboard.Keyboard.Grid.Rows && c < keyboard.Keyboard.Grid.Cols) {
      changedContent.push({type: "element", name, r, c, elements: newKey})
    }
  }
  const width = keyboard.Keyboard.Grid.Rows
  const sorter = (objA: any, objB: any) => {
    return (objA.r * width + objA.c) - (objB.r * width + objB.c)
  }
  changedContent = changedContent.sort(sorter)
  const res = js2xml({
    elements: [
      {type: "element", name: "Keyboard", elements: [
        ...objToNonCompactElements(keyboard.Keyboard, ["Content"]),
        {type: "element", name: "Content", elements: changedContent}
      ]}
    ]
  }, {compact: false, spaces: 2})
  console.log("RES IS", res)
  return res.replace(/\&amp;/g, "&")
}

export default xmlParser
export {
  toXml
}
