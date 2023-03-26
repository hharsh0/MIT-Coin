import { StyleSheet, Text, View, SafeAreaView, Image,ScrollView } from "react-native";
import React from "react";
import { Divider } from "native-base";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.headingText}>Hi, Joseph</Text>
        <View style={styles.box1}>
          <View>
            <Text style={styles.balance}>Your Balance</Text>
            <Text style={styles.coin}>500 MIT Coins</Text>
            <Text style={styles.balance}>~500 INR</Text>
          </View>
          <Image source={require("../assets/logobox.png")} style={styles.img} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 20,
            gap: 20,
            backgroundColor: "#212230",
            borderRadius: 10,
            paddingVertical: 20,
          }}
        >
          <View>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
              30 coins
            </Text>
            <Text style={{ color: "#C0C0C0", textAlign: "center" }}>SPENT</Text>
          </View>
          <Divider bg="#373737" thickness="2" mx="2" orientation="vertical" />
          <View>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
              10 coins
            </Text>
            <Text style={{ color: "#C0C0C0", textAlign: "center" }}>
              REWARD
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: "#212230" }}>
          {/* Event heading */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              marginVertical: 20,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 20 }}>
              Enrolled Events
            </Text>
            <Text
              style={{ fontWeight: "bold", color: "#2C9AFF", fontSize: 20 }}
            >
              Explore all
            </Text>
          </View>
          {/* Event Card */}
          <View
            style={{ flexDirection: "row", gap: 10, paddingHorizontal: 10 }}
          >
            <View
              style={{
                padding: 15,
                backgroundColor: "#1A4166",
                borderRadius: 15,
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
                AI//ML Workshop
              </Text>
              <Text style={{ color: "#fff", marginVertical: 10 }}>
                by Robotics club
              </Text>
              <Text style={{ color: "#fff" }}>Date</Text>
              <Text style={{ color: "#fff" }}>01/01/2023</Text>
            </View>
            <View
              style={{
                padding: 15,
                backgroundColor: "#362F63",
                borderRadius: 15,
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
                UDX Workshop
              </Text>
              <Text style={{ color: "#fff", marginVertical: 10 }}>
                by Design club
              </Text>
              <Text style={{ color: "#fff" }}>Date</Text>
              <Text style={{ color: "#fff" }}>01/01/2023</Text>
            </View>
          </View>
          {/* Recent Transactions */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              marginVertical: 20,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
              Recent Transaction
            </Text>
            <Text
              style={{ fontWeight: "bold", color: "#2C9AFF", fontSize: 20 }}
            >
              View all
            </Text>
          </View>

          {/* Transaction Card */}
          <View
            style={{
              backgroundColor: "#151321",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginVertical: 10,
              padding: 20,
              borderRadius: 5,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Image
                style={{ height: 40, width: 40 }}
                source={require("../assets/iot.png")}
              />
              <View>
                <Text style={{ color: "#fff" }}>Iot Workshop</Text>
                <Text style={{ color: "#C4C4C4" }}>02 Mar 2022</Text>
              </View>
            </View>

            <Text
              style={{ color: "#FFCD4D", fontWeight: "bold", fontSize: 20 }}
            >
              10 Coins
            </Text>
          </View>
          {/* Transaction Card */}
          <View
            style={{
              backgroundColor: "#151321",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginVertical: 10,
              padding: 20,
              borderRadius: 5,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Image
                style={{ height: 40, width: 40 }}
                source={require("../assets/design.png")}
              />
              <View>
                <Text style={{ color: "#fff" }}>Iot Workshop</Text>
                <Text style={{ color: "#C4C4C4" }}>02 Mar 2022</Text>
              </View>
            </View>

            <Text
              style={{ color: "#FFCD4D", fontWeight: "bold", fontSize: 20 }}
            >
              10 Coins
            </Text>
          </View>
          {/* Transaction Card */}
          <View
            style={{
              backgroundColor: "#151321",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginVertical: 10,
              padding: 20,
              borderRadius: 5,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Image
                style={{ height: 40, width: 40 }}
                source={require("../assets/library.png")}
              />
              <View>
                <Text style={{ color: "#fff" }}>Iot Workshop</Text>
                <Text style={{ color: "#C4C4C4" }}>02 Mar 2022</Text>
              </View>
            </View>

            <Text
              style={{ color: "#FFCD4D", fontWeight: "bold", fontSize: 20 }}
            >
              10 Coins
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#151321",
  },
  headingText: {
    color: "#fff",
    fontSize: 30,
    paddingHorizontal: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  balance: {
    color: "#C0C0C0",
    marginBottom: 10,
    fontSize: 20,
  },
  coin: {
    color: "#FFCD4D",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 10,
  },
  box1: {
    marginTop: 20,
    backgroundColor: "#212230",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  img: {
    width: 80,
    height: 80,
  },
});
