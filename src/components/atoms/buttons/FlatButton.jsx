import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ProFlatButton = ({
  text,
  onPress,
  isFullWidth = false,
  width,
  height = 25,
  color = '#007bff', // default color: blue
  textColour = 'white', // default text color: white
  borderRadius = 8, // default border radius: 8px
  unselected = false,
  borderColor,
}) => {
  const buttonStyle = {
    backgroundColor: unselected ? '#ccc' : color,
    width: isFullWidth ? '100%' : width,
    height: height,
    borderRadius: borderRadius,
    borderWidth: borderColor ? 1 : 0,
    borderColor: borderColor ? borderColor : color,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const textStyle = {
    color: unselected ? 'black' : textColour,
  };

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProFlatButton;
