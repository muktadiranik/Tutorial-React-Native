import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import Header from "./components/Header";
import Item from "./components/Item";
import Form from "./components/Form";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, text: "Go to school" },
    { id: 2, text: "Go to work" },
    { id: 3, text: "Go to sleep" },
    { id: 4, text: "Go to eat" },
    { id: 5, text: "Buy milk" },
    { id: 6, text: "Buy bread" },
    { id: 7, text: "Buy apples" },
    { id: 8, text: "Buy oranges" },
    { id: 9, text: "Buy watermelon" },
    { id: 10, text: "Buy water" },
    { id: 11, text: "Buy coffee" },
    { id: 12, text: "Buy tea" },
    { id: 13, text: "Buy juice" },
    { id: 14, text: "Take a shower" },
    { id: 15, text: "Brush teeth" },
    { id: 16, text: "Wash clothes" },
    { id: 17, text: "Cook dinner" },
    { id: 18, text: "Go to bed" },
  ]);

  const submitHandler = (text) => {
    setItems([{ id: Math.random(), text: text }, ...items]);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.formListContainer}>
        <Form submitHandler={submitHandler} />
        <View>
          <FlatList data={items} renderItem={({ item }) => <Item item={item} items={items} setItems={setItems} />} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  formListContainer: {
    flex: 1,
  },
});
