import * as React from "react"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import {
  ComponentRegistry, getMapToFromProps, SharedField,
  IFieldProps, useArray, prependPrefix, FormStore } from "@xpfw/form"
import { keyGroupArraySchema } from "../form/defKeyGroup"
import { keyboardPrefix } from "../form/def"
import { Button, IconButton } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import AddIcon from "@material-ui/icons/Add"
import { observer } from "mobx-react"


const KeyGroupArray: React.FunctionComponent<IFieldProps> = observer((props) => {
  let mapTo = getMapToFromProps(props)
  const arrayHelper = useArray(props.schema, mapTo, props.prefix)
  const groups = arrayHelper.fields.map((field, index) => {
    return (
    <div className={`flex flex1 center`} key={prependPrefix(field.mapTo, field.prefix)}>
      <ExpansionPanel className="simplePanel">
        <ExpansionPanelSummary className="simplePanel negateMarginBot" expandIcon={<ExpandMoreIcon />}>
          <Typography>{FormStore.getValue(`${field.mapTo}.Name`, field.prefix, "Keygroup #"+(index+1))}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="simplePanel">
          <div className="flex1 vertical">
            <SharedField schema={field.schema} mapTo={field.mapTo} prefix={field.prefix} />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <IconButton
        onClick={field.decreaseSize}
        color="secondary"
        style={{marginTop: "1rem"}}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  )})
  return (
    <>
      <Button
        onClick={arrayHelper.increaseSize}
        variant="contained"
        fullWidth
        endIcon={<AddIcon />}
        style={{marginBottom: "0.5rem"}}
      >
        Add
      </Button>
      {groups}
    </>
  )
})

ComponentRegistry.registerComponent("array", KeyGroupArray, "keyGroup")

const KeyGroupsComponent: React.FunctionComponent<{}> = (props) => {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Keygroups</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className="flex1 vertical">
          <SharedField schema={keyGroupArraySchema} theme="keyGroup" prefix={keyboardPrefix} />
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default KeyGroupsComponent
export {
  KeyGroupArray
}