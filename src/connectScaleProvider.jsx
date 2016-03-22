
'use strict'

import React, { Component } from 'react';

export default function connectScaleProvider(Decorated) {
  class ScaleProvider extends Component {
    constructor() {
      super()

      this.state = {
        scale: 1
      }
    }
    handleClickScale() {
      console.log('click scale')
      this.setState({
        ...this.state,
        scale: this.state.scale + 1
      })
    }
    render() {
      return (
        <Decorated {...this.props} {...this.state}
          onClickScale={this.handleClickScale.bind(this)}
        />
      )
    }
  }
  return ScaleProvider
}
