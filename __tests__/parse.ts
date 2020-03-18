import example from "../src/xml/example"
import xmlParser, { toXml } from "../src/xml/parse"
import { js2xml, xml2js } from "xml-js"

test("parser", () => {
  const keyboard = xmlParser(example)
  expect(keyboard).toMatchSnapshot("xml to js")
  const withEverything = toXml(keyboard)
  expect(withEverything).toMatchSnapshot("js to xml")
  keyboard.Keyboard.Grid.Rows = 5
  keyboard.Keyboard.Grid.Cols = 7
  const withLess = toXml(keyboard)
  expect(withLess !== withEverything).toBeTruthy()
  expect(withLess).toMatchSnapshot("reduced cols")
})
