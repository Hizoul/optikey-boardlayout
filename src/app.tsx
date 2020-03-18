import { FormStore } from "@xpfw/form"
import * as React from "react"
import KeyboardDisplay from "./keyboard"
import RightPanel from "./rightPanel"
import exampleXml, { exampleKeyGroupOverrideXml} from "./xml/example"
import xmlParser from "./xml/parse"

FormStore.setValue("Keyboard", xmlParser(exampleKeyGroupOverrideXml).Keyboard)

const App: React.FunctionComponent<any> = () => (
  <>
    <div className="keyboardContainer">
      <KeyboardDisplay />
    </div>
    <RightPanel />
  </>
)

export default App
