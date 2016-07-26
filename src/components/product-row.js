import React, { Component } from 'react';
import ProductCommentsButton from './product-comments-button.js'
import ProductComments from './product-comments.js'
import ProductCommentForm from './product-comment-form.js'

export default class ProductRow extends Component {
  constructor(){
    super()
    this.state= {
      showComment: false
    }
  }
  getComments(){
    var commentArray = []
    if(!this.state.showComment){ return ''}
    this.props.comments.map(comment => {
      commentArray.push(<ProductComments name={comment.name} text={comment.text} />)
     })
     commentArray.push(<ProductCommentForm
                        addComment={this.props.addComment.bind(this)}
                        index={this.props.index}
                        productName={this.props.name} />)
     return commentArray
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
        {this.getComments()}
      </tr>
      </div>
    )
  }
}
