import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import { getMapToFromProps, IFieldProps, JSONSchemaDefinition, memo, useFieldWithValidation } from "@xpfw/form"
import { get, isFunction } from "lodash"
import { observer } from "mobx-react"
import * as React from "react"
import getLabel from "./getLabel";

const changeWrapperSelect = (fieldHelper: any) => {
  return (e: any) => {
    const t: any = get(e, "nativeEvent.target")
    fieldHelper.setValue(t.getAttribute("data-value"))
  }
}

const SelectField: React.FunctionComponent<IFieldProps & {
  className?: string
  placeholder?: string
}> = observer((props) => {
  const mapTo = getMapToFromProps(props)
  const fieldHelper = useFieldWithValidation(props.schema, mapTo, props.prefix)
  let changeFunc = changeWrapperSelect(fieldHelper)
  let selOpts = get(props, "schema.selectOptions", [])
  if (isFunction(selOpts)) {
    selOpts = selOpts(fieldHelper.value, props.schema, props)
  }
  const options = selOpts.map((option: any) => {
    return (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    )
  })
  return (
    <FormControl fullWidth className="inputMargin">
      <InputLabel>{getLabel(mapTo)}</InputLabel>
        <Select
          onChange={changeFunc}
          value={fieldHelper.value}
        >
          {options}
        </Select>
        <FormHelperText>{get(props, "schema.description")}</FormHelperText>
     </FormControl>
  )
})

export default SelectField
export {
  changeWrapperSelect
}