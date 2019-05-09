import { FormStore } from "@xpfw/form"
import { keyboardPrefix } from "../form/def"
import { toXml } from "../xml/parse"

const downloadUrl = (title: string, url: string) => {
  const a = document.createElement("a")
  document.body.appendChild(a)
  a.href = url
  a.download = title
  a.click()
  document.body.removeChild(a)
}

const downloadBlob = (title: string, blob: Blob) => {
  const url = window.URL.createObjectURL(blob)
  downloadUrl(title, url)
  window.URL.revokeObjectURL(url)
}

const downloadKeyboard = () => {
  downloadBlob("keyboard.xml",
    new Blob([toXml({Keyboard: FormStore.getValue(keyboardPrefix)})], {type: "application/xml"}))
}

export default downloadKeyboard
