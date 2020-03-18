import React, { useReducer, createContext } from "react";
import AppReducer from "./reducer";

export const AppContext = createContext();

export const AppContextProvider = ({ children, initialValue = {} }) => {
  const [state, dispatch] = useReducer(AppReducer, initialValue);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const AppContextConsumer = ({ children }) => (
  <AppContext.Consumer>{children}</AppContext.Consumer>
);
