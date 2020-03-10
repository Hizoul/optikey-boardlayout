import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { SharedField } from "@xpfw/form"
import * as React from "react"
import {
  borderSchema, colsSchema, heightSchema, keyboardPrefix,
  nameSchema, rowsSchema, symbolSchema, persistNewStateSchema, windowStateSchema,
  dockSizeSchema, positionSchema, widthSchema, horizontalSchema, verticalSchema,
  backgroundColorSchema, borderColorSchema, hideFromListSchema
} from "../form/def"
import AboutPanel from "./about"
import KeyboardImporter from "./import"
import KeyEditor from "./keyEditor"
import { resizeEventListener } from "../keyboard"

const resizeTriggerer = () => setTimeout(resizeEventListener, 1000)

const RightPanel: React.FunctionComponent<any> = () => {
  return (
    <div className="rightPanel">
      <KeyboardImporter />
      <ExpansionPanel defaultExpanded={false} onChange={resizeTriggerer}>
        <ExpansionPanelSummary  expandIcon={<ExpandMoreIcon />}>
          <Typography>Global Settings</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="vertical flex1">
            <SharedField schema={nameSchema} prefix={keyboardPrefix} />
            <SharedField schema={rowsSchema} prefix={keyboardPrefix} />
            <SharedField schema={colsSchema} prefix={keyboardPrefix} />
            <SharedField schema={heightSchema} prefix={keyboardPrefix} />
            <SharedField schema={widthSchema} prefix={keyboardPrefix} />
            <SharedField schema={borderSchema} prefix={keyboardPrefix} />
            <SharedField schema={symbolSchema} prefix={keyboardPrefix} />
            <SharedField schema={positionSchema} prefix={keyboardPrefix} />
            <SharedField schema={persistNewStateSchema} prefix={keyboardPrefix} />
            <SharedField schema={windowStateSchema} prefix={keyboardPrefix} />
            <SharedField schema={dockSizeSchema} prefix={keyboardPrefix} />
            <SharedField schema={horizontalSchema} prefix={keyboardPrefix} />
            <SharedField schema={verticalSchema} prefix={keyboardPrefix} />
            <SharedField schema={backgroundColorSchema} prefix={keyboardPrefix} />
            <SharedField schema={borderColorSchema} prefix={keyboardPrefix} />
            <SharedField schema={hideFromListSchema} prefix={keyboardPrefix} />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <KeyEditor />
      <AboutPanel />
    </div>
  )
}

export default RightPanel
export {
  resizeTriggerer
}