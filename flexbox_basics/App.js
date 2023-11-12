import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>1</Text>
          </View>
          <View style={styles.view1}>
            <Text style={{ fontSize: 30 }}>A</Text>
            <Text style={{ fontSize: 30 }}>B</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.box2}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>2</Text>
          </View>
          <View style={styles.view2}>
            <Text style={{ fontSize: 30 }}>C</Text>
            <Text style={{ fontSize: 30 }}>D</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.box3}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>3</Text>
          </View>
          <View style={styles.view3}>
            <Text style={{ fontSize: 30 }}>E</Text>
            <Text style={{ fontSize: 30 }}>F</Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  view1: {
    flexDirection: "row",
    backgroundColor: "red",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  view2: {
    flexDirection: "row",
    backgroundColor: "blue",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  view3: {
    flexDirection: "row",
    backgroundColor: "green",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  box1: {
    borderColor: "purple",
    borderWidth: 5,
    borderRadius: 10,
    margin: 5,
    padding: 5,
  },
  box2: {
    borderColor: "blue",
    borderWidth: 5,
    borderRadius: 10,
    margin: 5,
    padding: 5,
  },
  box3: {
    borderColor: "green",
    borderWidth: 5,
    borderRadius: 10,
    margin: 5,
    padding: 5,
  },
});
