import React, { useState, useEffect, createContext } from "react";
import { projectFirestore } from "../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  coins: "",
  setCoins: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState("");
  const [coins, setCoins] = useState("2000");
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  useEffect(() => {
    const coinsDocRef = doc(projectFirestore, "coins", "YT7aioKefbXJmltNPUTg");
    getDoc(coinsDocRef).then((doc) => {
      if (doc.exists()) {
        console.warn(doc.data().coin);
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
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
