import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { FormStore, SharedField } from "@xpfw/form"
import { SelectField } from "@xpfw/form-web"
import { observer } from "mobx-react-lite"
import * as React from "react"
import { activeKey, keyboardPrefix } from "../form/def"
import TypeSelectionField, { textKeyVal } from "../form/typeSelection"
import actionKeyList from "../util/actionKeys"

const KeyEditor = observer(() => {
  const keyIndex = FormStore.getValue(activeKey, undefined)
  const keysLength = FormStore.getValue("Keys.length", keyboardPrefix, 2)
  const typeSchema = {
    title: `Keys[${keyIndex}].type`,
    type: "string"
  }
  const textSchema = {
    title: `Keys[${keyIndex}].Text`,
    type: "string"
  }
  const labelSchema = {
    title: `Keys[${keyIndex}].Label`,
    type: "string"
  }
  const shiftUpLabelSchema = {
    title: `Keys[${keyIndex}].ShiftUpLabel`,
    type: "string"
  }
  const shiftDownLabelSchema = {
    title: `Keys[${keyIndex}].ShiftDownLabel`,
    type: "string"
  }
  const symbolSchema = {
    title: `Keys[${keyIndex}].Symbol`,
    type: "string"
  }
  const actionSchema = {
    title: `Keys[${keyIndex}].Action`,
    type: "string",
    theme: "select",
    selectOptions: actionKeyList.map((v) => ({label: v, value: v}))
  }
  const twoLabelsSchema = {
    title: `Keys[${keyIndex}].twoLabels`,
    type: "boolean"
  }
  const twoLabelsValue = FormStore.getValue(twoLabelsSchema.title, keyboardPrefix)
  const typeValue = FormStore.getValue(typeSchema.title, keyboardPrefix)
  const keySelected = keyIndex && keyIndex > 0 && keyIndex < keysLength
  return (
    <ExpansionPanel expanded={keySelected ? true : false}>
      <ExpansionPanelSummary>
        <Typography>{keySelected ? "Key Settings" : "Click on a key to edit it here"}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {keySelected ? (
          <div className="center vertical flex1">
            <TypeSelectionField schema={typeSchema} prefix={keyboardPrefix} />
            {typeValue === textKeyVal ? (
              <>
                {twoLabelsValue ? (
                  <>
                    <SharedField schema={shiftUpLabelSchema} prefix={keyboardPrefix} />
                    <SharedField schema={shiftDownLabelSchema} prefix={keyboardPrefix} />
                  </>
                ) : <>
                  <SharedField schema={textSchema} prefix={keyboardPrefix} />
                  <SharedField schema={labelSchema} prefix={keyboardPrefix} />
                </>}
                <SharedField schema={twoLabelsSchema} prefix={keyboardPrefix} />
              </>
            ) : (
              <>
                <SharedField schema={symbolSchema} prefix={keyboardPrefix} />
                <SharedField schema={actionSchema} prefix={keyboardPrefix} />
              </>
            )}

          </div>
        ) : (
          <p>Click on a Key in the Keyboard to edit it</p>
        )}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
})

export default KeyEditor
