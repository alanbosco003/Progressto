import OptionSelector from '@/components/atoms/OptionSelector/OptionSelector';
import React, { useState } from 'react';
import { View, TextInput, Button, Modal, Dimensions, TouchableOpacity, Text, Picker } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const windowHeight = Dimensions.get('window').height;

const AddToDo = ({ isVisible, onClose, onSubmit }) => {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isStartTimePickerVisible, setIsStartTimePickerVisible] = useState(false);
  const [isEndTimePickerVisible, setIsEndTimePickerVisible] = useState(false);
  const [frequency, setFrequency] = useState('daily');
  const handleSelect = (option) => {
    console.log('Selected option:', option);
  };

  const handleSubmit = () => {
    const todoItem = {
      title,
      description,
      color,
      startTime,
      endTime,
      frequency,
    };
    onSubmit(todoItem);
    // Reset states
    setTitle('');
    setDescription('');
    setColor('');
    setStartTime(null);
    setEndTime(null);
    setFrequency('daily');
    onClose();
  };

  const handleStartTimeConfirm = (date) => {
    setStartTime(date);
    setIsStartTimePickerVisible(false);
  };

  const handleEndTimeConfirm = (date) => {
    setEndTime(date);
    setIsEndTimePickerVisible(false);
  };

  return (
    <Modal visible={isVisible} transparent={true} onRequestClose={onClose} animationType="slide">
      <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20 }}>
          <TextInput
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
            style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
          />
          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
            style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
          />
          <TextInput
            placeholder="Color"
            value={color}
            onChangeText={setColor}
            style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
          />
          <TouchableOpacity onPress={() => setIsStartTimePickerVisible(true)} style={{ marginBottom: 10 }}>
            <Text>{startTime ? `Start Time: ${startTime.toLocaleString()}` : 'Select Start Time'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsEndTimePickerVisible(true)} style={{ marginBottom: 10 }}>
            <Text>{endTime ? `End Time: ${endTime.toLocaleString()}` : 'Select End Time'}</Text>
          </TouchableOpacity>
          <Button title="Select Start Time" onPress={() => setIsStartTimePickerVisible(true)} />
          <Button title="Select End Time" onPress={() => setIsEndTimePickerVisible(true)} />
          <View style={{ marginBottom: 10 }}>
            <Text>Frequency:</Text>
            <View>
      <OptionSelector options={options} onSelect={handleSelect} />
      </View>
          </View>
          <Button title="Submit" onPress={handleSubmit} />
          <DateTimePickerModal
            isVisible={isStartTimePickerVisible}
            mode="datetime"
            onConfirm={handleStartTimeConfirm}
            onCancel={() => setIsStartTimePickerVisible(false)}
          />
          <DateTimePickerModal
            isVisible={isEndTimePickerVisible}
            mode="datetime"
            onConfirm={handleEndTimeConfirm}
            onCancel={() => setIsEndTimePickerVisible(false)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AddToDo;
