import './gesture-handler.native';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainLayout from './src/pages/layouts/MainLayout';


function App() {
  return (
    <NavigationContainer>
        <MainLayout/>
    </NavigationContainer>
  );
}

export default App;