import { cloneDeep, find, get } from "lodash"
import { js2xml, xml2js } from "xml-js"
import { ExtendedJSONSchema, iterateSubFields } from "@xpfw/form"
import { keyGroupSchema } from "../form/defKeyGroup"
import { actionNames } from "../form/def"

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
  const keyGroups: any[] = []
  for (const entryInRoot of root) {
    if (entryInRoot.name === "KeyGroup") {
      keyGroups.push(entryInRoot.attributes)
    }
  }
  const parseEntry = (entry: any) => {
    const eles = entry.elements
    const ele: any = {
      ...entry.attributes,
      name: entry.name,
      type: entry.name,
      Row: Number(get(entry, "attributes.Row", 7)),
      Col: Number(get(entry, "attributes.Col", 7)),
    }
    const Width = get(entry, "attributes.Width")
    if (Width != null) {
      ele.Width = Width
    }
    const Height = get(entry, "attributes.Height")
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
    const keyActions: any[] = []
    const parseEle = (element: any) => {
      const objToPush: any = {
        actionType: element.name, value: getElementText(element)
      }
      if (element.name === "ChangeKeyboard") {
        objToPush.BackReturnsHere = get(element, "attributes.BackReturnsHere", "true") === "true"
      }
      if (element.name === "Loop") {
        objToPush.Count = get(element, "attributes.Count")
        objToPush.Wait = get(element, "attributes.Wait")
        const subKeyActions: any[] = []
        for (const subElement of element.elements) {
          if (actionNames.indexOf(subElement.name) !== -1) {
            subKeyActions.push(parseEle(subElement))
          }
        }
        objToPush.keyActions = subKeyActions
      }
      return objToPush
    }
    for (const element of eles) {
      if (actionNames.indexOf(element.name) !== -1) {
        keyActions.push(parseEle(element))
      }
    }
    ele.keyActions = keyActions
    const associatedKeyGroups: any[] = []
    for (const subElement of eles) {
      if (subElement.name === "KeyGroup" && subElement.attributes != null) {
        associatedKeyGroups.push(subElement.attributes.Name)
      }
    }
    ele.associatedKeyGroups = associatedKeyGroups
    return ele
  }
  const Content = keys.map(parseEntry)

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
      keyGroups,
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

const needsToBeAttribute = ["Row", "Col", "Width", "Height"].concat(Object.keys(keyGroupSchema.properties != null ? keyGroupSchema.properties : {}))

const toXml = (keyboard: IKeyboard) => {
  let changedContent = []
  for (const key of keyboard.Keyboard.Content) {
    if (key != null) {
      let newKey = cloneDeep(key)
      if (newKey.Label === "&") {
        newKey.Label = "&amp;amp;"
      }
      delete newKey.labelType
      let name = newKey.name
      delete newKey.name
      let r = newKey.Row
      let c = newKey.Col
      const keyActions = newKey.keyActions
      delete newKey.keyActions
      const attributes: any = {}
      for (const attribute of needsToBeAttribute) {
        if (newKey[attribute] != null) {
          attributes[attribute] = newKey[attribute]
          delete newKey[attribute]
        }
      }
      delete newKey.type
      const associatedKeyGroups = newKey.associatedKeyGroups
      delete newKey.associatedKeyGroups
      newKey = objToNonCompactElements(newKey)
      const convertAction = (action: any) => {
        let value = action.value
        if (value === "&") {
          value = "&amp;amp;"
        }
        const objToPush: any = {
          type: "element", name: action.actionType, elements: [{type: "text", text: value}]
        }
        if (action.actionType === "ChangeKeyboard") {
          objToPush.attributes = {BackReturnsHere: action.BackReturnsHere}
        }
        if (action.actionType === "Loop") {
          objToPush.attributes = {Count: action.Count, Wait: action.Wait}
          objToPush.elements = action.keyActions != null ? action.keyActions.map(convertAction) : []
        }
        return objToPush
      }
      if (keyActions != null) {
        for (const action of keyActions) {
          if (action != null) {
            newKey.push(convertAction(action))
          }
        }
      }
      for (const associatedGroup of associatedKeyGroups) {
        newKey.push({type: "element", name: "KeyGroup", attributes: {Name: associatedGroup}})
      }
      if (r < keyboard.Keyboard.Grid.Rows && c < keyboard.Keyboard.Grid.Cols) {
        changedContent.push({type: "element", name, r, c, elements: newKey, attributes})
      }
    }
  }
  const width = keyboard.Keyboard.Grid.Rows
  const sorter = (objA: any, objB: any) => {
    let initial = objA.r * width - objB.r * width
    if (initial == 0) {
      return objA.c - objB.c
    }
    return initial
  }
  changedContent = changedContent.sort(sorter)
  const keyGroupElements = get(keyboard, "Keyboard.keyGroups", []).map((group: any) => {
    const groupProps = {...group}
    return {type: "element", name: "KeyGroup", attributes: groupProps}
  })
  const res = js2xml({
    elements: [
      {type: "element", name: "Keyboard", elements: [
        ...objToNonCompactElements(keyboard.Keyboard, ["Content", "keyGroups"]),
        ...keyGroupElements,
        {type: "element", name: "Content", elements: changedContent}
      ]}
    ]
  }, {compact: false, spaces: 2})
  return res.replace(/\&amp;/g, "&")
}

export default xmlParser
export {
  toXml
}
