import React, { Component } from 'react';
import { View, TouchableOpacity, Button, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Card, CardSection } from './common';
import BookListInfo from './BookListInfo';

class SearchResult extends Component {
  render() {
    const book = this.props.book;
    return (
      <View>
        <CardSection>
          <Text style={{fontWeight: 'bold', alignSelf: 'center'}}>
            Results for {this.props.searchTerm}
          </Text>
        </CardSection>
        <TouchableOpacity
          key={ book.title }
          onPress={ () => this.props.navigation.navigate('BookDetail', { book }) }
        >
          <BookListInfo book={ book } />
        </TouchableOpacity>
        <Card>
          <CardSection>
            <Button
              title="Return to list"
              onPress={ () => this.props.navigation.navigate('BookList') }
            />
          </CardSection>
        </Card>
      </View>
    )
  }
}

export default withNavigation(SearchResult);
