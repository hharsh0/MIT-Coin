import { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
  Image,
} from "react-native";
import AuthContext from "../store/auth-context";
import { Input } from "native-base";

const LoginScreen = ({navigator}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authCtx = useContext(AuthContext);
  const handleLogin = () => {
    authCtx.login("token")
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={styles.header}>Login</Text>
        <Text style={styles.info}>
          Enter your login credentials below to continue.
        </Text>
        <Input
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          variant="underlined"
        />
        <Input
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          variant="underlined"
          secureTextEntry
        />
        <Text style={styles.forgot}>Forgot Password?</Text>
        <Pressable style={styles.btnContainer} onPress={handleLogin}>
          <Text  style={styles.button}>Login</Text>
        </Pressable>
        <Text
          style={{
            color: "#A7A7A7",
            width: "100%",
            textAlign: "center",
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          or
        </Text>
        <Pressable style={styles.googleButton} onPress={handleLogin}>
          <Image style={styles.img} source={require("../assets/google.png")} />
          <Text style={{ color: "#A7A7A7", fontSize: 20 }}>
            Continue with Google
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#212230",
  },
  innercontainer: {
    marginTop: 50,
    paddingRight: 20,
    paddingLeft: 20,
  },
  header: {
    color: "#fff",
    fontSize: 40,
  },
  info: {
    color: "#A7A7A7",
    fontSize: 20,
    marginTop: 30,
    marginBottom: 30,
  },
  input: {
    marginTop: 10,
    height: 40,
    width: "100%",
    paddingHorizontal: 10,
    color: "#fff",
    fontSize: 20,
  },
  forgot: {
    color: "#A7A7A7",
    marginTop: 20,
    marginBottom: 10,
    width: "100%",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#0D6DC5",
    color: "#fff",
    width: "100%",
    padding: 20,
    textAlign: "center",
    fontSize: 20,
  },
  btnContainer: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  googleButton: {
    borderWidth: 1,
    borderColor: "#A7A7A7",
    padding: 20,
    width: "100%",
    textAlign: "center",
    color: "#fff",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 30,
    width: 30,
  },
});
