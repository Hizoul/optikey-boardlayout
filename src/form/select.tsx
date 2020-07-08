import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import { getMapToFromProps, IFieldProps, JSONSchemaDefinition, memo, useFieldWithValidation, prependPrefix, FormStore } from "@xpfw/form"
import { get, isFunction } from "lodash"
import { observer } from "mobx-react"
import * as React from "react"
import getLabel from "./getLabel";
import { toJS } from "@xpfw/data"

const changeWrapperSelect = (fieldHelper: any, mapToOrig: string, prefix?: string) => {
  const actualMapTo = mapToOrig.substring(mapToOrig.lastIndexOf(".") + 1)
  const mapTo = mapToOrig.substring(0, mapToOrig.lastIndexOf("."))
  return (e: any) => {
    const t: any = get(e, "nativeEvent.target")
    const value = t.getAttribute("data-value")
    if (value == null || value == "") {
      let currentVal = FormStore.getValue(mapTo, prefix)
      if (currentVal != null) {
        currentVal = toJS(currentVal)
        delete currentVal[actualMapTo]
        fieldHelper.setValue("")
        FormStore.setValue(mapTo, currentVal, prefix)
      }
    } else {
      fieldHelper.setValue(value)
    }
  }
}

const SelectField: React.FunctionComponent<IFieldProps & {
  className?: string
  placeholder?: string
}> = observer((props) => {
  const mapTo = getMapToFromProps(props)
  const fieldHelper = useFieldWithValidation(props.schema, mapTo, props.prefix)
  let changeFunc = changeWrapperSelect(fieldHelper, mapTo, props.prefix)
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