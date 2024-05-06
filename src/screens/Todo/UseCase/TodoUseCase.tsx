import { useState } from 'react';

export const useCaseTodoScreen = () => {
  const [visible, setVisible] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [tasks, setTasks] = useState<{ name: string; time: string; description: string; }[]>([]);
  const [selectedDate, setSelectedDate] = useState(1);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleDateSelect = (date: number) => {
    setSelectedDate(date);
  };

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

  return {
    visible,
    taskName,
    taskTime,
    taskDescription,
    tasks,
    selectedDate,
    isDatePickerVisible,
    handleDateSelect,
    getDayOfWeek,
    showDatePicker,
    generateDates,
    hideDatePicker,
    handleConfirm,
    showModal,
    hideModal,
    handleTaskNameChange,
    handleTaskTimeChange,
    handleTaskDescriptionChange,
    submitTask,
    getCurrentMonthYear,
  };
};
