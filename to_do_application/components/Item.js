import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React from "react";

export default function Item({ item, items, setItems }) {
  const handlePress = () => {
    setItems(items.filter((i) => i.id !== item.id));
  };

  return (
    <TouchableOpacity key={item.id} onPress={() => console.log(item.text)}>
      <View style={styles.textButtonContainer}>
        <Text style={styles.text}>{item.text}</Text>
        <Button title="Delete" onPress={handlePress} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    margin: 10,
  },
  textButtonContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 5,
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
