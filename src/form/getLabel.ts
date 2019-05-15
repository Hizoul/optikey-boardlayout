const getLabel = (label: string) => {
  const i = label.indexOf("]")
  return i === -1 ? label : label.substring(i + 2)
}

export default getLabel
