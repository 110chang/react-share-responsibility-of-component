
'use strict'

import React, { Component } from 'react';

export default function connectScrollProvider(Decorated) {
  class ScrollProvider extends Component {
    constructor() {
      super()

      this.state = {
        scroll: 0
      }
    }
    handleScroll(e) {
      console.log('scroll')
      this.setState({
        ...this.state,
        scroll: e.target.scrollTop
      })
    }
    render() {
      return (
        <Decorated {...this.state}
          onScroll={this.handleScroll.bind(this)}
        />
      )
    }
  }
  return ScrollProvider
}
