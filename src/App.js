import React, { createContext, useState } from "react";
import Child from "./component/Child";
import "./styles.css";

export const GlobalData = createContext();
export default function App() {
  const [item, setItem] = useState("Avenger");
  return (
    <div className="App">
      <GlobalData.Provider value={item}>
        <Child />
      </GlobalData.Provider>
    </div>
  );
}
