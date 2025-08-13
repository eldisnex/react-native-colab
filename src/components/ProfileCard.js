import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileCard({ name, avatar, bio }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.bio}>{bio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: { 
    width: 80, 
    height: 80, 
    borderRadius: 40, 
    marginBottom: 10 
  },
  name: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#333' 
  },
  bio: { 
    fontSize: 14, 
    color: '#555', 
    textAlign: 'center',
    marginTop: 4 
  },
});
