import React from 'react';
import { TextInput, View, Text, Platform } from 'react-native';


const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, keyboardType, maxLength }) => {
  const style = {inputStyle, labelStyle, containerStyle} = styles;
  return (
    <View style={ containerStyle }>
      <Text style={ labelStyle }>{ label }</Text>
      <TextInput
        style={ inputStyle }
        secureTextEntry={ secureTextEntry }
        placeholder={ placeholder }
        autoCorrect={ false }
        value={ value }
        onChangeText={ onChangeText }
        keyboardType={ keyboardType }
        maxLength={ maxLength }        
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    paddingLeft: 20,
    fontSize: 20,
  },
  labelStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: Platform.OS === 'ios' ? 0 : -10,
    paddingLeft: 20,
  },
  containerStyle: {
    flexWrap: 'wrap',
  }
};

export {Input};
