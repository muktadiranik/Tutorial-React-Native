import { StyleSheet, View, ScrollView, StatusBar } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={[styles.containerInnerColumn, styles.containerFlex]}>
          <Box text={"1"} style={{ backgroundColor: "red", flex: 1 }} />
          <Box text={"2"} style={{ backgroundColor: "blue", flex: 1 }} />
          <Box text={"3"} style={{ backgroundColor: "green", flex: 1 }} />
        </View>
        <View style={[styles.containerInnerRow, styles.containerFlex]}>
          <Box text={"1"} style={{ backgroundColor: "red", flex: 1 }} />
          <Box text={"2"} style={{ backgroundColor: "blue", flex: 1 }} />
          <Box text={"3"} style={{ backgroundColor: "green", flex: 1 }} />
        </View>
        <View style={[styles.containerInnerSpaceBetween, styles.containerFlex]}>
          <Box text={"1"} style={{ backgroundColor: "red" }} />
          <Box text={"2"} style={{ backgroundColor: "blue" }} />
          <Box text={"3"} style={{ backgroundColor: "green" }} />
        </View>
        <View style={[styles.containerInnerRowFlexStart, styles.containerFlex]}>
          <Box text={"1"} style={{ backgroundColor: "red" }} />
          <Box text={"2"} style={{ backgroundColor: "blue" }} />
          <Box text={"3"} style={{ backgroundColor: "green" }} />
        </View>
        <View style={[styles.containerInnerColumnCenter, styles.containerFlex]}>
          <Box text={"1"} style={{ backgroundColor: "red" }} />
          <Box text={"2"} style={{ backgroundColor: "blue" }} />
          <Box text={"3"} style={{ backgroundColor: "green" }} />
        </View>
        <View style={[styles.containerInnerColumnFlexStart, styles.containerFlex]}>
          <Box text={"1"} style={{ backgroundColor: "red" }} />
          <Box text={"2"} style={{ backgroundColor: "blue" }} />
          <Box text={"3"} style={{ backgroundColor: "green" }} />
        </View>
        <View style={[styles.containerInnerColumnAlignSelf, styles.containerFlex]}>
          <Box text={"1"} style={{ backgroundColor: "red", alignSelf: "flex-start" }} />
          <Box text={"2"} style={{ backgroundColor: "blue", alignSelf: "flex-end" }} />
          <Box text={"3"} style={{ backgroundColor: "green", alignSelf: "center" }} />
        </View>
        <View style={[styles.containerInnerColumnFlexWrap, styles.containerFlex]}>
          <Box text={"1"} style={{ backgroundColor: "red" }} />
          <Box text={"2"} style={{ backgroundColor: "blue" }} />
          <Box text={"3"} style={{ backgroundColor: "green" }} />
          <Box text={"4"} style={{ backgroundColor: "purple" }} />
          <Box text={"5"} style={{ backgroundColor: "orange" }} />
          <Box text={"6"} style={{ backgroundColor: "yellow" }} />
          <Box text={"7"} style={{ backgroundColor: "pink" }} />
          <Box text={"8"} style={{ backgroundColor: "brown" }} />
          <Box text={"9"} style={{ backgroundColor: "gray" }} />
        </View>
        <View style={[styles.containerInnerColumnFlexWrap, styles.containerFlex]}>
          <Box text={"1"} style={{ backgroundColor: "red" }} />
          <Box text={"2"} style={{ backgroundColor: "blue" }} />
          <Box text={"3"} style={{ backgroundColor: "green" }} />
          <Box text={"4"} style={{ backgroundColor: "purple" }} />
          <Box text={"5"} style={{ backgroundColor: "orange" }} />
          <Box text={"6"} style={{ backgroundColor: "yellow" }} />
          <Box text={"7"} style={{ backgroundColor: "pink" }} />
          <Box text={"8"} style={{ backgroundColor: "brown" }} />
          <Box text={"9"} style={{ backgroundColor: "gray" }} />
        </View>
      </ScrollView>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFlex: {
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 5,
    marginHorizontal: 5,
  },
  containerInnerColumn: {
    flex: 1,
    flexDirection: "column",
  },
  containerInnerRow: {
    flex: 1,
    flexDirection: "row",
  },
  containerInnerSpaceBetween: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerInnerRowFlexStart: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  containerInnerColumnCenter: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  containerInnerColumnFlexStart: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  containerInnerColumnAlignSelf: {
    flex: 1,
    flexDirection: "column",
  },
  containerInnerColumnFlexWrap: {
    flex: 1,
    flexWrap: "wrap-reverse",
    flexDirection: "row",
  },
  containerInnerColumnAlignItems: {
    height: 200,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
  },
});
