import { Typography } from "@material-ui/core"
import Button from '@material-ui/core/Button'
import { FormStore, getMapTo, IFieldProps, memo, useField } from "@xpfw/form"
import { observer } from "mobx-react-lite"
import * as React from "react"
const textKeyVal = "TextKey"
const actionKeyVal = "ActionKey"

const changeHelper = (mapTo: string, prefix?: string, value?: string) =>
  memo(() => () => FormStore.setValue(mapTo, value, prefix), ["changeHelper", mapTo, prefix, value])

const SelectButton: React.FunctionComponent<IFieldProps & {value: any, v: string}> = (props) => {
  const mapTo = getMapTo(props.schema, props.mapTo)
  return (
    <Button
      color={props.v === props.value ? "primary" : "Type"}
      onClick={changeHelper(mapTo, props.prefix, props.v)}
      fullWidth
    >
      {props.v}
    </Button>
  )
}

const TypeSelectionField: React.FunctionComponent<IFieldProps> = observer((props) => {
  const mapTo = getMapTo(props.schema, props.mapTo)
  const fieldProps = useField(mapTo, props.prefix)
  return (
    <div className="flex1 center">
      <Typography>Type</Typography>
      <SelectButton {...props} {...fieldProps} v={textKeyVal} />
      <SelectButton {...props} {...fieldProps} v={actionKeyVal} />
    </div>
  )
})

export default TypeSelectionField
export {
  changeHelper, textKeyVal, actionKeyVal
}
