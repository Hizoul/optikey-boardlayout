import TextFiel from '@material-ui/core/TextField'
import { getMapTo, getMapToFromProps, IFieldProps, JSONSchemaDefinition, memo, useFieldWithValidation } from "@xpfw/form"
import { get } from "lodash"
import { observer } from "mobx-react-lite"
import * as momentA from "moment"
import * as React from "react"
const MTextField: any = TextFiel
const TextField: React.FunctionComponent<IFieldProps & {
  className?: string
  placeholder?: string
}> = observer((props) => {
  const format = get(props, "schema.format")
  const isDate = format === "date" || format === "date-time" || format === "time"
  const fieldHelper = useFieldWithValidation(props.schema, getMapToFromProps(props), props.prefix, {
    valueEventKey: "nativeEvent.target.value"
  })
  const fieldType = get(props, "schema.type")
  const value = fieldHelper.value
  let type = "text"
  let min
  let max
  let step
  const onChange = fieldHelper.setValue
  if (fieldType === "number") {
    type = "number"
    min = get(props, "schema.minimum")
    max = get(props, "schema.maximum")
    step = get(props, "schema.step")
  }
  return (
    <MTextField
      type={type}
      label={getMapTo(props.schema, props.mapTo)}
      id={get(props, "id")}
      className={get(props, "className")}
      value={value}
      inputProps={{step, min, max}}
      onChange={onChange}
      placeholder={props.placeholder}
      fullWidth
    />
  )
})

export default TextField
