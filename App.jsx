import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './screens/Details';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    // navigation using react navigator and navigator stack
    // css using nativewind(tailwind)
    // fontawesom = just hit to "https://icons.expo.fyi/"


    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}