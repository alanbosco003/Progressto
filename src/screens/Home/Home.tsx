
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoScreen from '../Todo/TodoScreen';
import MoneyScreen from '../Money/MoneyScreen';
import CareerScreen from '../Goals/GoalsScreen';
import AnalyticsScreen from '../Analytics/AnalyticsScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native/Libraries/Components/View/View';

const Tab = createBottomTabNavigator();
const myIcon = <Icon name="rocket" size={30} color="#900" />;
function MainTabNavigator() {
    const iconName: string = 'ios-list'; 
  return (
    <Tab.Navigator
      initialRouteName="To Do"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'To Do') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name === 'Money') {
            iconName = focused ? 'ios-cash' : 'ios-cash-outline';
          } else if (route.name === 'Career') {
            iconName = focused ? 'ios-briefcase' : 'ios-briefcase-outline';
          } else if (route.name === 'Analytics') {
            iconName = focused ? 'ios-analytics' : 'ios-analytics-outline';
          }

          // You can return any component that you like here!
          return <Icon name="rocket" size={30} color="#900" />
        //    <Icon ios="ios-add" android="md-add" />
        //   <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    //   tabBarOptions={{
    //     activeTintColor: 'blue',
    //     inactiveTintColor: 'gray',
    //   }}
    >
      <Tab.Screen name="To Do" component={TodoScreen} />
      <Tab.Screen name="Money" component={MoneyScreen} />
      <Tab.Screen name="Career" component={CareerScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
      <MainTabNavigator />
  );
}

export default AppNavigator;
