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
    <a
      className={`button ${props.v === props.value ? "selected" : ""}`}
      onClick={changeHelper(mapTo, props.prefix, props.v)}
    >
      {props.v}
    </a>
  )
}

const TypeSelectionField: React.FunctionComponent<IFieldProps> = observer((props) => {
  const mapTo = getMapTo(props.schema, props.mapTo)
  const fieldProps = useField(mapTo, props.prefix)
  return (
    <div>
      Select Key Type
      <SelectButton {...props} {...fieldProps} v={textKeyVal} />
      <SelectButton {...props} {...fieldProps} v={actionKeyVal} />
    </div>
  )
})

export default TypeSelectionField
export {
  changeHelper, textKeyVal, actionKeyVal
}
