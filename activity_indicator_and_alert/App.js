import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator, Button, Alert } from "react-native";
import { useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={() => setLoading(!loading)} title={loading ? "Stop" : "Start"} />
      <ActivityIndicator animating={loading} size={"large"} />
      <Button
        title="Alert"
        onPress={() => {
          Alert.alert("Alert Title", "Alert message", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => console.log("OK Pressed"), style: "default" },
            {
              text: "Delete",
              onPress: () => console.log("Delete Pressed"),
              style: "destructive",
            },
          ]);
        }}
      />
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
});
