import React, { Component } from 'react';
import ProductRow from './product-row.js'
import ProductCategoryRow from './product-category-row.js'


export default class ProductTable extends Component {

  render(){
    var rows = []
    var lastCategory = null
    //var index = this.props.products.map(product => product.name).indexOf(this.props.name)
    this.props.products.forEach((product,i) => {
        if((product.name.indexOf(this.props.searchTerm) < 0)  ||
          (!product.js && this.props.jsOnly)
        ){ return }

        if(product.category !== lastCategory){
          rows.push(<ProductCategoryRow
                      key={product.category}
                      category={product.category} />)
        }
        rows.push(<ProductRow
                    addComment={this.props.onAddComment.bind(this)}
                    index={i}
                    comments={product.comments}
                    key={product.name}
                    name={product.name}
                    company={product.company} />)
        lastCategory = product.category
    })
    return (
      <table>
        <thead>Product List</thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}
