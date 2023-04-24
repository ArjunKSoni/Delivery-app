import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Restaurant from './screens/Restaurant';
import Login from './screens/Login';
// import { Provider } from 'react-redux'
// import { store } from '@reduxjs/toolkit';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    // navigation using react navigator and navigator stack
    // css using nativewind(tailwind)
    // fontawesom = just hit to "https://icons.expo.fyi/"
    // carousel https://www.educative.io/answers/how-to-integrate-carousel-in-react-native-with-pagination
    // api from sanity.io/sonny
    // useContext ki jgh redux use krna hai  <create folder features for reduc components>
    // android wallpaper ="https://wallpapercave.com/background-android" or "https://www.pxfuel.com/en/query?q=background+android+apps"

    // <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
}