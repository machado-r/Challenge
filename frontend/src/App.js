import React, { Component } from 'react';
import {StatusBar} from 'react-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Navigator from './Navigator';
import SplashScreen from 'react-native-splash-screen';

/*you must change the URI to your local graphql server*/
const client = new ApolloClient({
  uri: 'http://192.168.0.11:4000/graphql',
})

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render () {
    return (
      <ApolloProvider client={ client }>
        <StatusBar
          backgroundColor="#942193"
          barStyle="light-content"
        />
        <Navigator />
      </ApolloProvider>
    );
  }
}


export default App;
