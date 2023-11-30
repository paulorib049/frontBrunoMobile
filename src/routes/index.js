import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from '../pages/WelcomeScreen';
import AuthScreens from '../pages/AuthScreens';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AuthScreens"
        component={AuthScreens}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
