import { View, Text, Button } from "react-native";
import React from "react";
import { GlobalStyles } from "./GlobalStyleSheet";
import { useNavigation } from "@react-navigation/native";

export default function About({ navigation }) {
  navigation = useNavigation();
  return (
    <View>
      <Text style={GlobalStyles.titleText}>About</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
