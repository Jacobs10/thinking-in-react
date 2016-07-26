import React, { Component } from 'react';
import ProductCommentsButton from './product-comments-button.js'

export default class ProductRow extends Component {
  constructor(){
    super()
    this.state= {
      showComment: false
    }
  }
  getComments(){
    if(!this.state.showComment){ return ''}
    return this.props.comments.map(comment => {return (
      comment.text + '|' + comment.name
    ) })
  }
  handleButtonClick(){
    this.setState({
        showComment: !this.state.showComment
    })
  }

  render(){
    var comments = this.getComments()
    return (
      <div>
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.company}</td>
        <ProductCommentsButton
          onButtonChange={this.handleButtonClick.bind(this)}
          />
      </tr>
      <tr>
        {comments}
      </tr>
      </div>
    )
  }
}
