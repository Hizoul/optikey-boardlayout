import { FormStore } from "@xpfw/form"
import { findIndex, get, find } from "lodash"
import { observer } from "mobx-react-lite"
import * as React from "react"
import { activeKey, colsSchema, keyboardPrefix, rowsSchema } from "../form/def"
import KeyDisplay from "./key"
import "./keyboardStyle.css"
import { observable } from "mobx"

const resizeEventListener = () => {
  const prev = FormStore.getValue(activeKey)
  const temp = Math.max(0, prev-1)
  FormStore.setValue(activeKey, temp)
  FormStore.setValue(activeKey, prev)
}

window.addEventListener("resize", resizeEventListener)

const keyboardContainerReference: any = observable.box(null)
const registeredListener = observable.box(false)
const setRegisteredToTrue = () => registeredListener.set(true)
const KeyboardDisplay = observer(() => {
  const gridLength = FormStore.getValue(rowsSchema.title, keyboardPrefix, 1)
  const gridHeight = FormStore.getValue(colsSchema.title, keyboardPrefix, 1)
  const keys = FormStore.getValue("Content", keyboardPrefix, [])
  FormStore.getValue(activeKey)
  const toRender = []
  let width = 30
  let height = 20
  if (keyboardContainerReference.get() != null) {
    const ele: any = keyboardContainerReference.get()
    if (registeredListener.get() === false) {
      ele.addEventListener("resize", resizeEventListener)
      setTimeout(setRegisteredToTrue, 1)
    }
    width = Math.floor((ele.clientWidth - 26)  / (gridHeight))
    height = Math.floor((Math.min(ele.clientHeight, window.innerHeight) - 10) / (gridLength))
  }
  for (let row = 0; row < gridLength; row++) {
    for (let col = 0; col < gridHeight; col++) {
      const keyboardIndex: any = findIndex(keys,  {Row: row, Col: col})
      // const keyboardEntry: any = find(keys,  {Row: row, Col: col})
      let widthToUse = width// * get(keyboardEntry, "Width", 1)
      let heightToUse = height// * get(keyboardEntry, "Height", 1)
      toRender.push(
        <KeyDisplay
          key={`${row}.${col}`}
          row={row}
          col={col}
          index={keyboardIndex}
          entry={keys[keyboardIndex]}
          height={heightToUse}
          width={widthToUse}
        />
      )
    }
    // toRender.push(<div key={`break${row}`} className="breakPoint" />)
  }
  return (
    <div ref={(ref: any) => {
      if (keyboardContainerReference.get() == null) {
        keyboardContainerReference.set(ref)
      }
    }} className="keyboard">
      {toRender}
    </div>
  )
})

export default KeyboardDisplay
export {
  resizeEventListener, keyboardContainerReference,
  registeredListener, setRegisteredToTrue
}