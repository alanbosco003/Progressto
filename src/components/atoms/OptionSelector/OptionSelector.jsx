import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

const OptionSelector = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleOptionSelect(option)}
          style={[
            styles.option,
            { backgroundColor: option === selectedOption ? 'lightblue' : 'white' },
            index === options.length - 1 ? { marginRight: 0 } : null,
          ]}
        >
          <Text style={{ color: option === selectedOption ? 'white' : 'black' }}>{option}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  option: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
});

export default OptionSelector;
