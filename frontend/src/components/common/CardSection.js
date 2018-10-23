import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    flexWrap: 'wrap',
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'column',
    position: 'relative',
  }
};

export {CardSection};
