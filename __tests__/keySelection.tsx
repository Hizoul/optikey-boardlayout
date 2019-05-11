import { findIndex } from "lodash"
import * as React from "react"
import App from "../src/app"
import { keyboardPrefix } from "../src/form/def";
import { actionKeyVal, changeHelper, textKeyVal } from "../src/form/typeSelection"
import {
  clickHandler
} from "../src/keyboard/key"
import renderSnapshot from "../src/testUtil/renderSnapshot"
import exampleXml from "../src/xml/example"
import xmlParser from "../src/xml/parse"

test("app", () => {
  const Keyboard = xmlParser(exampleXml).Keyboard
  const c1 = 3
  const c2 = 4
  const r1 = 5
  const r2 = 5
  const i1 = findIndex(Keyboard.Keys, {Row: r1, Col: c1})
  const i2 = findIndex(Keyboard.Keys, {Row: r2, Col: c2})
  renderSnapshot(<App />, "nothing yet")
  clickHandler(-4)()
  renderSnapshot(<App />, "set to invalid index")
  clickHandler(i1)()
  renderSnapshot(<App />, "clicked on 1")
  clickHandler(i2)()
  renderSnapshot(<App />, "clicked on 2")
  changeHelper(`Keys[${i2}].type`, keyboardPrefix, textKeyVal)()
  renderSnapshot(<App />, "clicked on 2 and set to text key")
  changeHelper(`Keys[${i2}].type`, keyboardPrefix, actionKeyVal)()
  renderSnapshot(<App />, "clicked on 2 and set to action key")
})
