import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

const Stack = createNativeStackNavigator();
console.log(process.env.API_KEY)
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Signup"
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;