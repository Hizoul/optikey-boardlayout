import { ComponentRegistry, ExtendedJSONSchema, FormStore, SharedField } from "@xpfw/form"
import { registerComponents, TextField } from "@xpfw/form-web"
import * as React from "react"

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

const RightPanel: React.FunctionComponent<any> = () => (
  <div>
    hi panep
    <SharedField schema={nameSchema} prefix={keyboardPrefix} />
    <SharedField schema={heightSchema} prefix={keyboardPrefix} />
    <SharedField schema={borderSchema} prefix={keyboardPrefix} />
    <SharedField schema={rowsSchema} prefix={keyboardPrefix} />
    <SharedField schema={colsSchema} prefix={keyboardPrefix} />
    <SharedField schema={symbolSchema} prefix={keyboardPrefix} />
  </div>
)

export default RightPanel
