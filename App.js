import React from 'react';
import { View } from 'react-native';
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      options={{headerShown:false }}
       name="Home"
       component={Home}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
