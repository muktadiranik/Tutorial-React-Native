import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("Hello");

  buttonPressHandler = () => {
    setText("World");
    setTimeout(() => {
      setText("Hello");
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 30 }}>{text}</Text>
      </View>
      <View style={styles.textContainer}>
        <Button title="Press me" onPress={buttonPressHandler} />
      </View>
      <Pressable
        style={styles.textContainer}
        onPress={() => {
          buttonPressHandler();
        }}>
        <View>
          <Text style={{ fontSize: 30 }}>{text}</Text>
        </View>
      </Pressable>
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
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: "90%",
    backgroundColor: "skyblue",
    marginVertical: 10,
  },
});
