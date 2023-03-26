import { StyleSheet, Text, View } from "react-native";

const Chips = ({ children, filled }) => {
  return (
    <View style={filled ? styles.containerFilled : styles.container}>
      <Text style={filled ? styles.textFilled: styles.text}>{children}</Text>
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
    marginHorizontal: 5,
  },
  containerFilled: {
    borderRadius: 1000,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "#fff",
  },
  text: {
    color: "#fff",
  },
  textFilled: {
    color: "#212230",
  },
});
