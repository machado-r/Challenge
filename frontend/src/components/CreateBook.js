import React, { Component } from 'react';
import { Button, Text, View, Platform } from 'react-native';
import { withApollo } from 'react-apollo';
import { addBookMutation } from '../queries/queries';
import { Card, CardSection, Input, Spinner } from './common';
import AuthorPicker from './AuthorPicker';

/*handles the creation of new books*/
class CreateBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: '',
      authorID: 'Select an author',
      error: '',
      success: '',
      loading: false,
    }
  }

  static navigationOptions = {
    title: 'Add new book',
  };

  handleAuthorID = (authorID) => {
    this.setState({ authorID })
  }

  /*check if all necessary data is provided*/
  handleInfo() {
    if (this.state.title === '') {
      this.setState({ error: 'A title must be provided.', loading: false });
      return false;
    }
    if (this.state.price === '') {
      this.setState({ error: 'A price must be provided.', loading: false });
      return false;
    }
    if (this.state.authorID === 0) {
      this.setState({ error: 'Please select an author.', loading: false });
      return false;
    }
    return true;
  }

  saveBook() {
    this.setState({
      loading: true,
      error: ''
    });

    /*only proceed if all inputs are filled*/
    if (this.handleInfo()) {
      this.props.client.mutate({
        mutation: addBookMutation,
        variables: {
          title: this.state.title,
          price: this.state.price,
          author: this.state.authorID,
        },
      }).then(result => {
        if (result.data.addBook.title === this.state.title) {
          this.setState({
            title: '',
            price: '',
            authorID: 'Select an author',
            success: 'Book saved!',
            error: '',
            loading: false
          });
        } else {
          this.setState({
            success: '',
            error: 'Book could not be saved.',
            loading: false
          });
        }
      });
    }
  }

  handleFeedback() {
    if (this.state.loading) {
      return <Spinner/>
    } else {
      return (
        <View>
          <Button title="Save book" onPress={ this.saveBook.bind(this) } />
        </View>
      )
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Title"
            placeholder="Book title"
            value={ this.state.title }
            onChangeText={ title => this.setState({ title }) }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Price"
            placeholder="Book price"
            value={ this.state.price }
            onChangeText={ price => this.setState({ price }) }
            keyboardType="numeric"
            maxLength={6}
          />
        </CardSection>

        <CardSection >
          <Text style={styles.labelStyle}>
            Choose an author
          </Text>
          <AuthorPicker
            handleAuthorID={ this.handleAuthorID.bind(this) }
            authorID={ this.state.authorID }
          />
        </CardSection>

        <CardSection>
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>

          <Text style={styles.successTextStyle}>
            {this.state.success}
          </Text>

          {this.handleFeedback()}
        </CardSection>
      
      </Card>
    );
  }
}

const styles = {
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
  },
  labelStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: Platform.OS === 'ios' ? 0 : -10,
    paddingLeft: 20,
  },
}

export default withApollo(CreateBook);