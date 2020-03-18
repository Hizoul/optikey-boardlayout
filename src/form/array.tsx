import { getMapToFromProps, IFieldProps, prependPrefix, SharedField, useArray } from "@xpfw/form"
import { observer } from "mobx-react-lite"
import * as React from "react"
import { Button, IconButton } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import AddIcon from "@material-ui/icons/Add"

const ArrayField: React.FunctionComponent<IFieldProps> = observer((props) => {
  let mapTo = getMapToFromProps(props)
  const arrayHelper = useArray(props.schema, mapTo, props.prefix)
  let hideArrayType = mapTo.indexOf("keyActions") !== -1 && arrayHelper.length < 2
  console.log("ARRAY ", hideArrayType, mapTo, mapTo.indexOf("keyActions") !== -1, arrayHelper.length)
  return (
    <div>
      {arrayHelper.fields.map((field) => {
        return (
        <div className={`flex flex1 center ${hideArrayType ? "" : "objectMargin"}`} key={prependPrefix(field.mapTo, field.prefix)}>
          <SharedField schema={field.schema} mapTo={field.mapTo} prefix={field.prefix} />
          {hideArrayType ? null : <IconButton
            onClick={field.decreaseSize}
            color="secondary"
          >
            <DeleteIcon />
          </IconButton>}
        </div>
      )})}
      {hideArrayType ? null : 
        <Button
          onClick={arrayHelper.increaseSize}
          variant="contained"
          fullWidth
          endIcon={<AddIcon />}
        >
          Add
        </Button>}
    </div >
  )
})

export default ArrayField
