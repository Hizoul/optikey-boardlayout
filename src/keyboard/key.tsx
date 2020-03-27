import { FormStore, memo } from "@xpfw/form"
import { findIndex, get } from "lodash"
import { action } from "mobx"
import { observer } from "mobx-react"
import * as React from "react"
import { activeKey, dragKey, hoverKey, keyboardPrefix } from "../form/def"
import { resizeEventListener } from "./index"

const switchKeys = action((row1: number, col1: number, row2: number, col2: number) => {
  const keys = FormStore.getValue("Content", keyboardPrefix, [])
  const v1 = findIndex(keys, {Row: row1, Col: col1})
  const v2 = findIndex(keys, {Row: row2, Col: col2})
  if (v1 === -1) {
    keys.push({Row: row2, Col: col2})
  } else {
    keys[v1].Row = row2
    keys[v1].Col = col2
  }
  if (v2 === -1) {
    keys.push({Row: row1, Col: col1})
  } else {
    keys[v2].Row = row1
    keys[v2].Col = col1
  }
})
const keyMaker = (index: number, row: number, col: number) => `x${index}X${row}X${col}`

const clickHandler = (index: number, Row: number, Col: number) => memo(() => action(() => {
  let indexToUse = index
  if (indexToUse === -1) {
    // const keys = FormStore.getValue(`${keyboardPrefix}.Content`)
    // indexToUse = keys.push({
    //   Row, Col, type: "DynamicKey", Text: "", Label: ""
    // }) - 1
    // FormStore.getValue(`${keyboardPrefix}.Content`, keys)
  }
  FormStore.setValue(activeKey, indexToUse)
  setTimeout(resizeEventListener, 1100)
}), [activeKey, Row, Col, index])

const dragStartHandler = (index: number, row: number, col: number) => memo(() => (e: any) => {
  e.dataTransfer.dropEffect = "copy"
  e.dataTransfer.setData("row", String(row))
  e.dataTransfer.setData("col", String(col))
  FormStore.setValue(keyMaker(index, row, col), true, dragKey)
}, [dragKey + "start", index, row, col])
const dragEndHandler = (index: number, row: number, col: number) => memo(() => (e: any) => {
  FormStore.setValue(keyMaker(index, row, col), false, dragKey)
}, [dragKey + "end", index, row, col])
const dropHandler = (index: number, row: number, col: number) => memo(() => (e: any) => {
  FormStore.setValue(keyMaker(index, row, col), false, hoverKey)
  switchKeys(row, col, Number(e.dataTransfer.getData("row")), Number(e.dataTransfer.getData("col")))
}, [dragKey + "drop", index, row, col])
const dragOverHandler = (index: number, row: number, col: number) => memo(() => (e: any) => {
  e.dataTransfer.dropEffect = "move"
  FormStore.setValue(keyMaker(index, row, col), true, hoverKey)
}, [hoverKey + "start", index, row, col])
const dragLeaveHandler = (index: number, row: number, col: number) => memo(() => (e: any) => {
  FormStore.setValue(keyMaker(index, row, col), false, hoverKey)
}, [hoverKey + "enbd", index, row, col])

const KeyDisplay: React.FunctionComponent<{
  row: number, col: number
  index: number
  width: number
  height: number
  entry: any
}> = observer((props) => {
  const k = `x${props.index}X${props.row}X${props.col}`
  const isOver = FormStore.getValue(k, hoverKey, false)
  const isDragged = FormStore.getValue(k, dragKey, false)
  const keyIndex = FormStore.getValue(activeKey, undefined)
  const selected = props.index === keyIndex
  const labelType = get(props, "entry.labelType", "Text")
  const useSymbol = labelType === "Symbol"
  const caseSensitive = labelType === "Case Sensitive Text"
  const textLabel = get(props, (useSymbol ? "entry.Symbol" : caseSensitive ? "entry.ShiftDownLabel" : "entry.Label"), get(props, "entry.Action"))
  const useSmall = textLabel == null ? false : textLabel.length > 4
  return (
    <div
      className={`key center ${selected ? "isSelected" : ""} ${isOver ? "isHovered" : ""} ${isDragged ? "isDragged" : ""} ${useSmall ? "smallerFont" : ""}`}
      draggable
      onClick={clickHandler(props.index, props.row, props.col)}
      onDragStart={dragStartHandler(props.index, props.row, props.col)}
      onDragEnd={dragEndHandler(props.index, props.row, props.col)}
      onDrop={dropHandler(props.index, props.row, props.col)}
      onDragOver={dragOverHandler(props.index, props.row, props.col)}
      onDragLeave={dragLeaveHandler(props.index, props.row, props.col)}
      style={{maxWidth: props.width, maxHeight: props.height, width: props.width, height: props.height}}
    >
      {textLabel}
    </div>
  )
})

export default KeyDisplay
export {
  clickHandler, dragStartHandler, dragEndHandler, dropHandler, dragOverHandler, dragLeaveHandler, switchKeys
}
