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
  const [token, setToken] = useState("");

  const saveToken = async (token) => {
    if (token) {
      await SecureStore.setItemAsync("userToken", token);
      setToken(token);
      setIsLoggedIn(1);
    }
  };

  const deleteToken = async () => {
    await SecureStore.deleteItemAsync("userToken");
    setToken("");
    setIsLoggedIn(2);
  };

  const login = (token) => {
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
