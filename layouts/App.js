import { StyleSheet, Text, View } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerInner1}>
        <Box text={"1"} style={{ backgroundColor: "red", flex: 1 }} />
        <Box text={"2"} style={{ backgroundColor: "blue", flex: 1 }} />
        <Box text={"3"} style={{ backgroundColor: "green", flex: 1 }} />
        <Box text={"4"} style={{ backgroundColor: "yellow", flex: 1 }} />
        <Box text={"5"} style={{ backgroundColor: "purple", flex: 1 }} />
      </View>
      <View style={styles.containerInner2}>
        <Box text={"1"} style={{ backgroundColor: "red", flex: 1 }} />
        <Box text={"2"} style={{ backgroundColor: "blue", flex: 1 }} />
        <Box text={"3"} style={{ backgroundColor: "green", flex: 1 }} />
        <Box text={"4"} style={{ backgroundColor: "yellow", flex: 1 }} />
        <Box text={"5"} style={{ backgroundColor: "purple", flex: 1 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  containerInner1: {
    flex: 1,
    flexDirection: "column-reverse",
    borderWidth: 5,
    borderColor: "black",
  },
  containerInner2: {
    flex: 1,
    flexDirection: "row-reverse",
    borderWidth: 5,
    borderColor: "black",
  },
});
