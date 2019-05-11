import { toJS } from "@xpfw/data"
import { FormStore } from "@xpfw/form"
import { keyboardPrefix } from "../src/form/def"
import { readFiles } from "../src/rightPanel/import"
import exampleXml from "../src/xml/example"

test("READ FILES", (done) => {
  expect(toJS(FormStore.getValue(keyboardPrefix))).toMatchSnapshot("no keyboard imported yet")
  readFiles([])
  expect(toJS(FormStore.getValue(keyboardPrefix))).toMatchSnapshot("empty import makes no changes")
  const blob = new Blob([exampleXml], {type : "application/json"})
  readFiles([blob])
  setTimeout(() => {
    expect(toJS(FormStore.getValue(keyboardPrefix))).toMatchSnapshot("imported via file")
    done()
  }, 2000)
})
