import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>Body</Text>
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
    justifyContent: "top",
  },
  header: {
    backgroundColor: "pink",
    height: 100,
    width: "100%",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginTop: 30,
  },
  body: {
    backgroundColor: "yellow",
    height: "100%",
    width: "100%",
  },
  bodyText: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginTop: 30,
  },
});
