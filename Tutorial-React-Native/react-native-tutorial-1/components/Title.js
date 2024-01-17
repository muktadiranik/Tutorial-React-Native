import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Title = ({ children }) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans",
    fontSize: 28,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    borderRadius: 8,
    padding: 12,
  },
});
