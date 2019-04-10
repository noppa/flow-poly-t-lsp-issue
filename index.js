// @flow
import React, {Component} from 'react'

type Props = {|
  a: number,
|}

class Foo extends Component<Props> {
  test() {
    return 3
  }

  render() {
    const props = this.test()
    return null
  }
}