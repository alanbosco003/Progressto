import React, { useState } from 'react';
import { View, TextInput, Button, Modal, Dimensions, TouchableOpacity, Text, ScrollView, Picker } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import OptionSelector from '@/components/atoms/OptionSelector/OptionSelector';
import ProFlatButton from '@/components/atoms/buttons/FlatButton';

const windowHeight = Dimensions.get('window').height;

const AddToDo = ({ isVisible, onClose, onSubmit }) => {
  const modalHeight = windowHeight * 0.4; // Adjust as needed
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  const [currentStep, setCurrentStep] = useState(1);
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

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    setCurrentStep(1);
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

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <View>
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
          </View>
        );
      case 2:
        return (
          <View>
            <TouchableOpacity onPress={() => setIsStartTimePickerVisible(true)} style={{ marginBottom: 10 }}>
              <Text>{startTime ? `Start Time: ${startTime.toLocaleString()}` : 'Select Start Time'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsEndTimePickerVisible(true)} style={{ marginBottom: 10 }}>
              <Text>{endTime ? `End Time: ${endTime.toLocaleString()}` : 'Select End Time'}</Text>
            </TouchableOpacity>
            <Button title="Select Start Time" onPress={() => setIsStartTimePickerVisible(true)} />
            <Button title="Select End Time" onPress={() => setIsEndTimePickerVisible(true)} />
          </View>
        );
      case 3:
        return (
          <View>
          <View style={{ marginBottom: 10 }}>
            <Text>Frequency:</Text>
            <View>
      <OptionSelector options={options} onSelect={handleSelect} />
      </View>
          </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <Modal visible={isVisible} transparent={true} onRequestClose={onClose} animationType="slide">
      <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ height: modalHeight, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20 }}>
        <ScrollView>
            <View>
          {renderStepContent()}
          </View>
          </ScrollView>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            {currentStep > 1 && (
              <Button title="Previous" onPress={handlePreviousStep} />
            )}
            {currentStep < 3 ? (
              <Button title="Next" onPress={handleNextStep} />
            ) : (
              <ProFlatButton
  text="Submit"
  onPress={handleSubmit}
  isFullWidth={true}
  height={40}
  color="#007bff"
  textColour="white"
  // borderColor="#007bff"
/>
            )}
          </View>
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
