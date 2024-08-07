import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('drawer', { screen: 'User', params: { screen: 'home' } });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>GoFood</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
