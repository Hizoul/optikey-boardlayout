import { ExtendedJSONSchema, FormStore, SharedField } from "@xpfw/form"
import { registerComponents } from "@xpfw/form-web"
import * as React from "react"

registerComponents()
const nameSchema: ExtendedJSONSchema = {
  title: "Name", type: "string"
}

const keyboardPrefix = "Keyboard"

const RightPanel: React.FunctionComponent<any> = () => (
  <div>
    hi panep
    <SharedField schema={nameSchema} prefix={keyboardPrefix} />
  </div>
)

export default RightPanel
