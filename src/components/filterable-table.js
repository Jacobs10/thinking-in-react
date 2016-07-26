import React, { Component } from 'react';
import SearchBar from './search-bar.js'
import ProductTable from './product-table.js'


export default class FilterableTable extends Component {
  constructor(props){
    super(props)

    this.state = {
      searchTerm: '',
      jsOnly: false
    }
    this.handleInputChange= this.handleInputChange.bind(this)
  }

  handleInputChange(searchTerm, jsOnly){
    this.setState({
      searchTerm: searchTerm,
      jsOnly: jsOnly
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
          products={this.props.products}
          searchTerm={this.state.searchTerm}
          jsOnly={this.state.jsOnly}
           />
      </div>
    )
  }
}
