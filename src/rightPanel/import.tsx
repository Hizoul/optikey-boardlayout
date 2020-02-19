import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import TextField from '@material-ui/core/TextField'
import Snackbar from "@material-ui/core/Snackbar"
import Alert from "@material-ui/lab/Alert"
import { FormStore } from "@xpfw/form"
import * as React from "react"
import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { keyboardPrefix } from "../form/def"
import xmlParser from "../xml/parse"
import downloadKeyboard, { copyToClipboard, getKeyboardAsXml } from "../util/download"
import { observer } from "mobx-react-lite"

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

const KeyboardImporter = observer(() => {
  const onDrop = useCallback(readFiles, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  const rp: any = getRootProps()
  const handleClose = () => {

  }
  return (
    <ExpansionPanel defaultExpanded={true} expanded={true}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        File
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className="flextainer">
          <div {...rp} className="uploadContainer">
            <input {...getInputProps()} />
            <Typography>Import existing Files:</Typography>
            <Typography>Drag "n" drop or click here to select file</Typography>
          </div>
          <div className="marginTop">
            <TextField
              multiline
              rowsMax={4}
              fullWidth
              label="Keyboard XML"
              value={getKeyboardAsXml()}
              variant="outlined"
            />
            <div className="flex horizontal">
              <Button variant="outlined" color="primary" fullWidth onClick={downloadKeyboard}>download xml</Button>
              <Button variant="outlined" color="primary" fullWidth onClick={copyToClipboard}>copy xml to clipboard</Button>
              <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" variant="standard">
                  This is a success message!
                </Alert>
              </Snackbar>
            </div>
          </div>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
})

export default KeyboardImporter
export {
  readFiles
}
