import { FormStore } from "@xpfw/form"
import * as React from "react"
import KeyboardDisplay from "./keyboard"
import RightPanel from "./rightPanel"
import exampleXml from "./xml/example"
import xmlParser from "./xml/parse"

FormStore.setValue("Keyboard", xmlParser(exampleXml).Keyboard)

const App: React.FunctionComponent<any> = () => (
  <div>
    <KeyboardDisplay />
    <RightPanel />
  </div>
)

export default App
