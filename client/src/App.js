import React from "react";
import "./App.css";
import AppIndex from "./AppIndex";

export const StoreContext = React.createContext({});

function App() {
  return (
    <StoreContext.Provider value={{}}>
      <AppIndex />
    </StoreContext.Provider>
  );
}

export default App;
