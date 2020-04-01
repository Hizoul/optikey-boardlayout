import { ComponentRegistry, ExtendedJSONSchema } from "@xpfw/form"
import { registerComponents } from "@xpfw/form-web"
import BooleanField from "./boolean"
import SelectField from "./select"
import TextField from "./text"
import ObjectField from "./object"
import ArrayField from "./array"

registerComponents()
ComponentRegistry.registerComponent("number", TextField)
ComponentRegistry.registerComponent("string", TextField)
ComponentRegistry.registerComponent("boolean", BooleanField)
ComponentRegistry.registerComponent("object", ObjectField)
ComponentRegistry.registerComponent("array", ArrayField)
ComponentRegistry.registerComponent("string", SelectField, "select")
const actionNames = ["Action", "ChangeKeyboard", "KeyDown", "KeyUp", "Loop", "Text", "Wait"]
const keyActionTypes: any[] = actionNames.map((v) =>{return {value: v, label: v}})
const keyActionObjectSchema = {
  type: "object",
  title: "keyActionObject",
  properties: {
    actionType: {
      type: "string", theme: "select", selectOptions: keyActionTypes,
      description: "The action type determines what kind of input is sent to the OS on key press."}
  }
}

const nameSchema: ExtendedJSONSchema = {
  title: "Name", type: "string",
  description: "The name that will be shown in OptiKey"
}

const widthSchema: ExtendedJSONSchema = {
  title: "Width", type: "string",
  description: "Percent of screen. if negative then use the sum of the value and the screen's dimension"
}

const heightSchema: ExtendedJSONSchema = {
  title: "Height", type: "string",
  description: "Percent of screen. if negative then use the sum of the value and the screen's dimension"
}
const horizontalSchema: ExtendedJSONSchema = {
  title: "HorizontalOffset", type: "string",
  description: "Percent of screen. if negative then use the sum of the value and the screen's dimension"
}

const verticalSchema: ExtendedJSONSchema = {
  title: "VerticalOffset", type: "string",
  description: "Percent of screen. if negative then use the sum of the value and the screen's dimension"
}

const symbolSchema: ExtendedJSONSchema = {
  title: "SymbolMargin", type: "number",
  description: "Amount of empty space left for symbols"
}

const borderSchema: ExtendedJSONSchema = {
  title: "BorderThickness", type: "string",
  description: "Controls how thick the lines between individual keys are"
}

const rowsSchema: ExtendedJSONSchema = {
  title: "Grid.Rows", type: "number",
  description: "Controls the amount of keyboard rows"
}

const colsSchema: ExtendedJSONSchema = {
  title: "Grid.Cols", type: "number",
  description: "Controls the amount of keyboard columns"
}

const persistNewStateSchema: ExtendedJSONSchema = {
  title: "PersistNewState", type: "boolean",
  description: "Indiates whether the size and position of this keyboard will be saved"
}

const windowStateSchema: ExtendedJSONSchema = {
  title: "WindowState", type: "string", theme: "select",
  selectOptions: [
    {label: "Floating", value: "Floating"},
    {label: "Docked", value: "Docked"},
    {label: "Maximised", value: "Maximised"}],
  description: "Controls how the OptiKey window should behave"
}
const hideFromListSchema: ExtendedJSONSchema = {
  title: "HideFromKeyboardMenu", type: "boolean",
  description: "controls whether or not this keyboard will be listed in the dynamic keyboard selection menu. You may wish to set this equal to False for smaller utility-type keyboards."
}

const dockSizeSchema: ExtendedJSONSchema = {
  title: "DockSize", type: "string", theme: "select",
  selectOptions: [
    {label: "Full", value: "Full"},
    {label: "Collapsed", value: "Collapsed"}
  ],
  description: "Controls the size of the dock"
}

const positionSchema: ExtendedJSONSchema = {
  title: "Position", type: "string", theme: "select",
  description: "Controls where the Keyboard will be shown",
  selectOptions: [
    {label: "TopLeft", value: "TopLeft"},
    {label: "Top", value: "Top"},
    {label: "TopRight", value: "TopRight"},
    {label: "Left", value: "Left"},
    {label: "Right", value: "Right"},
    {label: "BottomLeft", value: "BottomLeft"},
    {label: "Bottom", value: "Bottom"},
    {label: "BottomRight", value: "BottomRight"}
  ],
}

const backgroundColorSchema: ExtendedJSONSchema = {
  title: "BackgroundColor", type: "string", theme: "color",
  description: "for valid colors refer to https://docs.microsoft.com/en-us/dotnet/api/system.drawing.color"
}

const borderColorSchema: ExtendedJSONSchema = {
  title: "BorderColor", type: "string", theme: "color",
  description: "for valid colors refer to https://docs.microsoft.com/en-us/dotnet/api/system.drawing.color"
}

const keyboardPrefix = "Keyboard"
const hoverKey = `hover`
const dragKey = `drag`
const activeKey = `active`

export {
  nameSchema, heightSchema, borderSchema, symbolSchema, rowsSchema, colsSchema, keyboardPrefix,
  activeKey, dragKey, hoverKey, persistNewStateSchema, windowStateSchema,
  dockSizeSchema, positionSchema, widthSchema, horizontalSchema, verticalSchema,
  backgroundColorSchema, borderColorSchema, hideFromListSchema, keyActionObjectSchema, actionNames
}
