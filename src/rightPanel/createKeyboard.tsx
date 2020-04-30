import * as React from "react"
import { SharedField, ExtendedJSONSchema, FormStore } from "@xpfw/form"
import Button from "@material-ui/core/Button"
import exampleXml, { exampleKeyGroupOverrideXml } from "../xml/example"
import xmlParser from "../xml/parse"

const createKeyboardPrefix = "createKeyboard"

const createWidth: ExtendedJSONSchema = {
  type: "number",
  title: "Rows"
}

const createHeight: ExtendedJSONSchema = {
  type: "number",
  title: "Columns"
}

FormStore.setValue(String(createWidth.title), 7, createKeyboardPrefix)
FormStore.setValue(String(createHeight.title), 12, createKeyboardPrefix)
const createNewKeyboard = () => {
  let width = FormStore.getValue(String(createWidth.title), createKeyboardPrefix)
  let height = FormStore.getValue(String(createHeight.title), createKeyboardPrefix)
  const parsedKeyboard = xmlParser(exampleXml).Keyboard
  parsedKeyboard.Grid.Rows = width
  parsedKeyboard.Grid.Cols = height
  parsedKeyboard.Content = []
  FormStore.setValue("Keyboard", parsedKeyboard)
}

const CreateKeyboard: React.FunctionComponent<{}> = (props) => {
  return (
    <div className="flex vertical">
      <div className="flex1 horizontal">
        <div className="flex1 vertical" style={{marginRight: "0.5rem"}}>
          <SharedField schema={createWidth} prefix={createKeyboardPrefix} />
        </div>
        <div className="flex1 vertical">
          <SharedField schema={createHeight} prefix={createKeyboardPrefix} />
        </div>
      </div>
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        onClick={createNewKeyboard}
      >
          New
        </Button>
    </div>
  )
}

export default CreateKeyboard
export {
  createNewKeyboard
}