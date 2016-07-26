import React, { Component } from 'react';

export default class ProductCommentForm extends Component {

  handleSubmit(e){
    e.preventDefault()
    this.props.addComment(this.props.index, this.refs.author.value, this.refs.body.value)
    this.refs.author.value = '';
    this.refs.body.value = '';
  }
  render(){
    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input ref='author' type='text' />
          <input ref='body' type='text' />
          <button type='submit'>Submit</button>
        </form>
    )
  }
}
