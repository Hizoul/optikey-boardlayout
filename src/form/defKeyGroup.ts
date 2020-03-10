import { ExtendedJSONSchema } from "@xpfw/form"
import { backgroundColorSchema } from "./def"

const keyDisabledBackgroundSchema: ExtendedJSONSchema = {
  title: "KeyDisabledBackground", type: "string", theme: "color",
  description: "for valid colors refer to https://docs.microsoft.com/en-us/dotnet/api/system.drawing.color"
}

const keyDisabledForegroundSchema: ExtendedJSONSchema = {
  title: "KeyDisabledForeground", type: "string", theme: "color",
  description: "for valid colors refer to https://docs.microsoft.com/en-us/dotnet/api/system.drawing.color"
}

const keyDisabledOpacitySchema: ExtendedJSONSchema = {
  title: "KeyDisabledOpacity", type: "number"
}

const keyDownBackgroundSchema: ExtendedJSONSchema = {
  title: "KeyDownBackground", type: "string", theme: "color",
  description: "for valid colors refer to https://docs.microsoft.com/en-us/dotnet/api/system.drawing.color"
}

const keyDownForegroundSchema: ExtendedJSONSchema = {
  title: "KeyDownForeground", type: "string", theme: "color",
  description: "for valid colors refer to https://docs.microsoft.com/en-us/dotnet/api/system.drawing.color"
}

const keyDownOpacitySchema: ExtendedJSONSchema = {
  title: "KeyDownOpacity", type: "number"
}

const foregroundColorSchema: ExtendedJSONSchema = {
  title: "ForegroundColor", type: "string", theme: "color",
  description: "for valid colors refer to https://docs.microsoft.com/en-us/dotnet/api/system.drawing.color"
}

const opacitySchema: ExtendedJSONSchema = {
  title: "Opacity", type: "number"
}

const autoScaleWidthSchema: ExtendedJSONSchema = {
  title: "AutoScaleToOneKeyWidth", type: "boolean",
  description: "only required to modify scaling behavior when key width is greater than 1. if not declared it will default to true"
}

const autoScaleHeightSchema: ExtendedJSONSchema = {
  title: "AutoScaleToOneKeyHeight", type: "boolean",
  description: "only required to modify scaling behavior when key width is greater than 1. if not declared it will default to true"
}
const sharedSizeSchema: ExtendedJSONSchema = {
  title: "SharedSizeGroup", type: "boolean",
  description: "only required to break out a key, or set of keys, to size separately, otherwise size grouping is determined automatically"
}

const usePersianSchema: ExtendedJSONSchema = {
  title: "UsePersianCompatibilityFont", type: "boolean"
}

const useUnicodeSchema: ExtendedJSONSchema = {
  title: "UseUnicodeCompatibilityFont", type: "boolean"
}

const useUrduSchema: ExtendedJSONSchema = {
  title: "UseUrduCompatibilityFont", type: "boolean"
}

const lockOnSchema: ExtendedJSONSchema = {
  title: "LockOnTime", type: "number",
  description: "milliseconds from when gaze is detected on key to the start of the progress animation"
}

const completionTimeSchema: ExtendedJSONSchema = {
  title: "CompletionTime", type: "number",
  description: "milliseconds from the start of the progress animation to the key being triggered"
}
const repeatDelaySchema: ExtendedJSONSchema = {
  title: "RepeatDelay", type: "number",
  description: "milleseconds between the initial keystroke and a second consecutive keystroke of the same key"
}
const repeatRateSchema: ExtendedJSONSchema = {
  title: "RepeatRate", type: "number",
  description: "milliseconds between additional consecutive keystrokes of the same keymilliseconds from when gaze is detected on key to the start of the progress animation"
}


const keyGroupSchema: ExtendedJSONSchema = {
  type: "object",
  title: "KeyGroup",
  properties: {
    [String(backgroundColorSchema.title)]: backgroundColorSchema,
    [String(foregroundColorSchema.title)]: foregroundColorSchema,
    [String(keyDisabledBackgroundSchema.title)]: keyDisabledBackgroundSchema,
    [String(keyDisabledForegroundSchema.title)]: keyDisabledForegroundSchema,
    [String(keyDisabledOpacitySchema.title)]: keyDisabledOpacitySchema,
    [String(keyDownBackgroundSchema.title)]: keyDownBackgroundSchema,
    [String(keyDownForegroundSchema.title)]: keyDownForegroundSchema,
    [String(keyDownOpacitySchema.title)]: keyDownOpacitySchema,
    [String(opacitySchema.title)]: opacitySchema,
    [String(autoScaleWidthSchema.title)]: autoScaleWidthSchema,
    [String(autoScaleHeightSchema.title)]: autoScaleHeightSchema,
    [String(sharedSizeSchema.title)]: sharedSizeSchema,
    [String(usePersianSchema.title)]: usePersianSchema,
    [String(useUnicodeSchema.title)]: useUnicodeSchema,
    [String(useUrduSchema.title)]: useUrduSchema,
    [String(lockOnSchema.title)]: lockOnSchema,
    [String(completionTimeSchema.title)]: completionTimeSchema,
    [String(repeatDelaySchema.title)]: repeatDelaySchema,
    [String(repeatRateSchema.title)]: repeatRateSchema
  }
}

export {
  keyGroupSchema
}