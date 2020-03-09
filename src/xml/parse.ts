import { cloneDeep, find, get } from "lodash"
import { js2xml, xml2js } from "xml-js"

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
  const data = xml2js(xml)
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
    const ele: any = {
      type: entry.name,
      Row: Number(getElementText(find(eles, ["name", "Row"]), "7")),
      Col: Number(getElementText(find(eles, ["name", "Col"]), "7"))
    }
    const Text = getElementText(find(eles, ["name", "Text"]))
    if (Text != null) {
      ele.Text = Text
    }
    const Width = getElementText(find(eles, ["name", "Width"]))
    if (Width != null) {
      ele.Width = Width
    }
    const ShiftUpLabel = getElementText(find(eles, ["name", "ShiftUpLabel"]))
    if (ShiftUpLabel != null) {
      ele.ShiftUpLabel = ShiftUpLabel
      ele.caseSensitive = true
    }
    const ShiftDownLabel = getElementText(find(eles, ["name", "ShiftDownLabel"]))
    if (ShiftDownLabel != null) {
      ele.ShiftDownLabel = ShiftDownLabel
      ele.caseSensitive = true
    }
    const Label = getElementText(find(eles, ["name", "Label"]))
    if (ele.caseSensitive == null && Label != null) {
      ele.Label = Label
      ele.caseSensitive = false
      ele.useSymbol = false
    }
    const sym = getElementText(find(eles, ["name", "Symbol"]))
    if (sym != null) {
      ele.Symbol = sym
      ele.useSymbol = true
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

const toXml = (keyboard: IKeyboard) => {
  const changedContent: any = {
    DynamicKey: [],
    Scratchpad: [],
    SuggestionRow: [],
    SuggestionCol: []
  }
  for (const key of keyboard.Keyboard.Content) {
    const newKey = cloneDeep(key)
    if (newKey.Text === "&") {
      newKey.Text = "&amp;amp;"
      newKey.Label = "&amp;amp;"
    }
    delete newKey.type
    delete newKey.caseSensitive
    delete newKey.useSymbol
    if (newKey.Row < keyboard.Keyboard.Grid.Rows && newKey.Col < keyboard.Keyboard.Grid.Cols) {
      changedContent[key.type].push(newKey)
    }
  }
  const res = js2xml({
    Keyboard: {
      ...keyboard.Keyboard,
      Content: changedContent
    }
  }, {compact: true, spaces: 2})
  return res.replace(/\&amp;/g, "&")
}

export default xmlParser
export {
  toXml
}
