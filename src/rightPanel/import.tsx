import { FormStore } from "@xpfw/form"
import * as React from "react"
import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { keyboardPrefix } from "../form/def"
import xmlParser from "../xml/parse"

const readFiles = (acceptedFiles: any) => {
  if (acceptedFiles.length > 0) {
    const reader = new FileReader()
    reader.readAsText(acceptedFiles[0])
    reader.onloadend = () => {
      const res: any = reader.result
      FormStore.setValue(keyboardPrefix, xmlParser(res).Keyboard)
    }
  }
}

const KeyboardImporter = () => {
  const onDrop = useCallback(readFiles, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  )
}

export default KeyboardImporter
export {
  readFiles
}
