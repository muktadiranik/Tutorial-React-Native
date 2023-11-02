import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Button } from "react-native";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" },
    { id: 4, title: "Item 4" },
    { id: 5, title: "Item 5" },
    { id: 6, title: "Item 6" },
    { id: 7, title: "Item 7" },
    { id: 8, title: "Item 8" },
    { id: 9, title: "Item 9" },
    { id: 10, title: "Item 10" },
    { id: 11, title: "Item 11" },
    { id: 12, title: "Item 12" },
  ]);
  const [item, setItem] = useState("");

  const handlePress = (id) => {
    console.log(`Pressed item with id: ${id}`);
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={(text) => setItem(text)} value={item} />
      <Button title="Add Item" onPress={() => setItems([...items, { id: items.length + 1, title: item }])} />
      <ScrollView>
        {items.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => handlePress(item.id)}>
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 24,
    paddingVertical: 10,
    paddingHorizontal: 60,
    margin: 10,
    backgroundColor: "lightblue",
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    textAlign: "center",
  },
});
