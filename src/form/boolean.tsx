import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { getMapToFromProps, IFieldProps, JSONSchemaDefinition, memo, useFieldWithValidation } from "@xpfw/form"
import { observer } from "mobx-react-lite"
import * as React from "react"

const BooleanField: React.FunctionComponent<IFieldProps & {
  className?: string
  placeholder?: string
}> = observer((props) => {
  const mapTo = getMapToFromProps(props)
  const fieldHelper = useFieldWithValidation(props.schema, mapTo, props.prefix, {
    valueEventKey: "nativeEvent.target.value"
  })
  return (
    <FormControlLabel
        control={
          <Checkbox
            checked={fieldHelper.value}
            onChange={fieldHelper.setValue}
            value={fieldHelper.value}
          />
        }
        label={mapTo}
      />
  )
})

export default BooleanField
