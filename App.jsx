import './gesture-handler.native';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/pages/routes/Navigator';




function App() {
  return (
    <NavigationContainer>
          <Navigator/>
    </NavigationContainer>
  );
}

export default App;