
'use strict'

import React, { Component } from 'react';

class Buttons extends Component {

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }
  render() {
    return (
      <div>
        <p>Scale: {this.props.scale}</p>
        <button onClick={this.props.onClickScale}>
          increment scale
        </button>
      </div>
    );
  }
}

export default Buttons
