import React, { useEffect, useState } from "react";
import styled from "styled-components";
import firebase from "../firebase";
import PropTypes from "prop-types";
import "firebase/auth";
const LoginViewWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginButton = styled.button`
  height: 35px;
  width: 200px;
  background: #1ecbe1;
  color: #fff;
  cursor: pointer;
  border: none;
  margin-bottom: 5px;
  border-radius: 20px;
  &:hover {
    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
      0 15px 40px rgba(166, 173, 201, 0.2);
  }
`;
const Input = styled.input`
  height: 35px;
  width: 30vw;
  min-width: 200px;
  background: #fff;
  border-radius: 20px;
  border: none;
  padding: 15px;
  margin: 0 0 10px 0;
  &:focus {
    outline: none;
  }
`;
const LoginView = ({ onSuccess }) => {
  const [user, setUser] = useState(null);
  const handleLoginWithGoogle = () => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const { user } = await firebase.auth().signInWithPopup(provider);
        setUser(user);
      });
  };
  const handleAnnonymousLogin = async () => {
    await firebase.auth().signInAnonymously();
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // login success
        onSuccess(user);
      } else {
        // logout
        onSuccess(null);
      }
    });
  }, [onSuccess]);
  return (
    <LoginViewWrapper>
      <Input placeholder="Enter your username" />
      <Input placeholder="Enter your password" />
      <LoginButton>Login</LoginButton>
      <LoginButton onClick={handleLoginWithGoogle}>
        Login With Google
      </LoginButton>
      <LoginButton onClick={handleAnnonymousLogin}>
        Login Annonymously
      </LoginButton>
    </LoginViewWrapper>
  );
};
LoginView.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};
export default LoginView;
