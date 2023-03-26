import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Chips = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Chips;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 1000,
    padding: 10,
  },
  containerFilled: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 1000,
    padding: 10,
    marginTop: 10,
  },
  text: {
    color: "#fff",
  },
});
