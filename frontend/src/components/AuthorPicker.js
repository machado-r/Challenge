import React, { Component } from 'react';
import { Picker } from 'react-native';
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery } from '../queries/queries';

/*handles the author picker when adding a new book*/
class AuthorPicker extends Component {
  constructor(props) {
    super(props);
  }

  /*shows the authors list*/
  displayAuthors() {
    var data = this.props.getAuthorsQuery;
    if (data.loading) {
      return (<Picker.Item label="Loading authors..." />)
    } else {
      return data.authors.map(author => {
        return (
          (<Picker.Item label={ author.name } value={ author._id } key={ author._id }/>)
        )
      })
    }
  }

  render() {
    return (
      <Picker
        selectedValue={this.props.authorID}
        onValueChange={ (itemValue, itemIndex) => this.props.handleAuthorID(itemValue) }>
        <Picker.Item label='Select author' value={0} />
        { this.displayAuthors() }
      </Picker>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, {name:"getAuthorsQuery"}),
)(AuthorPicker);