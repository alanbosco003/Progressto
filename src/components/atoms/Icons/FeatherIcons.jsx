import React from 'react';
import IconFeather from 'react-native-vector-icons/Feather';

const FeatherIcons = ({ name, size = 24, color = '#000000' }) => {
  return <IconFeather name={name} size={size} color={color} />;
};

export default FeatherIcons;