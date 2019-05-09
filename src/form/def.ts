import { ComponentRegistry, ExtendedJSONSchema } from "@xpfw/form"
import { registerComponents, TextField } from "@xpfw/form-web"

registerComponents()
ComponentRegistry.registerComponent("number", TextField)

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

export {
  nameSchema, heightSchema, borderSchema, symbolSchema, rowsSchema, colsSchema, keyboardPrefix
}
