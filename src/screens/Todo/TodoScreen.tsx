import FeatherIcons from '@/components/atoms/Icons/FeatherIcons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { FAB, Portal, Modal, TextInput, Button } from 'react-native-paper';



function TodoScreen() {

  const [visible, setVisible] = useState(false);
const [taskName, setTaskName] = useState('');
const [taskTime, setTaskTime] = useState('');
const [taskDescription, setTaskDescription] = useState('');

const showModal = () => {
  setVisible(true);
  console.log('Visible is now true:', visible); // Log the new value of visible
};

const hideModal = () => setVisible(false);
const handleTaskNameChange = (text: string) => setTaskName(text);
const handleTaskTimeChange = (text: string) => setTaskTime(text);
const handleTaskDescriptionChange = (text: string) => setTaskDescription(text);

const submitTask = () => {
  // Add logic to handle task submission
  // For example, you can console.log the task details for now
  console.log('Task Name:', taskName);
  console.log('Task Time:', taskTime);
  console.log('Task Description:', taskDescription);

  // Reset input values and hide the modal
  setTaskName('');
  setTaskTime('');
  setTaskDescription('');
  hideModal();
};
  // Function to get the current month and year
  const getCurrentMonthYear = () => {
    const currentDate = new Date();
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    return `${month} ${year}`;  
  };

    // Function to generate an array of dates for the current month
    const generateDates = () => { 

      
      const currentDate = new Date();
      const numberOfDays = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
      const dates = [];
      for (let i = 1; i <= numberOfDays; i++) {
        dates.push(i);
      }
      return dates;
    };

      // State to keep track of the selected date
      const [selectedDate, setSelectedDate] = useState(1);


    // Function to handle date selection
    const handleDateSelect = (date: number) => {
      setSelectedDate(date);
    };

    
    // Function to get the day of the week for a given date
const getDayOfWeek = (day: number | undefined) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const date = new Date(year, month, day);
  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
  return dayOfWeek;
};
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
        <Text>{getCurrentMonthYear()}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => {
            // Add functionality for the first icon
          }}>
            <View>
              <FeatherIcons name = "list" size={24} color={'#000000'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            // Add functionality for the second icon
          }}>
            <View>
              <FeatherIcons name = "list" size={24} color={'#000000'} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
            {/* Horizontal scrollable list of dates */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {generateDates().map(date => (
          <TouchableOpacity key={date} onPress={() => handleDateSelect(date)}>
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 16 }}>{getDayOfWeek(date)} {date}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
            {/* Display selected date */}
            {selectedDate && (
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
          <Text>{selectedDate}, {getCurrentMonthYear()}</Text>
        </View>
      )}
        <FAB
    style={{ position: 'absolute', margin: 16, right: 0, bottom: 0 }}
    icon="plus"
    onPress={showModal}
  />

<Portal>
  <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{ backgroundColor: 'white', padding: 20 }}>
    <TextInput
      label="Task Name"
      value={taskName}
      onChangeText={handleTaskNameChange}
    />
    <TextInput
      label="Task Time"
      value={taskTime}
      onChangeText={handleTaskTimeChange}
    />
    <TextInput
      label="Task Description"
      value={taskDescription}
      onChangeText={handleTaskDescriptionChange}
    />
    <Button mode="contained" onPress={() => {
      // Add functionality to submit the task here
      // You can access taskName, taskTime, and taskDescription here
      // Example: onSubmitTask(taskName, taskTime, taskDescription);
      // Remember to reset input values and hide the modal after submitting
      hideModal();
      }}>
      Submit
    </Button>
  </Modal>
</Portal>

      {/* Your remaining UI */}

    </View>
  );

}

export default TodoScreen;
