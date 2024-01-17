import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import GuessLogItem from "../components/GuessLogItem";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

let minimumValue = 1;
let maximumValue = 100;

const GameScreen = ({ userNumber, gameOverHandler, updateRoundsNumber }) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [guess, setGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState([]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && guess < userNumber) ||
      (direction === "higher" && guess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maximumValue = guess;
    } else {
      minimumValue = guess + 1;
    }
    const newRandomNumber = generateRandomNumber(
      minimumValue,
      maximumValue,
      guess
    );
    setGuess(newRandomNumber);
    setRounds((previousRounds) => [newRandomNumber, ...previousRounds]);
    updateRoundsNumber();
  };

  const guessRoundsListLength = rounds.length;

  useEffect(() => {
    if (userNumber === guess) {
      gameOverHandler();
    }
  }, [userNumber, guess, gameOverHandler]);

  useEffect(() => {
    minimumValue = 1;
    maximumValue = 100;
  }, []);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <AntDesign name="plus" size={24} color="black" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <AntDesign name="minus" size={24} color="black" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.flatListContainer}>
        <FlatList
          data={rounds}
          renderItem={({ item, index }) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - index}
              guessNumber={item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
  flatListContainer: {
    flex: 1,
    padding: 16,
  },
});
