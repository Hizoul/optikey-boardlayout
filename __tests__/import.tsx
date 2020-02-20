import { toJS } from "@xpfw/data"
import { FormStore } from "@xpfw/form"
import { keyboardPrefix } from "../src/form/def"
import { handleOpenAbout, handleCloseAbout, aboutIsOpen } from "../src/rightPanel/about"
import { readFiles, handleClose, copyToClipboardUi, isOpen } from "../src/rightPanel/import"
import exampleXml from "../src/xml/example"

declare const navigator: any
test("READ FILES", (done) => {
  expect(toJS(FormStore.getValue(keyboardPrefix))).toMatchSnapshot("no keyboard imported yet")
  readFiles([])
  expect(toJS(FormStore.getValue(keyboardPrefix))).toMatchSnapshot("empty import makes no changes")
  const blob = new Blob([exampleXml], {type : "application/json"})
  readFiles([blob])
  setTimeout(() => {
    expect(toJS(FormStore.getValue(keyboardPrefix))).toMatchSnapshot("imported via file")
    isOpen.set(true)
    expect(isOpen.get()).toBe(true)
    handleClose()
    expect(isOpen.get()).toBe(false)
    navigator.clipboard = {}
    let textVal = null
    navigator.clipboard.writeText = (text: any) => {textVal = text}
    copyToClipboardUi()
    expect(isOpen.get()).toBe(true)
    expect(textVal).not.toBe(null)
    expect(aboutIsOpen.get()).toBe(false)
    handleOpenAbout()
    expect(aboutIsOpen.get()).toBe(true)
    handleCloseAbout()
    expect(aboutIsOpen.get()).toBe(false)
    done()
  }, 2000)
})
