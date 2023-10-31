import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  const [data, setData] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
    { id: 7, name: "Item 7" },
    { id: 8, name: "Item 8" },
    { id: 9, name: "Item 9" },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <FlatList numColumns={2} data={data} renderItem={({ item }) => <Text style={styles.text}>{item.name}</Text>} />
      </View>
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
  },
  view: {
    marginTop: 20,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  text: {
    fontSize: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "pink",
    margin: 10,
  },
});
