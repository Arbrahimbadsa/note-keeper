import { useEffect, useState } from "react";
import LoginView from "./components/LoginView";
import Showcase from "./components/Showcase";
import LoginContext from "./context";
import styled from "styled-components";
import firebase from "./firebase";
const AppWrapper = styled.div``;
const App = () => {
  const [user, setUser] = useState(null);
  const [stream, setStream] = useState(null);
  const handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      });
  };
  /**
   * This will generate a video stream behind the scene
   * and thus we will be able to remove the init time...
   */
  useEffect(() => {
    (async () => {
      try {
        const contraints = navigator.mediaDevices.getSupportedConstraints();
        console.log(contraints);
        const facingMode =
          (await (await navigator.mediaDevices.enumerateDevices()).length) <= 1
            ? "user"
            : "environment";
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode,
            aspectRatio: 20 / 9,
            focusMode: "auto",
            whiteBalanceMode: "continuous",
          },
          
        });
        setStream(stream);
      } catch (error) {
        console.log(JSON.stringify(error));
      }
    })();
  }, []);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // signed in successful
        setUser(user);
        console.log(user);
      } else {
        // if logout happens
        setUser(null);
      }
    });
  }, []);
  return (
    <LoginContext.Provider
      value={{
        ...user,
        stream,
      }}
    >
      <AppWrapper>
        {!user && <LoginView />}
        {user && stream && <Showcase onUserLogOut={handleLogOut} />}
      </AppWrapper>
    </LoginContext.Provider>
  );
};

export default App;
