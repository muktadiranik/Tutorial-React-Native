import { StyleSheet, Text, View, Modal, Button, StatusBar } from "react-native";
import { useState } from "react";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Tap me!"
        onPress={() => {
          setModalOpen(true);
        }}
      />
      <Modal visible={modalOpen} animationType="slide" onRequestClose={() => setModalOpen(false)}>
        <View style={styles.modalContainer}>
          <Text>Modal</Text>
          <Button
            title="Close"
            onPress={() => {
              setModalOpen(false);
            }}
          />
        </View>
      </Modal>
      <StatusBar backgroundColor="lightblue" barStyle="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
