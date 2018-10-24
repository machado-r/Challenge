import React, { Component } from 'react';
import { ScrollView, Text, View, Button, TouchableOpacity } from "react-native";
import { graphql } from 'react-apollo';
import { booksQuery } from '../queries/queries';
import { Card, CardSection } from './common';
import BookListInfo from './BookListInfo';
import Search from './Search';
import SearchResult from './SearchResult';

/*handles the list of all books on record*/
class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
      error: false,
      searchTerm: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.renderBooks = this.renderBooks.bind(this);
  }

  static navigationOptions = {
    title: 'Books List',
  };

  /*force graphql to update the books list in props*/ 
  componentDidMount() {
    this.props.booksQuery.refetch();
  }

  /*defines wheter a list, an error or a search result should be shwon*/
  renderBooks() {
    if (this.state.error) {
      /*handles search not found*/
      return (
        <CardSection>
          <Text style={{fontWeight: 'bold', alignSelf: 'center'}}>
            Nothing found for {this.state.searchTerm}
          </Text>
          <Text style={{marginBottom: 60}}>
            Try the full book's name. The search is case insensitive.
          </Text>
          <Button
            title="See full list"
            onPress={() =>this.setState({error: false, book: null})}
          />
        </CardSection>
      )
    }
    if (this.state.book) {
      /*if search is good, show result*/
      var book = this.state.book;
      return (
        <SearchResult book={ book } searchTerm={ this.state.searchTerm } />
      )
    } else {
      /*show the full list of books*/
      var data = this.props.booksQuery;
      if (data.loading) {
        return (<Text>Loading list...</Text>);
      } else {
        return data.books.map(book => {          
          return (
            <TouchableOpacity
              key={ book._id }
              onPress={ () => this.props.navigation.navigate('BookDetail', { book }) }>
              <BookListInfo
                book={ book }
              />
            </TouchableOpacity>
          )
        });
      }
    }
  }

  handleSearch(book, searchTerm) {
    if (book) {
      this.setState({ book, error: false, searchTerm });    
    } else {
      this.setState({ book: null, error: true, searchTerm });
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Search
          books={ this.props.booksQuery.books }
          handleSearch = { this.handleSearch }
        />
        <ScrollView >
          { this.renderBooks() }
        </ScrollView>
      </View>
    );
  }
}

export default graphql(booksQuery, {name:"booksQuery"})(BookList);
