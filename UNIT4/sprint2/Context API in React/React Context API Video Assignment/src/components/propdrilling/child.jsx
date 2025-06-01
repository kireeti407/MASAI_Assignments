import React from "react";
import GrandChild from "./grandchild";

const Child = ({ user }) => {
  return <GrandChild user={user} />;
};

export default Child;