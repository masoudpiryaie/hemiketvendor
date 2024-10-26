import React, { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(0);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoginWithPassword, setIsLoginWithPassword] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [formError, setFormError] = useState(false);
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODExMSwiaWF0IjoxNzI5NzAwNTAyLCJleHAiOjE3Mjk3ODY5MDJ9.oQIMd9EywPt7VxPoa_1-aizSwi__ZtM8p376wMNp_Zo"
  );

  const saveToken = async (authToken) => {
    console.log("tokensaved00000000000000000005555", authToken);
    if (authToken !== undefined) {
      await SecureStore.setItemAsync("userToken", authToken);
      console.log("tokensaved0000000000000000000", authToken);
      setToken(authToken);

      setIsLoggedIn(1);
    }
    console.log("09909090909090909", token);
  };

  const deleteToken = async () => {
    await SecureStore.deleteItemAsync("userToken");
    setToken("");
    setIsLoggedIn(2);
  };

  const login = (token) => {
    console.log("logiin111111111111111111111111111111", token);
    saveToken(token);
  };
  const logout = () => {
    setIsLoggedIn(2);
    deleteToken();
  };

  useEffect(() => {
    const checkLoggedIn = async () => {
      const storedToken = await SecureStore.getItemAsync("userToken");
      if (storedToken) {
        setToken(storedToken);
        setIsLoggedIn(1);
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        login,
        logout,
        isSignUp,
        setIsSignUp,
        isLoginWithPassword,
        setIsLoginWithPassword,
        phoneNumber,
        setPhoneNumber,
        password,
        setPassword,
        verifyCode,
        setVerifyCode,
        formError,
        setFormError,
        token,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
