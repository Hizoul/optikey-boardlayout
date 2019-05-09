import example from "../src/xml/example"
import xmlParser, { toXml } from "../src/xml/parse"

test("parser", () => {
  expect(xmlParser(example)).toMatchSnapshot("xml to js")
  expect(toXml(xmlParser(example))).toMatchSnapshot("js to xml")
})
