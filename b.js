// @flow
import React, {Component} from 'react'

export default class B extends Component<any> {
  props: any

  test = () => {
    return this.props
  }

  constructor(props: any) {
    super(props)
    this.props = props
  }

  render() {
    const props = this.test()
    return null
  }
}