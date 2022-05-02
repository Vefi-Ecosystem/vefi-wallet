import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default function VButton({ label, icon, outlined, style, disabled, onPress }) {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Text
        style={{
          color: 'white',
          fontSize: 16
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  disabled: {}
});
