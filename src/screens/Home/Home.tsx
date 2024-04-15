
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoScreen from '../Todo/TodoScreen';
import MoneyScreen from '../Money/MoneyScreen';
import CareerScreen from '../Goals/GoalsScreen';
import AnalyticsScreen from '../Analytics/AnalyticsScreen';
import IconFeather from 'react-native-vector-icons/Feather';
import { Text } from 'react-native';


const Tab = createBottomTabNavigator();

const toDoIcon = <IconFeather name="list" size={24} color="#000000" />;
const moneyIcon = <IconFeather name="minimize-2" size={24} color="#000000" />;
const careerIcon = <IconFeather name="target" size={24} color="#000000" />;
const analyticsIcon = <IconFeather name="activity" size={24} color="#000000" />;
const toDoIconInactive = <IconFeather name="list" size={24} color="#808080" />;
const moneyIconInactive = <IconFeather name="minimize-2" size={24} color="#808080" />;
const careerIconInactive = <IconFeather name="target" size={24} color="#808080" />;
const analyticsIconInactive = <IconFeather name="activity" size={24} color="#808080" />;
function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="To Do"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
            if (route.name === 'To Do') {
              return focused ? toDoIcon : toDoIconInactive;
            } else if (route.name === 'Money') {
              return focused ? moneyIcon : moneyIconInactive;
            } else if (route.name === 'Career') {
              return focused ?careerIcon : careerIconInactive;
            } else if (route.name === 'Analytics') {
              return focused ? analyticsIcon :analyticsIconInactive;
            }
            return careerIcon;
          },
          tabBarLabel: ({ focused }) => {
            let labelColor = focused ? '#000000' : '#808080';
            return (
              <Text style={{ color: labelColor }}>
                {/* Provide label for each tab screen */}
                {route.name === 'To Do' ? 'To Do' :
                 route.name === 'Money' ? 'Money' :
                 route.name === 'Career' ? 'Career' :
                 route.name === 'Analytics' ? 'Analytics' :
                 ''}
              </Text>
            );
          },
      })}

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
