import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { FormStore, SharedField } from "@xpfw/form"
import { SelectField } from "@xpfw/form-web"
import { observer } from "mobx-react-lite"
import * as React from "react"
import { activeKey, keyboardPrefix } from "../form/def"
import actionKeyList from "../util/actionKeys"
import symbolList from "../util/symbols"

const keyTypes: any[] = ["DynamicKey", "Scratchpad", "SuggestionRow", "SuggestionCol"].map((v) =>{return {value: v, label: v}})

const KeyEditor = observer(() => {
  const keyIndex = FormStore.getValue(activeKey, undefined)
  const keysLength = FormStore.getValue("Content.length", keyboardPrefix, 2)
  const typeSchema = {
    title: `Content[${keyIndex}].type`,
    type: "string", theme: "select",
    selectOptions: keyTypes
  }
  const textSchema = {
    title: `Content[${keyIndex}].Text`,
    type: "string"
  }
  const labelSchema = {
    title: `Content[${keyIndex}].Label`,
    type: "string"
  }
  const shiftUpLabelSchema = {
    title: `Content[${keyIndex}].ShiftUpLabel`,
    type: "string"
  }
  const shiftDownLabelSchema = {
    title: `Content[${keyIndex}].ShiftDownLabel`,
    type: "string"
  }
  const symbolSchema = {
    title: `Content[${keyIndex}].Symbol`,
    type: "string",
    theme: "select",
    selectOptions: symbolList.map((v) => ({label: v, value: v}))
  }
  const actionSchema = {
    title: `Content[${keyIndex}].Action`,
    type: "string",
    theme: "select",
    selectOptions: actionKeyList.map((v) => ({label: v, value: v}))
  }
  const isActionSchema = {
    title: `Content[${keyIndex}].isAction`,
    type: "boolean"
  }
  const caseSensitiveSchema = {
    title: `Content[${keyIndex}].caseSensitive`,
    type: "boolean"
  }
  const useSymbolSchema = {
    title: `Content[${keyIndex}].useSymbol`,
    type: "boolean"
  }
  const caseSensitiveValue = FormStore.getValue(caseSensitiveSchema.title, keyboardPrefix)
  const useSymbol = FormStore.getValue(useSymbolSchema.title, keyboardPrefix)
  const typeValue = FormStore.getValue(typeSchema.title, keyboardPrefix)
  const isAction = FormStore.getValue(isActionSchema.title, keyboardPrefix, false)
  const keySelected = keyIndex && keyIndex > 0 && keyIndex < keysLength
  let editContent
  switch (typeValue) {
    case keyTypes[0].value: {
      editContent = (
        <>
          <SharedField schema={isActionSchema} prefix={keyboardPrefix} />
          {isAction ? (
            <>
              <SharedField schema={symbolSchema} prefix={keyboardPrefix} />
              <SharedField schema={actionSchema} prefix={keyboardPrefix} />
            </>
          ) : (
            <>
              <SharedField schema={textSchema} prefix={keyboardPrefix} />
              <SharedField schema={useSymbolSchema} prefix={keyboardPrefix} />
              {useSymbol ?
                <SharedField schema={symbolSchema} prefix={keyboardPrefix} /> :
                (<>
                  <SharedField schema={caseSensitiveSchema} prefix={keyboardPrefix} />
                  {caseSensitiveValue ? (
                    <>
                      <SharedField schema={shiftUpLabelSchema} prefix={keyboardPrefix} />
                      <SharedField schema={shiftDownLabelSchema} prefix={keyboardPrefix} />
                    </>
                  ) : <>
                    <SharedField schema={labelSchema} prefix={keyboardPrefix} />
                  </>}
                </>)
                }
            </>
          )}
        </>)
      break
    }
  }
  return (
    <ExpansionPanel expanded={keySelected ? true : false}>
      <ExpansionPanelSummary>
        <Typography>{keySelected ? "Key Settings" : "Click on a key to edit it here"}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {keySelected ? (
          <div className="vertical flex1">
            <SharedField schema={typeSchema} prefix={keyboardPrefix} />
            {editContent}

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