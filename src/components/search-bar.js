import React, { Component } from 'react';

export default class SearchBar extends Component {
  handleChange(){
    this.props.onInputChange(this.refs.searchTermInput.value,
                                this.refs.jsOnlyInput.checked)
  }

  render(){
    return (
      <form>
      <input
        ref='searchTermInput'
        type='text'
        value={this.props.searchTerm}
        onChange={this.handleChange.bind(this)} />
      <input
        ref='jsOnlyInput'
        type='checkbox'
        checked={this.props.jsOnly}
        onChange={this.handleChange.bind(this)} />
      </form>
    )
  }
}
