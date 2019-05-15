import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import { getMapToFromProps, IFieldProps, JSONSchemaDefinition, memo, useFieldWithValidation } from "@xpfw/form"
import { observer } from "mobx-react-lite"
import * as React from "react"
import getLabel from "./getLabel"

const BooleanField: React.FunctionComponent<IFieldProps & {
  className?: string
  placeholder?: string
}> = observer((props) => {
  const mapTo = getMapToFromProps(props)
  const fieldHelper = useFieldWithValidation(props.schema, mapTo, props.prefix)
  return (
    <FormControlLabel
        control={
          <Checkbox
            checked={fieldHelper.value}
            onChange={(e) => {
              fieldHelper.setValue(!fieldHelper.value)
            }}
            value={fieldHelper.value}
          />
        }
        label={getLabel(mapTo)}
    />
  )
})

export default BooleanField
