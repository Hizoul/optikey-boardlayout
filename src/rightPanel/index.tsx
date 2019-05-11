import Button from '@material-ui/core/Button'
import { SharedField } from "@xpfw/form"
import * as React from "react"
import {
  borderSchema, colsSchema, heightSchema, keyboardPrefix, nameSchema, rowsSchema, symbolSchema
} from "../form/def"
import downloadKeyboard from "../util/download"
import KeyboardImporter from "./import"
import KeyEditor from "./keyEditor"

const RightPanel: React.FunctionComponent<any> = () => (
  <div className="rightPanel">
    <div className="center">
      <Button variant="outlined" color="primary" fullWidth onClick={downloadKeyboard}>save keyboard</Button>
    </div>
    <div className="center" style={{flexDirection: "column"}}>
      <SharedField schema={nameSchema} prefix={keyboardPrefix} />
      <SharedField schema={heightSchema} prefix={keyboardPrefix} />
      <SharedField schema={borderSchema} prefix={keyboardPrefix} />
      <SharedField schema={rowsSchema} prefix={keyboardPrefix} />
      <SharedField schema={colsSchema} prefix={keyboardPrefix} />
      <SharedField schema={symbolSchema} prefix={keyboardPrefix} />
    </div>
    <KeyEditor />
    <KeyboardImporter />
  </div>
)

export default RightPanel
