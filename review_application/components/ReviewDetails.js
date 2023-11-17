import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "./GlobalStyleSheet";

export default function ReviewDetails({ navigation }) {
  navigation = useNavigation();
  return (
    <View>
      <Text style={GlobalStyles.titleText}>ReviewDetails</Text>
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </View>
  );
}
