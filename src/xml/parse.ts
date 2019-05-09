import { cloneDeep, find, get } from "lodash"
import { js2xml, xml2js } from "xml-js"

export interface IKeyboard {
  Keyboard: {
    Name: string
    Height: number
    BorderThickness: string
    Grid: {rows: number}
    Keys: any[]
  }
}

const getElementText = (ele: any, def?: any) => get(ele, "elements[0].text", def)

const xmlParser: (xml: string) => any = (xml: string) => {
  const data = xml2js(xml)
  const root = data.elements[0].elements
  const Name = getElementText(find(root, ["name", "Name"]))
  const BorderThickness = getElementText(find(root, ["name", "BorderThickness"]))
  const Height = Number(getElementText(find(root, ["name", "Height"]), "30"))
  const SymbolMargin = Number(getElementText(find(root, ["name", "SymbolMargin"]), "10"))
  const grid = get(find(root, ["name", "Name"]), "elements", [])
  const Rows = Number(getElementText(find(grid, ["name", "Rows"]), "7"))
  const Cols = Number(getElementText(find(grid, ["name", "Height"]), "30"))
  const keys = get(find(root, ["name", "Keys"]), "elements", [])
  const Keys = keys.map((entry: any) => {
    const eles = entry.elements
    const ele: any = {
      type: entry.name,
      Row: Number(getElementText(find(eles, ["name", "Row"]), "7")),
      Col: Number(getElementText(find(eles, ["name", "Col"]), "7"))
    }
    const Label = getElementText(find(eles, ["name", "Label"]))
    if (Label != null) {
      ele.Label = Label
    }
    const ShiftUpLabel = getElementText(find(eles, ["name", "ShiftUpLabel"]))
    if (ShiftUpLabel != null) {
      ele.ShiftUpLabel = ShiftUpLabel
    }
    const sym = getElementText(find(eles, ["name", "Symbol"]))
    if (sym != null) {
      ele.Symbol = sym
    }
    const Action = getElementText(find(eles, ["name", "Action"]))
    if (Action != null) {
      ele.Action = Action
    }
    const ShiftDownLabel = getElementText(find(eles, ["name", "ShiftDownLabel"]))
    if (ShiftDownLabel != null) {
      ele.ShiftDownLabel = ShiftDownLabel
    }
    return ele
  })
  const keyboard: any = {
    Keyboard: {
      Name,
      Height,
      SymbolMargin,
      BorderThickness,
      Grid: {Rows, Cols},
      Keys
    }
  }
  return keyboard
}

const toXml = (keyboard: IKeyboard) => {
  const changedKeys: any = {
    TextKey: [],
    ActionKey: []
  }
  for (const key of keyboard.Keyboard.Keys) {
    const newKey = cloneDeep(key)
    delete newKey.type
    changedKeys[key.type].push(newKey)
  }
  return js2xml({
    Keyboard: {
      ...keyboard.Keyboard,
      Keys: changedKeys
    }
  }, {compact: true})
}

export default xmlParser
export {
  toXml
}
