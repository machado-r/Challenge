import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import { withApollo } from 'react-apollo';
import { addUserMutation } from '../queries/queries';
import { Card, CardSection, Input, Spinner } from './common';

/*creates a new acconout*/
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      error: '',
      success: ''
    };
  }

  static navigationOptions = {
    title: 'Create new account',
  };

  addUser() {    
    this.setState({ loading: true, error: '' })

    this.props.client.mutate({
      mutation: addUserMutation,
      variables: {
        email: this.state.email,
        password: this.state.password,
      }
    }).then(result => {
      if (result.data.addUser.email === this.state.email) {
        this.setState({
          success: 'New account created!',
          error: '',
          loading: false
        });
      } else {
        this.setState({
          success: '',
          error: 'New account fail.',
          loading: false
        });
      }
    });
  }

  handleFeedback() {
    if (this.state.loading) {
      return <Spinner />
    } else {
      return (
        <Button
          title="Create new account"
          onPress={ this.addUser.bind(this) }
        />
      )
    }
  }

  render() {
    return (
      <Card>
        
        <CardSection>
          <Text style={styles.textStyle}>
            Please inform your email and a password to create a new account.
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
            { this.state.error }
          </Text>
          <Text style={styles.successTextStyle}>
            { this.state.success }
          </Text>
          { this.handleFeedback() }
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
  },
  successTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'green',
    marginBottom: 10,
  }
};

export default withApollo(LoginForm);
