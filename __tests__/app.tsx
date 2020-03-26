import * as React from "react"
import App, { doParsing } from "../src/app"
import renderSnapshot from "../src/testUtil/renderSnapshot"
import exampleXml, { exampleKeyGroupOverrideXml } from "../src/xml/example"

test("app", () => {
  doParsing(exampleXml)
  renderSnapshot(<App />, "inital app render simple keyboard")
  doParsing(exampleKeyGroupOverrideXml)
  renderSnapshot(<App />, "inital app render advanced keyboard")
})
