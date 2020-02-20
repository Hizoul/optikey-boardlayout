import * as React from "react"
import { changeWrapper } from "../src/form/boolean"
import SelectField, { changeWrapperSelect } from "../src/form/select"
import renderSnapshot from "../src/testUtil/renderSnapshot"
import { Transition } from "../src/rightPanel/about"

test("100percent", () => {
  // test boolean change function
  const fieldHelper: any = {value: undefined}
  fieldHelper.setValue = (newVal: any) => fieldHelper.value = newVal
  let changer = changeWrapper(fieldHelper)
  changer(null)
  expect(fieldHelper.value).toBe(true)
  changer(null)
  expect(fieldHelper.value).toBe(false)

  const changerSelect = changeWrapperSelect(fieldHelper)
  changerSelect({nativeEvent: {target: {getAttribute: () => "customVal"}}})
  expect(fieldHelper.value === "customVal").toBeTruthy()
  const selectSchema: any = {
    title: "my select with func",
    selectOptions: () => ["my ", "select", "function", "args"]
  }
  renderSnapshot(<SelectField schema={selectSchema} />, "select field with function args")

  renderSnapshot(<Transition/>, "transition render")
})