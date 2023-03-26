import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* profile */}
      <Text style={styles.header}>Your Profile</Text>
      <View
        style={{
          borderRadius: 20,
          backgroundColor: "#151321",
          marginHorizontal: 10,
        }}
      >
        <View style={styles.fieldContainer}>
          <Text style={{ color: "#A7A7A7" }}>Full Name</Text>
          <Text style={{ color: "#fff" }}>Jhon Doe</Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={{ color: "#A7A7A7" }}>Department</Text>
          <Text style={{ color: "#fff" }}>Computer Science</Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={{ color: "#A7A7A7" }}>Email</Text>
          <Text style={{ color: "#fff" }}>jhondoe@email.com</Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={{ color: "#A7A7A7" }}>Your Balance</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Image
              style={{ height: 20, width: 20 }}
              source={require("../assets/logobox.png")}
            />
            <Text style={{ color: "#FFCD4D", fontWeight: "bold" }}>
              500 Coins
            </Text>
          </View>
        </View>
      </View>

      {/* clubs */}
      <Text style={styles.header}>Your Clubs</Text>
      <View style={{ marginHorizontal: 10 }}>
        <View
          style={{
            padding: 15,
            backgroundColor: "#1A4166",
            borderRadius: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
              Robotics Club
            </Text>
            <Text style={{ color: "#fff", marginVertical: 10 }}>
              Ddpartment of E&TC
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <MaterialCommunityIcons
              name="account-group"
              size={24}
              color="#fff"
            />
            <Text style={{ color: "#fff" }}>72 Members</Text>
          </View>
        </View>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <View
          style={{
            padding: 15,
            backgroundColor: "#4A3F89",
            borderRadius: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
              Design Club
            </Text>
            <Text style={{ color: "#fff", marginVertical: 10 }}>
              Department of Computer Science
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <MaterialCommunityIcons
              name="account-group"
              size={24}
              color="#fff"
            />
            <Text style={{ color: "#fff" }}>64 Members</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212230",
  },
  header: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  fieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});
