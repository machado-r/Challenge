import React, { Component } from 'react';
import { View, Text, Button } from "react-native";
import { Card, CardSection } from './common';

/*show more details of a selected book on the books list*/
class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: props.navigation.state.params.book
    }    
  }

  static navigationOptions = {
    title: 'Book Details'
  };

  
  render() {
    const { title, price, author } = this.state.book;
    return (
      <Card style={{flex: 1}}>
       
        <CardSection style={{padding: 10}}>
          <Text style={ styles.titleStyle }>
            { title }
          </Text>
        </CardSection>

        <CardSection>
          <View>
            <Text style={styles.authorDetailsStyle}>
              Written by { author.name }, { author.age }
            </Text>
              
          </View>
        </CardSection>
        
         <CardSection>
          <Text style={ styles.priceStyle }>
            ${ price }
          </Text>
        </CardSection>

        <CardSection>
          <Button
            title="ORDER NOW"
            onPress={() => alert('Thank you for your order!')}
          />
        </CardSection>

      </Card>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'black',
  },
  priceStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'forestgreen',
    marginTop: 30,
    marginBottom: 30,
  },
  authorDetailsStyle: {
    fontStyle: 'italic',
    alignSelf: 'flex-end'
  }
}

export default BookDetail;
