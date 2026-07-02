import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
} from "react-native";

const ResultScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Search Result
      </Text>
    </SafeAreaView>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
  },
});