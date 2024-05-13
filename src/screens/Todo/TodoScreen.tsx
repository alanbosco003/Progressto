import ProDatePickerModal from '@/components/atoms/DateTime/TimePicker';
import FeatherIcons from '@/components/atoms/Icons/FeatherIcons';
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { FAB, Portal, Modal, TextInput, Button } from 'react-native-paper';
import { useCaseTodoScreen } from '../Todo/UseCase/TodoUseCase';
import AddToDo from '@/components/molecules/AddToDo/AddToDo';

function TodoScreen() {
  const {
    visible, taskName, taskTime, taskDescription, tasks, selectedDate, isDatePickerVisible, isAddToDoVisible, 
    setIsAddToDoVisible, handleDateSelect, getDayOfWeek, showDatePicker, generateDates, hideDatePicker, handleConfirm, showModal, hideModal, handleTaskNameChange, handleTaskTimeChange, handleTaskDescriptionChange, submitTask, getCurrentMonthYear, handleAddToDoSubmit,
  } = useCaseTodoScreen();

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
          <TouchableOpacity onPress={() => showDatePicker()}>
            <View>
              <FeatherIcons name="list" size={24} color={'#000000'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View>
              <FeatherIcons name="list" size={24} color={'#000000'} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
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
      <FAB
        style={{ position: 'absolute', margin: 16, right: 0, bottom: 0 }}
        icon="plus"
        onPress={() => setIsAddToDoVisible(true)}
      />
      <ProDatePickerModal isVisible={isDatePickerVisible} handleConfirm={handleConfirm} hideDatePicker={hideDatePicker} onCancel={hideDatePicker} onConfirm={function (date: Date): void {
        throw new Error('Function not implemented.');
      } } />
            <AddToDo
        isVisible={isAddToDoVisible}
        onClose={() => setIsAddToDoVisible(false)}
        onSubmit={handleAddToDoSubmit}
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
          <Button mode="contained" onPress={() => { submitTask(); hideModal(); }}>
            Submit
          </Button>
        </Modal>
      </Portal>
    </View>
  );
}

export default TodoScreen;
