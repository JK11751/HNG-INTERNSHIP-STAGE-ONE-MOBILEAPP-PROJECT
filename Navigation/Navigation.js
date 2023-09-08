import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import GitHubScreen from '../screens/GitHubScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="GitHub" component={GitHubScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
