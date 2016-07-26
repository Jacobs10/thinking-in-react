import React, { Component } from 'react';
import './App.css';
import FilterableTable from './components/filterable-table.js'
import PRODUCTS from './products.js'

class App extends Component {
  render() {
    return (
        <FilterableTable products={PRODUCTS} />
    );
  }
}

export default App;
