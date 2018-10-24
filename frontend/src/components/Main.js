import React, { Component } from 'react';
import { Button, Image } from 'react-native';
import { Card, CardSection } from './common';

/*the main component when user is logged in*/
class Main extends Component {
  static navigationOptions = {
    title: 'Foton Book Store',
  };

  render() {
    return (
      <Card>
        <CardSection style={{backgroundColor: '#942193', alignItems: 'center', flexDirection: 'row'}}>
          <Image
            style={ { flex: 1 } }
            resizeMode="contain"
            source={ require('../img/logo.png') }
          />
        </CardSection>
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
