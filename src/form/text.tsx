import TextFiel from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import { getMapTo, getMapToFromProps, IFieldProps, JSONSchemaDefinition, memo, useFieldWithValidation } from "@xpfw/form"
import { get } from "lodash"
import { observer } from "mobx-react-lite"
import * as momentA from "moment"
import * as React from "react"
import getLabel from "./getLabel";
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
  const value = fieldHelper.value ? fieldHelper.value : ""
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
    <FormControl className="inputMargin">
      <MTextField
        type={type}
        label={getLabel(getMapTo(props.schema, props.mapTo))}
        id={get(props, "id")}
        className={get(props, "className")}
        value={value}
        inputProps={{step, min, max}}
        onChange={onChange}
        placeholder={props.placeholder}
        fullWidth
      />
      <FormHelperText>{get(props, "schema.description")}</FormHelperText>
    </FormControl>
  )
})

export default TextField
