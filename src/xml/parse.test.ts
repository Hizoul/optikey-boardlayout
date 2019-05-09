import example from "./example"
import xmlParser, { toXml } from "./parse"

test("parser", () => {
  expect(xmlParser(example)).toMatchSnapshot("xml to js")
  expect(toXml(xmlParser(example))).toMatchSnapshot("js to xml")
})
