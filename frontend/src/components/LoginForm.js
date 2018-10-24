import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import { withApollo } from 'react-apollo';
import { checkUserQuery } from '../queries/queries';
import { Card, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      error: '',
    };
  }

  static navigationOptions = {
    title: 'Login',
  };

  /*perform login*/
  checkUser() {
    this.setState({ loading: true, error: '' });
    this.props.client.query({
      query: checkUserQuery,
      variables: {
        email: this.state.email,
        password: this.state.password
      },
    }).then(result => {     
        if (result.data.checkUser) {
          this.props.navigation.navigate('BookStore');
        } else {
          this.setState({
            email: '',
            password: '',
            loading: false,
            error: 'Login failed.',
          });
        }
      }
    );   
  };

  handleLoginFeedback() {
    if (this.state.loading) {
      return <Spinner />;
    }
    return (
      <Button
        title="Login"
        onPress={ this.checkUser.bind(this) }
      />
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text style={styles.textStyle}>
            Welcome to the Foton Challenge! Please inform your email and password to login, or create a new account.
          </Text>
        </CardSection>

        <CardSection>
          <Input
            label="Email"
            placeholder="test@test.com"
            onChangeText={ email => this.setState({ email }) }
            value={ this.state.email }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            secureTextEntry
            onChangeText={ password => this.setState({ password }) }
            value={ this.state.password }
          />
        </CardSection>

        <CardSection>
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>
          {this.handleLoginFeedback()}
        </CardSection>

        <CardSection>
          <Button
            title="New account"
            onPress={() => this.props.navigation.navigate('NewAccountForm')}
          />
        </CardSection>

      </Card>
    )
  }
}

const styles = {
  textStyle: {
    margin: 20,
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    marginBottom: 10,
  }
}

export default withApollo(LoginForm);



