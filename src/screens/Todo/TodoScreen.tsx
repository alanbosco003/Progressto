import FeatherIcons from '@/components/atoms/Icons/FeatherIcons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

function TodoScreen() {
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
  let iconName = "list";
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

      {/* Your remaining UI */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18 }}>Todo Screen</Text>
      </View>
    </View>
  );

}

export default TodoScreen;
