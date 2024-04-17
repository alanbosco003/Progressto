
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoScreen from '../Todo/TodoScreen';
import MoneyScreen from '../Money/MoneyScreen';
import CareerScreen from '../Goals/GoalsScreen';
import AnalyticsScreen from '../Analytics/AnalyticsScreen';
import { Text } from 'react-native';
import FeatherIcons from '@/components/atoms/Icons/FeatherIcons';
import { useTranslation } from 'react-i18next';


const Tab = createBottomTabNavigator();
function MainTabNavigator() {

  const { t } = useTranslation(['homeScreen']);
  return (
    <Tab.Navigator
      initialRouteName="To Do"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === 'To Do') {
              iconName = focused ? 'list' : 'list';
            } else if (route.name === 'Money') {
              iconName = focused ? 'minimize-2' : 'minimize-2';
            } else if (route.name === 'Career') {
              iconName = focused ? 'target' : 'target';
            } else if (route.name === 'Analytics') {
              iconName = focused ? 'activity' : 'activity';
            }
            return <FeatherIcons name={iconName} size={24} color={focused ? '#000000' : '#808080'} />;
          },
          tabBarLabel: ({ focused }) => {
            let labelColor = focused ? '#000000' : '#808080';
            return (
              <Text style={{ color: labelColor }}>
                    {/* Provide label for each tab screen */}
                 {route.name === 'To Do' ? t('homeScreen:To-Do') :
                 route.name === 'Money' ? t('homeScreen:Money') :
                 route.name === 'Career' ? t('homeScreen:Career') :
                 route.name === 'Analytics' ? t('homeScreen:Analytics') :
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
