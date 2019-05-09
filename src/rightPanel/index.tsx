import { SharedField } from "@xpfw/form"
import * as React from "react"
import {
  borderSchema, colsSchema, heightSchema, keyboardPrefix, nameSchema, rowsSchema, symbolSchema
} from "../form/def"
import downloadKeyboard from "../util/download"

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
