import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
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
  const rp: any = getRootProps()
  return (

    <ExpansionPanel {...rp} defaultExpanded={false} expanded={false}>
      <ExpansionPanelSummary>
        <input {...getInputProps()} />
        <Typography>Upload</Typography>
        <Typography>Drag 'n' drop some files here, or click to select files</Typography>
      </ExpansionPanelSummary>
    </ExpansionPanel>
  )
}

export default KeyboardImporter
export {
  readFiles
}
