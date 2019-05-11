import { FormStore, SharedField } from "@xpfw/form"
import { observer } from "mobx-react-lite"
import * as React from "react"
import { activeKey, keyboardPrefix } from "../form/def"
import TypeSelectionField from "../form/typeSelection"

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
    type: "string"
  }
  return (
    <div>
      Key Editor
      {keyIndex && keyIndex > 0 && keyIndex < keysLength ? (
        <div>
          Editing {keyIndex}
          <TypeSelectionField schema={typeSchema} prefix={keyboardPrefix} />
          <SharedField schema={textSchema} prefix={keyboardPrefix} />
          <SharedField schema={labelSchema} prefix={keyboardPrefix} />
          <SharedField schema={shiftUpLabelSchema} prefix={keyboardPrefix} />
          <SharedField schema={shiftDownLabelSchema} prefix={keyboardPrefix} />
          <SharedField schema={symbolSchema} prefix={keyboardPrefix} />
          <SharedField schema={actionSchema} prefix={keyboardPrefix} />
        </div>
      ) : (
        <p>Click on a Key in the Keyboard to edit it</p>
      )}
    </div>
  )
})

export default KeyEditor
