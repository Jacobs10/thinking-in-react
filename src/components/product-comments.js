import React, { Component } from 'react';

export default class ProductComments extends Component {
  render(){
    return (
      <tr>{this.props.name} {' |  '}{this.props.text}</tr>
    )
  }
}
