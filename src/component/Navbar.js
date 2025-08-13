import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Navbar({ title = "Mi App", onHome, onProfile, onSettings }) {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={onHome}>
        <Text style={styles.link}>Home</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.right}>
        <TouchableOpacity onPress={onProfile}>
          <Text style={styles.link}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSettings}>
          <Text style={styles.link}>⚙️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#94B9FF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 4, // sombra en Android
    shadowColor: '#000', // sombra en iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  link: {
    fontSize: 16,
    color: '#fff',
    marginHorizontal: 8,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
