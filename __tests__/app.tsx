import * as React from "react"
import App from "../src/app"
import renderSnapshot from "../src/testUtil/renderSnapshot"
test("app", () => {
  renderSnapshot(<App />, "inital app render")
})
