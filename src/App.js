import { useState } from "react";
import LoginView from "./components/LoginView";
import Showcase from "./components/Showcase";
import LoginContext from "./context";
import styled from "styled-components";
import firebase from "./firebase";
const AppWrapper = styled.div``;
const App = () => {
  const [user, setUser] = useState(null);
  const handleLoginSuccess = (user) => {
    setUser(user);
  };
  const handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      });
  };
  return (
    <LoginContext.Provider value={user}>
      <AppWrapper>
        {!user && <LoginView onSuccess={handleLoginSuccess} />}
        {user && <Showcase onUserLogOut={handleLogOut} />}
      </AppWrapper>
    </LoginContext.Provider>
  );
};

export default App;
