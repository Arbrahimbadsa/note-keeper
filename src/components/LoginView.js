import React from "react";
import styled from "styled-components";
import firebase from "../firebase";
import "firebase/auth";
import LoginBg from "../assets/login-bg.jpg";
const LoginViewWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${LoginBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  user-select: none;
`;
const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.65);
`;
const Title = styled.div`
  font-family: "Montserrat", sans-serif;
  color: #fff;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`;
const TitleName = styled.h3`
  flex: 0 0 auto;
  margin: 0 10px;
  font-weight: 500;
  font-size: 1.8rem;
  @media screen and (max-width: 720px) {
    font-size: 1rem;
  }
`;
const IconHolder = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;
const Icon = styled.div`
  height: auto;
  width: auto;
`;
const Line = styled.div`
  height: 3px;
  width: 20%;
  background: #fff;
  border-radius: 5px;
`;
const LoginView = () => {
  const handleLoginWithGoogle = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      alert(error.message);
    }
  };
  const handleLoginWithGithub = async () => {
    try {
      const provider = new firebase.auth.GithubAuthProvider();
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <LoginViewWrapper>
      <Backdrop>
        <Title>
          <Line />
          <TitleName>Login with</TitleName>
          <Line />
        </Title>
        <IconHolder>
          <Icon onClick={handleLoginWithGoogle}>
            <ion-icon name="logo-google"></ion-icon>
          </Icon>
          <Icon onClick={handleLoginWithGithub}>
            <ion-icon name="logo-github"></ion-icon>
          </Icon>
        </IconHolder>
      </Backdrop>
    </LoginViewWrapper>
  );
};
export default LoginView;
