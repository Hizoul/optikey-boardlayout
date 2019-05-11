import { toJS } from "@xpfw/data"
import { FormStore } from "@xpfw/form"
import { findIndex } from "lodash"
import { observer } from "mobx-react-lite"
import * as React from "react"
import { colsSchema, keyboardPrefix, rowsSchema } from "../form/def"
import KeyDisplay from "./key"
import "./keyboardStyle.css"

const KeyboardDisplay = observer(() => {
  const gridLength = FormStore.getValue(rowsSchema.title, keyboardPrefix, 1)
  const gridHeight = FormStore.getValue(colsSchema.title, keyboardPrefix, 1)
  const keys = FormStore.getValue("Keys", keyboardPrefix, [])
  const toRender = []
  for (let row = 0; row < gridLength; row++) {
    for (let col = 0; col < gridHeight; col++) {
      const keyboardIndex: any = findIndex(keys,  {Row: row, Col: col})
      toRender.push(
        <KeyDisplay key={`${row}.${col}`} row={row} col={col} index={keyboardIndex} entry={keys[keyboardIndex]} />
      )
    }
    toRender.push(<div key={`break${row}`} className="breakPoint" />)
  }
  return (
    <div className="keyboard">
      {toRender}
    </div>
  )
})

export default KeyboardDisplay
