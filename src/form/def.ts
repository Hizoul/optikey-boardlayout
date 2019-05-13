import { ComponentRegistry, ExtendedJSONSchema } from "@xpfw/form"
import { registerComponents } from "@xpfw/form-web"
import BooleanField from "./boolean"
import SelectField from "./select"
import TextField from "./text"

registerComponents()
ComponentRegistry.registerComponent("number", TextField)
ComponentRegistry.registerComponent("string", TextField)
ComponentRegistry.registerComponent("boolean", BooleanField)
ComponentRegistry.registerComponent("string", SelectField, "select")

const nameSchema: ExtendedJSONSchema = {
  title: "Name", type: "string"
}

const heightSchema: ExtendedJSONSchema = {
  title: "Height", type: "number"
}

const symbolSchema: ExtendedJSONSchema = {
  title: "SymbolMargin", type: "number"
}

const borderSchema: ExtendedJSONSchema = {
  title: "BorderThickness", type: "string"
}

const rowsSchema: ExtendedJSONSchema = {
  title: "Grid.Rows", type: "number"
}

const colsSchema: ExtendedJSONSchema = {
  title: "Grid.Cols", type: "number"
}

const keyboardPrefix = "Keyboard"
const hoverKey = `hover`
const dragKey = `drag`
const activeKey = `active`

export {
  nameSchema, heightSchema, borderSchema, symbolSchema, rowsSchema, colsSchema, keyboardPrefix,
  activeKey, dragKey, hoverKey
}
