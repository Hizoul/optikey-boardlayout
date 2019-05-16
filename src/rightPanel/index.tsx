import Button from "@material-ui/core/Button"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { SharedField } from "@xpfw/form"
import * as React from "react"
import {
  borderSchema, colsSchema, heightSchema, keyboardPrefix, nameSchema, rowsSchema, symbolSchema
} from "../form/def"
import downloadKeyboard, { copyToClipboard } from "../util/download"
import AboutPanel from "./about"
import KeyboardImporter from "./import"
import KeyEditor from "./keyEditor"

const RightPanel: React.FunctionComponent<any> = () => (
  <div className="rightPanel">
    <div className=" row">
      <Button variant="outlined" color="primary" fullWidth onClick={downloadKeyboard}>download xml</Button>
      <Button variant="outlined" color="primary" fullWidth onClick={copyToClipboard}>copy xml to clipboard</Button>
    </div>
    <KeyboardImporter />
    <ExpansionPanel defaultExpanded={false}>
      <ExpansionPanelSummary  expandIcon={<ExpandMoreIcon />}>
        <Typography>Global Settings</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className="center" style={{flexDirection: "column", flex: 1}}>
          <SharedField schema={nameSchema} prefix={keyboardPrefix} />
          <SharedField schema={heightSchema} prefix={keyboardPrefix} />
          <SharedField schema={borderSchema} prefix={keyboardPrefix} />
          <SharedField schema={rowsSchema} prefix={keyboardPrefix} />
          <SharedField schema={colsSchema} prefix={keyboardPrefix} />
          <SharedField schema={symbolSchema} prefix={keyboardPrefix} />
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <KeyEditor />
    <AboutPanel />
  </div>
)

export default RightPanel
