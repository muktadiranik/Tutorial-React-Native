import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.buttonContainer, pressed && styles.pressed]}
      android_ripple={{ color: Colors.accent500 }}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.accent500,
    paddingVertical: 2,
    paddingHorizontal: 6,
    margin: 8,
    borderRadius: 28,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: Colors.accent500,
  },
});
