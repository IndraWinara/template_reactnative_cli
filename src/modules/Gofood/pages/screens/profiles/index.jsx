import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ProfilesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profiles</Text>
      <View style={styles.profileCard}>
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileDescription}>Software Engineer at XYZ Corp.</Text>
      </View>
      <View style={styles.profileCard}>
        <Text style={styles.profileName}>Jane Smith</Text>
        <Text style={styles.profileDescription}>Product Manager at ABC Inc.</Text>
      </View>
      <View style={styles.profileCard}>
        <Text style={styles.profileName}>Mike Johnson</Text>
        <Text style={styles.profileDescription}>UX Designer at LMN LLC.</Text>
      </View>
    </View>
  );
};

export default ProfilesScreen;

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
    color: 'red'
  },
  profileCard: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileDescription: {
    fontSize: 14,
    color: '#333',
  },
});
