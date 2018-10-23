import React, { Component } from 'react';
import { Button } from 'react-native';
import { Card, CardSection, Input, Spinner } from './common';

/*the main component when user is logged in*/
class Main extends Component {
  static navigationOptions = {
    title: 'Book Store',
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Button
            title="Create Book"
            onPress={() => this.props.navigation.navigate('CreateBook')}
          />
        </CardSection>

        <CardSection>
          <Button
            title="Books List"
            onPress={() => this.props.navigation.navigate('BookList')}
          />
        </CardSection>

      </Card>
    )
  }
}


export default Main;
