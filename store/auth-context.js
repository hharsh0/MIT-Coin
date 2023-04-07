import React,{useState, useEffect} from "react";

const AuthContext = React.createContext({
  token: '',
  isAuthenticated: false,
  login: () => {},
  logout: () => { },
  coins: '',
  setCoins: ()=>{}
});


export const AuthContextProvider = (props) => {
  const [token, setToken] = useState('');
  const [coins, setCoins] = useState('2000')
    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
    }
    const logoutHandler = () => {
        setToken(null);
    }

    // useEffect(() => {
    //   const coinsDocRef = projectFirestore
    //     .collection("coins")
    //     .doc("YT7aioKefbXJmltNPUTg");
    //   coinsDocRef.get().then((doc) => {
    //     if (doc.exists) {
    //       setCoins(doc.data().coins);
    //     } else {
    //       console.log("No such document!");
    //     }
    //   });
    // }, []);

    // const coinHandler = (coin) => {
    //   const coinsDocRef = projectFirestore
    //     .collection("coins")
    //     .doc("YT7aioKefbXJmltNPUTg");
    //   coinsDocRef.update({ coins: coins - coin }).then(() => {
    //     setCoins(coins - coin);
    //   });
    // };

  const coinHandler = (coin) => {
    setCoins(coins - coin)
  }
    const contextValue = {
        token: token,
        isAuthenticated: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        coins: coins,
        setCoins: coinHandler
    }
  
    return (
      <AuthContext.Provider value={contextValue}>
        {props.children}
      </AuthContext.Provider>
    );
}

export default AuthContext;
