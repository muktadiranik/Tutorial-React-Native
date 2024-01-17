import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";

const LoadingScreen = () => {
  return (
    <View>
      <ActivityIndicator size={"large"} style={styles.container} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
