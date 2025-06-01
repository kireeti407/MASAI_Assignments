
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const GrandChild = () => {
  const user = useContext(UserContext);
  return <h1>Hello, {user}!</h1>;
};

export default GrandChild;