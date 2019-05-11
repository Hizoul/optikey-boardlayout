import { FormStore } from "@xpfw/form/dist"
import * as React from "react"
import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { keyboardPrefix } from "../form/def"
import xmlParser from "../xml/parse"

const KeyboardImporter = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log("FILES ARE", acceptedFiles)
    if (acceptedFiles.length > 0) {
      const reader = new FileReader()
      reader.readAsText(acceptedFiles[0])
      reader.onloadend = () => {
        const res: any = reader.result
        console.log("FILECONTENT IS", reader.result, xmlParser(res))
        FormStore.setValue(keyboardPrefix, xmlParser(res).Keyboard)
      }
    }
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default KeyboardImporter
