import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  color: string;
}

export default function AccentBar({ color }: Props) {
  return <View style={[styles.bar, { backgroundColor: color }]} />;
}

const styles = StyleSheet.create({
  bar: {
    height: 8,
    marginHorizontal: 20,
    borderRadius: 6,
    marginBottom: 20,
  },
});
