import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Box({ text, style }) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
