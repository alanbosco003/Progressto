import FeatherIcons from '@/components/atoms/Icons/FeatherIcons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, } from 'react-native';
import { FAB, Portal, Modal, TextInput, Button } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";


function TodoScreen() {
  const [visible, setVisible] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [tasks, setTasks] = useState<{ name: string; time: string; description: string; }[]>([]);
  const [selectedDate, setSelectedDate] = useState(1);


  const handleDateSelect = (date: number) => {
    setSelectedDate(date);
  };
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


  const getDayOfWeek = (day: number | undefined) => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = new Date(year, month, day);
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
    return dayOfWeek;
  };


  const showDatePicker = () => {
    setDatePickerVisibility(true);
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

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };


  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleTaskNameChange = (text: string) => setTaskName(text);
  const handleTaskTimeChange = (text: string) => setTaskTime(text);
  const handleTaskDescriptionChange = (text: string) => setTaskDescription(text);

  const submitTask = () => {
    const newTask = { name: taskName, time: taskTime, description: taskDescription };
    setTaskName('');
    setTaskTime('');
    setTaskDescription('');
    hideModal();
    setTasks([...tasks, newTask]);

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

  const renderItem = ({ item }: { item: { name: string; time: string; description: string; } }) => (
    <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', padding: 10 }}>
      <Text>Name: {item.name}</Text>
      <Text>Time: {item.time}</Text>
      <Text>Description: {item.description}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
        <Text>{getCurrentMonthYear()}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => {
            showDatePicker()
            // Add functionality for the first icon
          }}>
            <View>
              <FeatherIcons name = "list" size={24} color={'#000000'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            // setShowDatePicker(true)
            // Add functionality for the second icon
          }}>
            <View>
              <FeatherIcons name = "list" size={24} color={'#000000'} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* Your header view here */}
  <View style={{ justifyContent: 'flex-start', backgroundColor: "white"}}>
     <View style={{ backgroundColor: "green"}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {generateDates().map(date => (
          <TouchableOpacity key={date} onPress={() => handleDateSelect(date)}>
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 16 }}>{getDayOfWeek(date)} {date}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
  </View>

    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />

  </View>

      {/* FAB button to add new task */}
      <FAB
        style={{ position: 'absolute', margin: 16, right: 0, bottom: 0 }}
        icon="plus"
        onPress={showModal}
      />
      
  <Portal>
    <View>
      {/* <Button onPress={showDatePicker}>Show Date Picker</Button> */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>

  </Portal>


      {/* Modal for adding new task */}
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
          <Button mode="contained" onPress={() => { submitTask(); hideModal(); }}>
            Submit
          </Button>
        </Modal>
      </Portal>

    </View>
  );
}

export default TodoScreen;
