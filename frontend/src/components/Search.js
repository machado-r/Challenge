import React, { Component } from 'react';
import { Button, Keyboard } from "react-native";
import { CardSection, Input } from './common';

/*handles the search on BookList*/
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  /*since we load all books and graphql makes it available via parent's props, 
    the search will be performed in props*/
  renderSearch() {
    books = this.props.books;
    book = books.find(book => book.title.toLowerCase() === this.state.searchTerm.toLowerCase());
    this.props.handleSearch(book, this.state.searchTerm);
    this.setState({ searchTerm: '' });
    Keyboard.dismiss();
  }

  render() {
    return (
      <CardSection>
        <Input
          placeholder="What are you looking for?"
          value={ this.state.searchTerm }
          onChangeText={ searchTerm => this.setState({ searchTerm }) }
        />
        <Button
          title="Search"
          onPress={ this.renderSearch.bind(this) }
        />
      </CardSection>
    )
  }
};

export default Search;
