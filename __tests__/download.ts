import { FormStore } from "@xpfw/form"
import downloadKeyboard from "../src/util/download"
import exampleXml from "../src/xml/example"
import xmlParser from "../src/xml/parse"
window.URL.createObjectURL = () => "myOBJURL"
window.URL.revokeObjectURL = () => "myOBJURL"
FormStore.setValue("Keyboard", xmlParser(exampleXml).Keyboard)
test("Downlaod test", () => {
  downloadKeyboard()
})
