import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Navigator from './Navigator';

/*you must change the URI to your local graphql server*/
const client = new ApolloClient({
  uri: 'http://192.168.0.11:4000/graphql',
})

class App extends Component {
  render () {
    return (
      <ApolloProvider client={ client }>
        <Navigator />
      </ApolloProvider>
    );
  }
}

export default App;
