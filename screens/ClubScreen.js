import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Chips from "../components/Chips";
import ClubCard from "../components/ClubCard";

const ClubScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>Student Clubs</Text>
        <Text style={styles.info}>
          Be an active part of various student clubs in MIT
        </Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          flexDirection: "row",
          marginVertical: 30,
          gap: 15,
          paddingHorizontal: 10,
          height: 50,
        }}
      >
        <Chips filled={true}>School of Engineering</Chips>
        <Chips>School of Design</Chips>
        <Chips>School of Managemtn</Chips>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <Text style={styles.headerB}>MIT School of Engineering</Text>
        <Text style={{ color: "#fff" }}>{"(11)"}</Text>
      </View>
      <ScrollView style={{ marginTop: 5 }}>
        <ClubCard
          title="Robotics Club"
          info="Department of E&TC"
          color="#1A4166"
        />
        <ClubCard
          title="Design Club"
          info="Department of Engineering"
          color="#4A3F89"
        />
        <ClubCard
          title="Flight Club"
          info="Department of Aerospace"
          color="#071D24"
        />
        <ClubCard
          title="IOT Club"
          info="Department of Information Technology"
          color="#27674C"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClubScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212230",
  },
  header: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
    marginHorizontal: 10,
  },
  info: {
    color: "#fff",
    marginHorizontal: 10,
    marginTop: 10,
  },
  headerB: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
