import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import React from "react";

const SuccessScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Image
          style={{ height: 120, width: 210, marginBottom: 20 }}
          source={require("../assets/coingroup.png")}
        />
        <Text style={{ color: "#F3AF00", fontWeight: 'bold', fontSize: 20, marginBottom: 20 }}>Congratulations!</Text>
        <Text style={styles.header}>You've Earned a reward</Text>
      </View>
      <Pressable onPress={()=>navigation.navigate("Start")} style={styles.btn}>
        <Text style={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}>
          Back Home
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212230",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  btn: {
    backgroundColor: "#0D6DC5",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    flexShrink: 0,
    width: "100%",
  },
});
