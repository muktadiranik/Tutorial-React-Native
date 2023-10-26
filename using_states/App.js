import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [text1, setText1] = useState("Hello World");
  const [text2, setText2] = useState("Hello World");

  const changeText1 = () => {
    if (text1 === "Hello World") {
      setText1("World Hello");
    }
    if (text1 === "World Hello") {
      setText1("Hello World");
    }
  };

  const changeText2 = () => {
    if (text2 === "Hello World") {
      setText2("World Hello");
    }
    if (text2 === "World Hello") {
      setText2("Hello World");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>{text1}</Text>
      <View>
        <Button title="Change" onPress={changeText1} color={"#841584"} />
      </View>
      <Text style={styles.text2}>{text2}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Change" onPress={changeText2} color={"#841584"} />
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
  text1: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 30,
  },
  text2: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 30,
  },
  buttonContainer: {
    marginTop: 10,
  },
});
