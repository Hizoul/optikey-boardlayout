import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import { getMapToFromProps, IFieldProps, JSONSchemaDefinition, memo, useFieldWithValidation } from "@xpfw/form"
import { get, isFunction } from "lodash"
import { observer } from "mobx-react-lite"
import * as React from "react"
import getLabel from "./getLabel";

const SelectField: React.FunctionComponent<IFieldProps & {
  className?: string
  placeholder?: string
}> = observer((props) => {
  const mapTo = getMapToFromProps(props)
  const fieldHelper = useFieldWithValidation(props.schema, mapTo, props.prefix)
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
    <FormControl fullWidth>
      <InputLabel>{getLabel(mapTo)}</InputLabel>
        <Select
          onChange={(e) => {
            const t: any = get(e, "nativeEvent.target")
            fieldHelper.setValue(t.getAttribute("data-value"))
          }}
          value={fieldHelper.value}
        >
          {options}
        </Select>
     </FormControl>
  )
})

export default SelectField
