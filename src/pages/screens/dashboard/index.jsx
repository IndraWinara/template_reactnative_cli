import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useStore} from '../../../zustand';

const DashboardScreen = () => {
  const {bears ,increasePopulation} = useStore();

  console.log(bears);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dashboard Bears : {bears}</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Section 1</Text>
        <Text style={styles.sectionContent}>Content for section 1...</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Section 2</Text>
        <Text style={styles.sectionContent}>Content for section 2...</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Section 3</Text>
        <Text style={styles.sectionContent}>Content for section 3...</Text>
      </View>
      <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>increasePopulation()}>
        <Text style={styles.buttonText}>Go to Dashboard</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red',
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 14,
    color: '#333',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
});
