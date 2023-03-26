import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
const ClubCard = ({title, info, color}) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>{info}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Image
            style={{ height: 20, width: 20 }}
            source={require("../assets/logobox.png")}
          />
          <Text style={{ color: "#FFCD4D", fontWeight: "bold" }}>50 Coins</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Text style={{ color: "#fff" }}>Learn more</Text>
          <AntDesign name="arrowright" size={20} color="white" />
        </View>
      </View>
    </View>
  );
}

export default ClubCard

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
  },
  info: {
    color: '#fff',
    marginVertical: 10,
    fontSize: 15,
  }
})