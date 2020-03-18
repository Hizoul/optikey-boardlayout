import { findIndex } from "lodash"
import * as React from "react"
import App from "../src/app"
import { keyboardPrefix } from "../src/form/def"
import {
  clickHandler
} from "../src/keyboard/key"
import { keyTypes } from "../src/rightPanel/keyEditor"
import renderSnapshot from "../src/testUtil/renderSnapshot"
import exampleXml, { exampleKeyGroupOverrideXml } from "../src/xml/example"
import xmlParser from "../src/xml/parse"
import { FormStore, memo } from "@xpfw/form"
import { resizeEventListener, keyboardContainerReference, setRegisteredToTrue } from "../src/keyboard"
import { resizeTriggerer } from "../src/rightPanel"
const dynamicKeyVal = keyTypes[0].value
const changeHelper = (mapTo: string, prefix?: string, value?: any) =>
  memo(() => () => FormStore.setValue(mapTo, value, prefix), ["changeHelper", mapTo, prefix, value])

test("app", () => {
  const Keyboard = xmlParser(exampleXml).Keyboard
  const c1 = 3
  const c2 = 6
  const r1 = 5
  const r2 = 0
  const i1 = findIndex(Keyboard.Content, {Row: r1, Col: c1})
  const i2 = findIndex(Keyboard.Content, {Row: r2, Col: c2})
  renderSnapshot(<App />, "nothing yet")
  clickHandler(-4, r1, c1)()
  renderSnapshot(<App />, "set to invalid index")
  clickHandler(i1, r1, c1)()
  renderSnapshot(<App />, "clicked on 1")
  FormStore.setValue(`Content[${i1}].labelType`, "Case Sensitive Text", keyboardPrefix)
  renderSnapshot(<App />, "clicked on 1 force shiftup + down text")
  FormStore.setValue(`Content[${i1}].labelType`, "Text", keyboardPrefix)
  renderSnapshot(<App />, "clicked on 1 force only text")
  clickHandler(i2, r2, c2)()
  renderSnapshot(<App />, "clicked on 2")
  changeHelper(`Content[${i2}].type`, keyboardPrefix, dynamicKeyVal)()
  changeHelper(`Content[${i2}].isAction`, keyboardPrefix, false)()
  renderSnapshot(<App />, "clicked on 2 and set to text key")
  changeHelper(`Content[${i2}].isAction`, keyboardPrefix, true)()
  renderSnapshot(<App />, "clicked on 2 and set to action key")
  changeHelper(`Content[${i2}].isAction`, keyboardPrefix, false)()
  changeHelper(`Content[${i2}].labelType`, keyboardPrefix, "Symbol")()
  changeHelper(`Content[${i2}].Symbol`, keyboardPrefix, "Menu")()
  renderSnapshot(<App />, "symbol example")
  changeHelper(`Content[${i2}].labelType`, keyboardPrefix, "Case Sensitive Text")()
  renderSnapshot(<App />, "case sensitive example")
  resizeEventListener()
  resizeTriggerer()
  clickHandler(-1, r1, c1)()
  renderSnapshot(<App />, "set to invalid index again")
  keyboardContainerReference.set({
    clientWidth: 1920, clientHeight: 1080, addEventListener: () => {}
  })
  renderSnapshot(<App />, "keyboard with valid container reference")
  setRegisteredToTrue()
  renderSnapshot(<App />, "keyboard with valid container reference and registered eventlistenr")

  FormStore.setValue("Keyboard", xmlParser(exampleKeyGroupOverrideXml).Keyboard)
  renderSnapshot(<App />, "test keygroup override parameters parsed successfully")
  clickHandler(i1, 4, 5)()
  renderSnapshot(<App />, "test changekeyboard true")
  clickHandler(i1, 4, 6)()
  renderSnapshot(<App />, "test changekeyboard false")
  clickHandler(i1, 4, 4)()
  renderSnapshot(<App />, "test loop")

})
