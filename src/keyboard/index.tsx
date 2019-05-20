import { toJS } from "@xpfw/data"
import { FormStore } from "@xpfw/form"
import { findIndex } from "lodash"
import { observer } from "mobx-react-lite"
import * as React from "react"
import { withContentRect } from "react-measure"
import { activeKey, colsSchema, keyboardPrefix, rowsSchema } from "../form/def"
import KeyDisplay from "./key"
import "./keyboardStyle.css"

const KeyboardDisplay = observer(() => {
  const gridLength = FormStore.getValue(rowsSchema.title, keyboardPrefix, 1)
  const gridHeight = FormStore.getValue(colsSchema.title, keyboardPrefix, 1)
  const keys = FormStore.getValue("Keys", keyboardPrefix, [])
  const keyIndex = FormStore.getValue(activeKey)
  const r = React.useState(undefined)
  const toRender = []
  let width = 30
  let height = 20
  if (r[0] != null) {
    const ele: any = r[0]
    width = Math.floor((ele.clientWidth - 26)  / (gridHeight))
    height = Math.floor((Math.min(ele.clientHeight, window.innerHeight) - 10) / (gridLength))
  }
  for (let row = 0; row < gridLength; row++) {
    for (let col = 0; col < gridHeight; col++) {
      const keyboardIndex: any = findIndex(keys,  {Row: row, Col: col})
      toRender.push(
        <KeyDisplay
          key={`${row}.${col}`}
          row={row}
          col={col}
          index={keyboardIndex}
          entry={keys[keyboardIndex]}
          height={height}
          width={width}
        />
      )
    }
    // toRender.push(<div key={`break${row}`} className="breakPoint" />)
  }
  return (
    <div ref={(ref: any) => r[1](ref)} className="keyboard">
      {toRender}
    </div>
  )
})

export default KeyboardDisplay
