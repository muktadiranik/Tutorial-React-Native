import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
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
  ]);

  const submitHandler = (text) => {
    setItems([{ id: Math.random(), text: text }, ...items]);
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View>
          <Form submitHandler={submitHandler} />
          <View>
            {items.map((item) => (
              <Item key={item.id} item={item} items={items} setItems={setItems} />
            ))}
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    padding: 20,
    margin: 20,
    backgroundColor: "lightgray",
  },
  textButtonContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
  },
});
