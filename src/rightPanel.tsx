import { ComponentRegistry, ExtendedJSONSchema, FormStore, SharedField } from "@xpfw/form"
import { registerComponents, TextField } from "@xpfw/form-web"
import * as React from "react"
import { toXml } from "./xml/parse"

const keyboardPrefix = "Keyboard"

const downloadUrl = (title: string, url: string) => {
  const a = document.createElement("a")
  document.body.appendChild(a)
  a.href = url
  a.download = title
  a.click()
  document.body.removeChild(a)
}

const downloadBlob = (title: string, blob: Blob) => {
  const url = window.URL.createObjectURL(blob)
  downloadUrl(title, url)
  window.URL.revokeObjectURL(url)
}

const downloadKeyboard = () => {
  downloadBlob("keyboard.xml",
    new Blob([toXml({Keyboard: FormStore.getValue(keyboardPrefix)})], {type: "application/xml"}))
}

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

const RightPanel: React.FunctionComponent<any> = () => (
  <div>
    hi panep
    <SharedField schema={nameSchema} prefix={keyboardPrefix} />
    <SharedField schema={heightSchema} prefix={keyboardPrefix} />
    <SharedField schema={borderSchema} prefix={keyboardPrefix} />
    <SharedField schema={rowsSchema} prefix={keyboardPrefix} />
    <SharedField schema={colsSchema} prefix={keyboardPrefix} />
    <SharedField schema={symbolSchema} prefix={keyboardPrefix} />
    <a className="button" onClick={downloadKeyboard}>save keyboard</a>
  </div>
)

export default RightPanel
