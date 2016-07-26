import React, { Component } from 'react';

export default class ProductCommentsButton extends Component {
  render(){
    return (
      <form>
      <input type='button' onClick={() => this.props.onButtonChange()} value="Comments" />
      </form>
    )
  }
}
