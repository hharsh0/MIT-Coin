import React, { useState, useEffect, createContext } from "react";
import { projectFirestore, projectAuth } from "../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";


const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  coins: "",
  setCoins: () => {},
  error: "",
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState("");
  const [coins, setCoins] = useState("2000");
  const [error, setError] = useState("");
  const userIsLoggedIn = !!token;

  // const loginHandler = (token) => {
  //   setToken(token);
  // };

  const loginHandler = (email, password) => {
    signInWithEmailAndPassword(projectAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setToken(user.accessToken);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error:", errorCode, errorMessage);
        setError(errorMessage);
      });
  };

  const logoutHandler = () => {
    setToken(null);
  };

  useEffect(() => {
    const coinsDocRef = doc(projectFirestore, "coins", "YT7aioKefbXJmltNPUTg");
    getDoc(coinsDocRef).then((doc) => {
      if (doc.exists()) {
        setCoins(doc.data().coin);
      } else {
        console.log("No such document!");
      }
    });
  }, []);

  const coinHandler = (coin) => {
    const coinsDocRef = doc(projectFirestore, "coins", "YT7aioKefbXJmltNPUTg");
    updateDoc(coinsDocRef, { coin: coins - coin }).then(() => {
      setCoins(coins - coin);
    });
  };

  const contextValue = {
    token: token,
    isAuthenticated: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    coins: coins,
    setCoins: coinHandler,
    error: error,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
