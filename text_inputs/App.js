import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [input, setInput] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Text Input</Text>
      <TextInput style={styles.textInput} onChangeText={(value) => setInput(value)} multiline />
      <Text style={styles.text2}>{text}</Text>
      <View>
        <Button
          title="Button"
          onPress={() => {
            setText(input);
          }}
        />
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
    fontSize: 30,
    fontWeight: "bold",
  },
  text2: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 30,
  },
  textInput: {
    width: 300,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
  },
});
