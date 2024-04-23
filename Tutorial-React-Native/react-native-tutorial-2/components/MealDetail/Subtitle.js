import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Subtitle = () => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>Ingredients</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#d29169",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "#d29169",
    borderBottomWidth: 2,
    borderRadius: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 8,
  },
});
