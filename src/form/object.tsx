import { getMapToFromProps, IFieldProps, SharedField, useObject, FormStore } from "@xpfw/form"
import { observer } from "mobx-react-lite"
import * as React from "react"
import actionKeyList from "../util/actionKeys"
import { keyActionObjectSchema, actionNames} from "./def"

const ObjectField: React.FunctionComponent<IFieldProps> = observer((props) => {
  const mapTo = getMapToFromProps(props)
  const fieldHelper = useObject(props.schema, mapTo, props.prefix)
  let subFieldContent
  if (props.schema != null && props.schema.title != null && props.schema.title.indexOf("keyActionObject") !== -1) {
    const currentSubType = FormStore.getValue(mapTo, props.prefix)
    if (currentSubType != null) {
      if (actionNames.indexOf(currentSubType.actionType) !== -1) {
        let type = "string"
        let theme = "default"
        let selectOptions: any = null
        if (currentSubType.actionType == "Wait") {
          type = "number"
        } else if (currentSubType.actionType == "Action") {
          theme = "select"
          selectOptions = actionKeyList.map((v) => ({label: v, value: v}))
        }
        subFieldContent = <SharedField schema={{type, title: "value", theme, selectOptions}} mapTo={`${mapTo}.value`} prefix={props.prefix} />
        if (currentSubType.actionType == "ChangeKeyboard") {
          subFieldContent = (
            <>
              {subFieldContent}
              <SharedField schema={{type: "boolean", title: "BackReturnsHere"}} mapTo={`${mapTo}.BackReturnsHere`} prefix={props.prefix} />
            </>
          )
        }
        if (currentSubType.actionType == "Loop") {
          subFieldContent = (
            <>
              <SharedField schema={{type: "number", title: "Wait"}} mapTo={`${mapTo}.Wait`} prefix={props.prefix} />
              <SharedField schema={{type: "number", title: "Count"}} mapTo={`${mapTo}.Count`} prefix={props.prefix} />
              <SharedField schema={{type: "array", items: keyActionObjectSchema, title: "keyActions"}} mapTo={`${mapTo}.keyActions`} prefix={props.prefix} />
            </>
          )
        }
      }
    }
  }  
  return (
    <div className="flex1 vertical">
      {fieldHelper.fields.map((subField) => <SharedField {...subField} key={subField.mapTo} />)}
      {subFieldContent}
    </div>
  )
})

export default ObjectField
