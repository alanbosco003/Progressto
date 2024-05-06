import React, { useState } from 'react';
import { View, TextInput, Button, Modal, Dimensions } from 'react-native';

const AddToDo = ({ isVisible, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const windowHeight = Dimensions.get('window').height;

  const handleSubmit = () => {
    onSubmit({ name, password });
    setName('');
    setPassword('');
    onClose();
  };

  return (
    <Modal visible={isVisible} transparent={true} onRequestClose={onClose} animationType="slide">
      <View style={{ backgroundColor: "pink", height: windowHeight * 0.4, justifyContent: 'center', alignItems: 'center', marginTop: windowHeight * 0.6 }}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </Modal>
  );
};

export default AddToDo;
