import { StyleSheet, Text, View, SafeAreaView, Image,Pressable } from 'react-native'
import React from 'react'
import { Divider } from 'native-base'
import { AntDesign } from "@expo/vector-icons";

const JoinEvent = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Workshop details */}
      <View style={{ flex: 1 }}>
        <View style={styles.box}>
          <Image
            style={{ height: 25, width: 25, marginVertical: 10 }}
            source={require("../assets/favicon.png")}
          />
          <Text style={styles.header}>AI/ML workshop</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <Text style={{ color: "#C0C0C0" }}>by Robotics Club</Text>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Image
                style={{ height: 15, width: 15 }}
                source={require("../assets/logobox.png")}
              />
              <Text style={{ color: "#FFCD4D", fontWeight: "bold" }}>
                15 Coins
              </Text>
            </View>
          </View>
          <Divider bg="#C0C0C0" thickness="2" orientation="horizontal" />
          <View style={styles.dateContainer}>
            <View style={styles.dateItem}>
              <AntDesign name="calendar" size={20} color="#fff" />
              <Text style={{ color: "#fff" }}>12 March 22'</Text>
            </View>
            <View style={styles.dateItem}>
              <AntDesign name="clockcircleo" size={20} color="white" />
              <Text style={{ color: "#fff" }}>4:00 PM</Text>
            </View>
          </View>
        </View>

        {/* Balace */}
        <View style={styles.box2}>
          <Text style={styles.header}>Your Balance</Text>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <Image
              style={{ height: 25, width: 25 }}
              source={require("../assets/logobox.png")}
            />
            <Text
              style={{ color: "#FFCD4D", fontWeight: "bold", fontSize: 20 }}
            >
              500 Coins
            </Text>
          </View>
        </View>
      </View>

      {/* Pay button */}
      <Pressable style={styles.btn}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Pay 10 Coins</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default JoinEvent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212230",
  },
  box: {
    backgroundColor: "#151321",
    marginHorizontal: 20,
    padding: 20,
    marginTop: 40,
    borderRadius: 10,
  },
  dateItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#212230",
    padding: 10,
    borderRadius: 10,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginTop: 20,
  },
  header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  box2: {
    backgroundColor: "#151321",
    marginHorizontal: 20,
    padding: 20,
    marginTop: 40,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: "#F3AF00",
    fontWeight: "bold",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
});