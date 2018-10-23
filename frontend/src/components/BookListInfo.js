import React from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from './common';

/*shows a summary of each book*/
const BookListInfo = ({ book }) => {
  const { title, author, price } = book;

  return (
    <Card style={{flexDirection: 'row'}}>
      <CardSection style={{flex: 4}}>
        <Text style={styles.titleStyle}>
          { title }
        </Text>
        <Text>
          by { author.name }
        </Text>
      </CardSection>

      <CardSection style={{flex: 1}}>
        <Text style={styles.priceStyle}>
          ${ price }
        </Text>
      </CardSection>

    </Card>
  )
}

const styles = {
  titleStyle: {
    fontWeight: 'bold'
  },
  priceStyle: {
    fontSize: 20,
    color: 'forestgreen',
  }
}
export default BookListInfo;
