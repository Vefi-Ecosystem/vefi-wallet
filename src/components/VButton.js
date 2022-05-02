import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default function VButton({ label, icon, outlined, style, disabled, onPress }) {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
      
  },
  disabled: {}
});
