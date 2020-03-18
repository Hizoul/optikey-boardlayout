import example, { exampleKeyGroupOverrideXml } from "../src/xml/example"
import xmlParser, { toXml } from "../src/xml/parse"

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
  const keyboard2 = xmlParser(exampleKeyGroupOverrideXml)
  expect(keyboard2).toMatchSnapshot("advanced xml to js")
  expect(toXml(keyboard2)).toMatchSnapshot("advanced js to xml")
})
