import React from "react";
import Child from "./child";

const Parent = ({ user }) => {
  return <Child user={user} />;
};

export default Parent;