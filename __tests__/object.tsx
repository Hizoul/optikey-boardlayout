import * as React from "react"
import { doParsing } from "../src/app"
import renderSnapshot from "../src/testUtil/renderSnapshot"
import ObjectField from "../src/form/object"
import { keyboardPrefix } from "../src/form/def"
import exampleXml from "../src/xml/example"
import { FormStore } from "@xpfw/form/dist"

test("app", () => {
  doParsing(exampleXml)
  const objSchema: any = {
    type: "object",
    title: "keyActionObject",
    properties: {
      bla: {type: "string"},
      blu: {type: "string"}
    }
  }
  renderSnapshot(<ObjectField schema={objSchema} prefix={keyboardPrefix} />, "without actionType specified")
  FormStore.setValue(objSchema.title, {actionType: "unknown"}, keyboardPrefix)
  renderSnapshot(<ObjectField schema={objSchema} prefix={keyboardPrefix} />, "with invalid actionType specified")
})
