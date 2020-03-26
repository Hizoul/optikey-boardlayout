const getLabel = (label: string) => {
  let shortened = label
  const i = label.lastIndexOf("]")
  if (i !== -1) {
    shortened = shortened.substring(i + 2)
  }
  shortened = shortened.replace(/([A-Z])/g, ' $1')
  shortened = shortened.charAt(0).toUpperCase() + shortened.slice(1)
  return shortened
}

export default getLabel