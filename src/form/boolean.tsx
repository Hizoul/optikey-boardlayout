import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { getMapToFromProps, IFieldProps, useFieldWithValidation } from "@xpfw/form"
import { get } from "lodash"
import { observer } from "mobx-react-lite"
import * as React from "react"
import getLabel from "./getLabel"
import { InputLabel } from '@material-ui/core'

const changeWrapper = (fieldHelper: {setValue: Function, value: any}) => {
  return (e: any) => {
    fieldHelper.setValue(!fieldHelper.value)
  }
}

const BooleanField: React.FunctionComponent<IFieldProps & {
  className?: string
  placeholder?: string
}> = observer((props) => {
  const mapTo = getMapToFromProps(props)
  const fieldHelper = useFieldWithValidation(props.schema, mapTo, props.prefix)
  const setBool = changeWrapper(fieldHelper)
  return (
    <div className="flex horizontal inputMargin">
      <FormControlLabel
          control={
            <>
            <Checkbox
              checked={fieldHelper.value}
              onChange={setBool}
              value={fieldHelper.value}
            />
            </>
          }
          label={getLabel(mapTo)}
      />
      <FormHelperText className="center">{get(props, "schema.description")}</FormHelperText>
    </div>
  )
})

export default BooleanField
export {
  changeWrapper
}