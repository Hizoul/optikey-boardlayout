import { FormStore } from "@xpfw/form"
import * as React from "react"
import KeyboardDisplay from "./keyboard"
import RightPanel from "./rightPanel"
import exampleXml, { exampleKeyGroupOverrideXml } from "./xml/example"
import xmlParser from "./xml/parse"

const doParsing = (keyboardXml: string) => {
  const parsedKeyboard = xmlParser(keyboardXml).Keyboard
  FormStore.setValue("Keyboard", parsedKeyboard)
  if (parsedKeyboard.keyGroups.length === 0) {
    FormStore.setValue("Keyboard.keyGroups", [{}])
  }
}
doParsing(exampleXml)


const App: React.FunctionComponent<any> = () => (
  <>
    <div className="keyboardContainer">
      <KeyboardDisplay />
    </div>
    <RightPanel />
  </>
)

export default App
export { doParsing }