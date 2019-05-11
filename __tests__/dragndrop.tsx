import { toJS } from "@xpfw/data";
import { FormStore } from "@xpfw/form";
import { findIndex } from "lodash"
import * as React from "react"
import App from "../src/app"
import { keyboardPrefix } from "../src/form/def";
import {
  dragEndHandler, dragLeaveHandler, dragOverHandler, dragStartHandler, dropHandler, switchKeys
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
  const dragObj: any = {
    data: {},
    dataTransfer: {setData: (k: any, v: any) => dragObj.data[k] = v, getData: (k: any) => dragObj.data[k]}
  }
  renderSnapshot(<App />, "nothing yet")
  dragStartHandler(i1, r1, c1)(dragObj)
  expect(dragObj.dataTransfer).toMatchSnapshot("transfer data on dragstart")
  renderSnapshot(<App />, "started dragging 1")
  dragOverHandler(i2, r2, c2)(dragObj)
  renderSnapshot(<App />, "dragging 1 over 2")
  dragLeaveHandler(i2, r2, c2)()
  renderSnapshot(<App />, "dragging 1 but left 2")
  dragEndHandler(i1, r1, c1)()
  renderSnapshot(<App />, "back to nothing")
  dragOverHandler(i2, r2, c2)(dragObj)
  expect(dragObj.dataTransfer).toMatchSnapshot("transfer data on dragover")
  renderSnapshot(<App />, "1 hovering over 2")
  dropHandler(i1, r1, c1)(dragObj)
  expect(dragObj.dataTransfer).toMatchSnapshot("transfer data on drop")
  renderSnapshot(<App />, "drop 1 on 2 and hence switch them")
  FormStore.setValue("Keys", [], keyboardPrefix)
  switchKeys(c1, c2, r1, r2)
  expect(toJS(FormStore.getValue("Keys", keyboardPrefix))).toMatchSnapshot("after switching two invalid keys")
})
