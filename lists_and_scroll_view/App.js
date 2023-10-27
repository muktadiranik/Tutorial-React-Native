import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  const [items, setItems] = useState([
    { key: 1, name: "Item 1" },
    { key: 2, name: "Item 2" },
    { key: 3, name: "Item 3" },
    { key: 4, name: "Item 4" },
    { key: 5, name: "Item 5" },
    { key: 6, name: "Item 6" },
    { key: 7, name: "Item 7" },
    { key: 8, name: "Item 8" },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {items.map((item) => (
          <View key={item.key} style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
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
    margin: 40,
  },
  item: {
    paddingTop: 20,
    paddingBottom: 20,
    margin: 10,
    backgroundColor: "pink",
  },
  text: {
    color: "black",
    textAlign: "center",
    fontSize: 30,
    padding: 10,
  },
});
