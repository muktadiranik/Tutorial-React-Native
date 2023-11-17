import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const icon = require("./assets/adaptive-icon.png");
const favicon = require("./assets/favicon.png");

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Image source={icon} style={{ height: 100, width: 100 }} />
        </View>
        <View style={styles.textContainer}>
          <Text styles={styles.text}>Open up App.js to start working on your app!</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <View style={styles.textContainer}>
          <Image source={favicon} />
        </View>
        <View style={styles.textContainer}>
          <Image source={{ uri: "https://picsum.photos/200/100" }} style={{ height: 100, width: 200 }}></Image>
        </View>
        <View style={styles.textContainer}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <View style={styles.textContainer}>
          <Image source={favicon} />
        </View>
        <View style={styles.textContainer}>
          <Image source={icon} style={{ height: 100, width: 100 }} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "skyblue",
  },
  text: {
    marginTop: 10,
  },
  textContainer: {
    backgroundColor: "lightblue",
    width: "90%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
});
