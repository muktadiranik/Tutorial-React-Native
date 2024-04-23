import React from "react";
import { View, FlatList } from "react-native";
import { CATEGORIES } from "../data/data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  const onPressHandler = (item) => {
    navigation.navigate("MealsOverview", {
      categoryId: item.id,
    });
  };

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => (
          <CategoryGridTile
            title={item.title}
            color={item.color}
            onPress={() => onPressHandler(item)}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
