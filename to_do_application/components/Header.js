import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "#fbb03b",
  },
  title: {
    fontSize: 24,
    paddingTop: 50,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
  },
});
