import * as React from "react"
import * as render from "react-test-renderer"

const renderSnapshot = (component: any, msg: string) => {
  const tree = render.create(component)
  expect(tree.toJSON()).toMatchSnapshot(msg)
  tree.unmount()
}

export default renderSnapshot
