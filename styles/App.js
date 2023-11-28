import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Item 1",
    },
    {
      id: 2,
      name: "Item 2",
    },
    {
      id: 3,
      name: "Item 3",
    },
    {
      id: 4,
      name: "Item 4",
    },
    {
      id: 5,
      name: "Item 5",
    },
    {
      id: 6,
      name: "Item 6",
    },
    {
      id: 7,
      name: "Item 7",
    },
  ]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.listContainer}>
          {items.map((item) => (
            <View key={item.id} style={[styles.listItems, styles.box, styles.boxShadow]}>
              <Text>{item.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <StatusBar style="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  box: {
    flex: 1,
    width: 300,
    height: 100,
    backgroundColor: "lightblue",
    shadowColor: "black",
  },
  boxShadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  listContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
  },
  listItems: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
});
