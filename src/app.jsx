
'use strict'

import React, { Component } from 'react';

import connectScaleProvider from './connectScaleProvider.jsx'
import connectScrollProvider from './connectScrollProvider.jsx'

class App extends Component {

  constructor() {
    super()

    this.state = {
      layout: 0
    }
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      layout: this.props.scale + this.props.scroll
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      layout: nextProps.scale + nextProps.scroll
    })
  }

  render() {
    return (
      <div>
        <p>Hello react</p>
        <p>Layout: {this.state.layout}</p>
        <p>Scale: {this.props.scale}</p>
        <button onClick={this.props.onClickScale}>
          increment scale
        </button>
        <p>Scroll: {this.props.scroll}</p>
        <div onScroll={this.props.onScroll}
          style={{
            overflow: 'auto',
            width: 200,
            height: 100
          }}
        >
          <p>Lorem ipsum dolor sit amet, pellentesque sed, sed suspendisse purus mauris sed et risus, dolorem nulla, eu quis pulvinar mattis. Sit litora nostra id, hendrerit in, vivamus nulla ut inceptos donec, quisque vestibulum habitant scelerisque. Tortor fringilla nam sed sodales nec, lobortis nulla porttitor. Nibh maecenas sapien odio velit, mauris luctus vivamus. Velit quisque mauris vestibulum nibh odio, gravida tortor, aliquip tristique, in odio eget vestibulum molestie, ipsum vivamus. Libero potenti vel sed, sem mi duis ut velit id, natoque quia quam felis rhoncus massa nec, eros rutrum magna purus, vivamus erat id. Eros pellentesque platea penatibus sociis pharetra. Eros veritatis ac, aenean suscipit mi dui, mi occaecat ante ac wisi mauris ut, id vestibulum augue sed. Sed risus, tortor non, et ante omnis egestas tellus aliquet, qui rutrum molestie hymenaeos quam.</p>
        </div>
      </div>
    );
  }
}

export default connectScrollProvider(connectScaleProvider(App))
