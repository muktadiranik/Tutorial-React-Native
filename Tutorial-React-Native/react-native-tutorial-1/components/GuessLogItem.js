import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/colors";

const GuessLogItem = ({ roundNumber, guessNumber }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}># {roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guessNumber}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary700,
    borderWidth: 1,
    borderRadius: 40,
    padding: 15,
    marginVertical: 10,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
