import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import LoadingScreen from "./screens/LoadingScreen";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [roundsNumber, setRoundsNumber] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const inputHandler = (inputText) => {
    setUserNumber(inputText);
    setGameOver(false);
  };

  const gameOverHandler = () => {
    setGameOver(true);
  };

  const restartHandler = () => {
    setRoundsNumber(0);
    setUserNumber(null);
    setGameOver(false);
  };

  const updateRoundsNumber = () => {
    setRoundsNumber(roundsNumber + 1);
  };

  let screen = <StartGameScreen inputHandler={inputHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        gameOverHandler={gameOverHandler}
        updateRoundsNumber={updateRoundsNumber}
      />
    );
  }

  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        roundsNumber={roundsNumber}
        userNumber={userNumber}
        onRestart={restartHandler}
      />
    );
  }

  if (!fontsLoaded) {
    screen = <LoadingScreen />;
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootContainer}>
        <ImageBackground
          style={styles.rootContainer}
          source={require("./assets/images/riho-kroll-m4sGYaHYN5o-unsplash.jpg")}
          resizeMode="cover"
          imageStyle={{ opacity: 0.15 }}>
          <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
