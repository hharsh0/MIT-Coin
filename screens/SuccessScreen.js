import { StyleSheet, Text, View, SafeAreaView,Image, Pressable } from 'react-native'
import React from 'react'

const SuccessScreen = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Image
            style={{ height: 90, width: 90, marginBottom: 20 }}
            source={require("../assets/success.png")}
          />
          <Text style={styles.header}>Transaction Successful!</Text>
        </View>
        <Text style={{color: '#fff', fontWeight: 'bold', marginVertical: 10}}>You've Earned a reward</Text>
          <Pressable style={styles.btn}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Pay 10 Coins
            </Text>
          </Pressable>
      </SafeAreaView>
    );
}

export default SuccessScreen

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
    backgroundColor: "#F3AF00",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    flexShrink: 0,
    width: "100%",
  },
});