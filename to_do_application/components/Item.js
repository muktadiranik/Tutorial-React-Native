import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function Item({ item, items, setItems }) {
  const handlePress = () => {
    setItems(items.filter((i) => i.id !== item.id));
  };

  return (
    <TouchableOpacity key={item.id} onPress={() => console.log(item.text)}>
      <View style={styles.textButtonContainer}>
        <Text style={styles.text}>{item.text}</Text>
        <MaterialIcons name="delete" size={24} color="black" onPress={handlePress} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    margin: 5,
  },
  textButtonContainer: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 5,
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
