import React, { useContext, useEffect } from "react";
import LoginContext from "../context";
const Test = () => {
  const user = useContext(LoginContext);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div>
      <p>{user && user.displayName}</p>
      <img src={user && user.photoURL} alt="" />
    </div>
  );
};
export default Test;
