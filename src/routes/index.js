import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from '../pages/WelcomeScreen';
import AuthScreens from '../pages/AuthScreens';
import ProductScreen from '../pages/ProductScreens';
import Cart from '../pages/Cart';
import Chat from '../pages/Chat';
import CreateAccount from '../pages/CreateAccount';

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
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{ headerShown: false }}
      />
    <Stack.Screen
    name="Cart"
    component={Cart}
    options={{ headerShown: false }}
  />
        <Stack.Screen
    name="Chat"
    component={Chat}
    options={{ headerShown: false }}
  />
       <Stack.Screen
    name="CreateAccount"
    component={CreateAccount}
    options={{ headerShown: false }}
  />
</Stack.Navigator>

  );
}
