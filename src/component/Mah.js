import React, { useContext } from "react";
import { GlobalData } from "../App";

const Mah = () => {
  const data = useContext(GlobalData);
  return <div>Mah Component {data}</div>;
};

export default Mah;
