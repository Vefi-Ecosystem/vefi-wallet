import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../constants/colors';

export default function VIcon({ name, size, style, color }) {
  return <Ionicons name={name} color={color ?? colors.formBlack} size={size ?? 25} style={[styles.icons, style]} />;
}

const styles = StyleSheet.create({
  icons: {
    // margin: 5
  }
});
