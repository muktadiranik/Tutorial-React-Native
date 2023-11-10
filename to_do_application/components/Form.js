import { View, TextInput, Button, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useState } from "react";

export default function Form({ submitHandler }) {
  const [text, setText] = useState("");

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.inputButtonContainer}>
        <TextInput placeholder="Add a new task" onChangeText={(e) => setText(e)} style={styles.input} value={text} />
        <Button
          title="Add"
          onPress={() => {
            if (text.length === 0) {
              Alert.alert("Empty Task", "Please enter a task", [
                {
                  text: "OK",
                  onPress: () => setText(""),
                },
              ]);
              return;
            }
            submitHandler(text);
            setText("");
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
  },
  inputButtonContainer: {
    paddingHorizontal: 10,
  },
});
