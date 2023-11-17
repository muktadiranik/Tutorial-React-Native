import { View, Text, Button } from "react-native";
import React from "react";
import { GlobalStyles } from "./GlobalStyleSheet";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  navigation = useNavigation();
  return (
    <View>
      <Text style={GlobalStyles.titleText}>Home</Text>
      <Button title="Review Details" onPress={() => navigation.navigate("ReviewDetails")} />
    </View>
  );
}
