import * as React from "react"
import { changeWrapper } from "../src/form/boolean"
import SelectField, { changeWrapperSelect } from "../src/form/select"
import renderSnapshot from "../src/testUtil/renderSnapshot"
import { Transition } from "../src/rightPanel/about"
import { FormStore } from "@xpfw/form"
import { toJS } from "@xpfw/data"
import {isEqual} from "lodash"

test("100percent", () => {
  // test boolean change function
  const fieldHelper: any = {value: undefined}
  fieldHelper.setValue = (newVal: any) => fieldHelper.value = newVal
  let changer = changeWrapper(fieldHelper)
  changer(null)
  expect(fieldHelper.value).toBe(true)
  changer(null)
  expect(fieldHelper.value).toBe(false)

  const changerSelect = changeWrapperSelect(fieldHelper, "I.bla", "blu")
  changerSelect({nativeEvent: {target: {getAttribute: () => "customVal"}}})
  expect(fieldHelper.value === "customVal").toBeTruthy()
  FormStore.setValue("blu", {I: {bla: "VAL"}})
  console.log("GETTING", toJS(FormStore.getValue("blu")), {bla: "VAL"}, isEqual(toJS(FormStore.getValue("blu")), {bla: "VAL"}))
  expect(isEqual(toJS(FormStore.getValue("blu")), {I: {bla: "VAL"}})).toBe(true)
  changerSelect({nativeEvent: {target: {getAttribute: () => null}}})
  console.log("GETTING", toJS(FormStore.getValue("blu")), {bla: "VAL"}, isEqual(toJS(FormStore.getValue("blu")), {bla: "VAL"}))
  expect(isEqual(toJS(FormStore.getValue("blu")), {I: {}})).toBe(true)
  const selectSchema: any = {
    title: "my select with func",
    selectOptions: () => ["my ", "select", "function", "args"]
  }
  renderSnapshot(<SelectField schema={selectSchema} />, "select field with function args")

  renderSnapshot(<Transition/>, "transition render")
})