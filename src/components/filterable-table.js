import React, { Component } from 'react';
import SearchBar from './search-bar.js'
import ProductTable from './product-table.js'
import PRODUCTS from '../products.js'


export default class FilterableTable extends Component {
  constructor(props){
    super(props)

    this.state = {
      searchTerm: '',
      jsOnly: false,
      products: PRODUCTS
    }
    this.handleInputChange= this.handleInputChange.bind(this)
    this.addProductComment= this.addProductComment.bind(this)
  }

  handleInputChange(searchTerm, jsOnly){
    this.setState({
      searchTerm: searchTerm,
      jsOnly: jsOnly
    })
  }
  addProductComment(index, author, text){
    this.setState({
      products: this.state.products[index].comments.push({ name: author, text:text })
    })
  }

  render(){

    return (
      <div>
        <SearchBar
          searchTerm={this.state.searchTerm}
          jsOnly={this.state.jsOnly}
          onInputChange={this.handleInputChange} />
          {this.state.searchTerm}
        <ProductTable
          products={this.state.products}
          searchTerm={this.state.searchTerm}
          jsOnly={this.state.jsOnly}
          onAddComment={this.addProductComment.bind(this)}
           />
      </div>
    )
  }
}
