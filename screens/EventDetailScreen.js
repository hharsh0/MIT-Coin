import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";


const EventDetailScreen = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ flex: 1, backgroundColor: "#212230" }}>
          {/* card */}
          <View style={styles.cardContainer}>
            <View>
              <Text style={styles.title}>AI/ML Workshop</Text>
              <Text style={styles.info}>by Robotics Club</Text>
            </View>
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

          {/* content */}
          <View>
            <View style={{ marginVertical: 20 }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                }}
              >
                What is this workshop?
              </Text>
              <Text
                style={{ color: "#fff", fontSize: 15, paddingHorizontal: 10 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Interdum consequat tellus mi adipiscing. Viverra nam quis
                pellentesque at duis cursus consequat, fringilla. Risus nisl
                aliquet pulvinar ultrices duis ipsum et. Consequat sit dignissim
                nisl urna malesuada bibendum. Ornare suscipit volutpat nisl sed
                et lectus faucibus. Id proin cras nec, ut sed lectus
                sollicitudin.
              </Text>
            </View>
            <View style={{ marginVertical: 20 }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                }}
              >
                What will you learn?
              </Text>
              <Text
                style={{ color: "#fff", fontSize: 15, paddingHorizontal: 10 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Interdum consequat tellus mi adipiscing. Viverra nam quis
                pellentesque at duis cursus consequat, fringilla. Risus nisl
                aliquet pulvinar ultrices duis ipsum et. Consequat sit dignissim
                nisl urna malesuada bibendum. Ornare suscipit volutpat nisl sed
                et lectus faucibus. Id proin cras nec, ut sed lectus
                sollicitudin.
              </Text>
            </View>
            <View style={{ marginVertical: 20 }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                }}
              >
                What should you bring along?
              </Text>
              <Text
                style={{ color: "#fff", fontSize: 15, paddingHorizontal: 10 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Interdum consequat tellus mi adipiscing. Viverra nam quis
                pellentesque at duis cursus consequat, fringilla. Risus nisl
                aliquet pulvinar ultrices duis ipsum et. Consequat sit dignissim
                nisl urna malesuada bibendum. Ornare suscipit volutpat nisl sed
                et lectus faucibus. Id proin cras nec, ut sed lectus
                sollicitudin.
              </Text>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
          }}
        >
          <View>
            <Text style={{ color: "#fff", marginBottom: 10, fontSize: 20 }}>
              Join event for
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../assets/logobox.png")}
              />
              <Text
                style={{ color: "#FFCD4D", fontWeight: "bold", fontSize: 20 }}
              >
                10 Coins
              </Text>
            </View>
          </View>
          <Pressable onPress={()=>navigation.navigate('JoinEvent')} style={{ backgroundColor: "#0D6DC5", borderRadius: 10 }}>
            <Text style={{ color: "#fff", padding: 15, fontSize: 15 }}>Join Event</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
}

export default EventDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#151321",
  },
  dateContainer: {
    alignItems: "start",
    gap: 10,
  },
  dateItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#212230",
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 20,
  },
  info: {
    color: "#fff",
    marginVertical: 10,
    fontSize: 15,
  },
  cardContainer: {
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#1A4166",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});