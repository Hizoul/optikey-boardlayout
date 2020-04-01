import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { FormStore, SharedField } from "@xpfw/form"
import { SelectField } from "@xpfw/form-web"
import { cloneDeep, keys, get } from "lodash"
import { observer } from "mobx-react"
import * as React from "react"
import { activeKey, keyboardPrefix, keyActionObjectSchema } from "../form/def"
import actionKeyList from "../util/actionKeys"
import symbolList from "../util/symbols"
import { keyGroupSchema, keyGroupArraySchema } from "../form/defKeyGroup"
import { resizeTriggerer } from "./index"
import { toJS } from "mobx"

const keyTypes: any[] = ["DynamicKey", "Scratchpad", "SuggestionRow", "SuggestionCol"].map((v) =>{return {value: v, label: v}})


const KeyEditor = observer(() => {
  const keyIndex = FormStore.getValue(activeKey, undefined)
  const keysLength = FormStore.getValue("Content.length", keyboardPrefix, 2)
  const typeSchema = {
    title: `Content[${keyIndex}].type`,
    type: "string", theme: "select",
    selectOptions: keyTypes,
    description: "Determines what kind of action happens when a key is pressed."
  }
  const labelSchema = {
    title: `Content[${keyIndex}].Label`,
    type: "string"
  }
  const shiftDownLabelSchema = {
    title: `Content[${keyIndex}].ShiftDownLabel`,
    type: "string"
  }
  const widthSchema = {
    title: `Content[${keyIndex}].Width`,
    type: "number"
  }
  const heightSchema = {
    title: `Content[${keyIndex}].Height`,
    type: "number"
  }
  const symbolSchema = {
    title: `Content[${keyIndex}].Symbol`,
    type: "string",
    theme: "select",
    selectOptions: symbolList.map((v) => ({label: v, value: v}))
  }
  const keyActionSchema = {
    title: `Content[${keyIndex}].keyActions`,
    type: "array",
    items: keyActionObjectSchema
  }
  const selectableKeyGroups = FormStore.getValue(keyGroupArraySchema.title, keyboardPrefix, []).map((v: any) => v == null ? {label: "Unnamed", value: "Unnamed"} : {label: v.Name, value: v.Name})
  const keyGroupAssociationsSchema = {
    title: `Content[${keyIndex}].associatedKeyGroups`,
    type: "array",
    items: {
      type: "string", description: "Select a KeyGroup this Key should belong to",
      theme: "select", selectOptions: selectableKeyGroups
    }
  }
  const labelTypeSchema = {
    title: `Content[${keyIndex}].labelType`,
    type: "string",
    theme: "select", selectOptions: ["Text", "Case Sensitive Text", "Symbol"].map((v) => ({label: v, value: v})),
    description: "Determines what is shown on the key"
  }
  const thisKeysGroupSchema = cloneDeep(keyGroupSchema)
  thisKeysGroupSchema.title = `Content[${keyIndex}]`
  const typeValue = FormStore.getValue(typeSchema.title, keyboardPrefix)
  const labelType = FormStore.getValue(labelTypeSchema.title, keyboardPrefix)
  const keySelected = keyIndex && keyIndex > 0 && keyIndex < keysLength
  let editContent
  switch (typeValue) {
    case keyTypes[0].value: {
      editContent = (
        <ExpansionPanel key="editLabel" className="simplePanel">
          <ExpansionPanelSummary className="simplePanel negateMarginBot" expandIcon={<ExpandMoreIcon />}>
            <Typography>Label</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="simplePanel">
            <div className="flex1 vertical">
              <SharedField schema={symbolSchema} prefix={keyboardPrefix} />
              <SharedField schema={labelSchema} prefix={keyboardPrefix} />
              <SharedField schema={shiftDownLabelSchema} prefix={keyboardPrefix} />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>)
      break
    }
  }
  const keyGroupPrefix = `${keyboardPrefix}.Content[${keyIndex}]`
  const keyGroupEditor = (
    <>
      <ExpansionPanel className="simplePanel">
        <ExpansionPanelSummary className="simplePanel negateMarginBot" expandIcon={<ExpandMoreIcon />}>
          <Typography>Associated Keygroups</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="simplePanel">
          <div className="flex1 vertical">
            <SharedField schema={keyGroupAssociationsSchema} prefix={keyboardPrefix} />

          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="simplePanel">
        <ExpansionPanelSummary className="simplePanel negateMarginBot" expandIcon={<ExpandMoreIcon />}>
          <Typography>Override Keygroup Settings</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="simplePanel">
          <div className="flex1 vertical">
            <SharedField schema={widthSchema} prefix={keyboardPrefix} />
            <SharedField schema={heightSchema} prefix={keyboardPrefix} />
            {keys(thisKeysGroupSchema.properties).map((key) =>
            <SharedField key={key} schema={get(thisKeysGroupSchema, `properties.${key}`)} prefix={keyGroupPrefix} />)}

          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  )
  return (
    <ExpansionPanel expanded={keySelected ? true : false} onChange={resizeTriggerer}>
      <ExpansionPanelSummary className={keySelected ? "negateMarginBot" : ""}>
        <Typography>{keySelected ? "Key Settings" : "Click on a key to edit it here"}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {keySelected ? (
          <div className="vertical flex1">
            <SharedField schema={typeSchema} prefix={keyboardPrefix} />
            {editContent}

            <ExpansionPanel className="simplePanel">
              <ExpansionPanelSummary className="simplePanel negateMarginBot" expandIcon={<ExpandMoreIcon />}>
                <Typography>Actions</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="simplePanel">
                <div className="flex1 vertical">
                  <SharedField schema={keyActionSchema} prefix={keyboardPrefix} />
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            {keyGroupEditor}
          </div>
        ) : (
          <p>Click on a Key in the Keyboard to edit it</p>
        )}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
})

export default KeyEditor
export {
  keyTypes
}