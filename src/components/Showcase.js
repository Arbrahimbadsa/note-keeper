import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import LoginContext from "../context";
import CameraView from "./CameraView";
import NotesView from "./NotesView";
import PropTypes from "prop-types";
import "firebase/auth";
import { CameraAlt, ExitToApp, Search } from "@material-ui/icons";
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;
`;
const ShowcaseWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: #eee;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  font-family: "Montserrat", sans-serif;
`;
const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
  align-items: center;
  background: #fff;
  box-shadow: 0 1px 1.5px rgba(0, 0, 0, 0.1);
  user-select: none;
  position: fixed;
  z-index: 50;
  @media screen and (max-width: 720px) {
    justify-content: space-between;
  }
`;
const SiteName = styled.h3`
  color: #1ecbe1;
`;
const HeaderMeta = styled.div`
  display: flex;
  align-items: center;
`;
const IconWrapper = styled.div`
  color: #1ecbe1;
  cursor: pointer;
  margin-left: 10px;
`;
const Button = styled.button`
  border: none;
  color: #fff;
  background: #1ecbe1;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const Menu = styled.div`
  flex: 1 1 auto;
  display: flex;
  padding: 0 15px;
  @media screen and (max-width: 720px) {
    display: none;
  }
`;
const MenuItem = styled.div`
  margin: 0 10px;
  color: #6e6d7a;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: #1ecbe1;
  }
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 15px;
`;
const TakePicture = styled.div`
  height: 50px;
  width: 50px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: #1ecbe1;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
`;
const CircledImage = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const SearchContainer = styled.div`
  display: flex;
  padding: 10px;
  margin-top: 60px;
`;
const SearchInput = styled.input`
  height: 35px;
  background: #fff;
  flex: 1;
  border: none;
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 1.5px rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
  }
`;

const Showcase = ({ onUserLogOut }) => {
  const user = useContext(LoginContext);
  const [showCamera, setShowCamera] = useState(false);
  const [animeDone, setAnimeDone] = useState(false);
  const handleTakePicture = () => {
    setShowCamera(!showCamera);
  };
  const handleHideCamera = (refresh) => {
    setAnimeDone(false);
    setTimeout(() => {
      setShowCamera(!showCamera);
    }, 350);
  };

  return (
    <Wrapper>
      {showCamera && <CameraView onCameraHide={handleHideCamera} />}
      {!animeDone && (
        <ShowcaseWrapper>
          <HeaderContainer>
            <SiteName>Note Keeper</SiteName>
            <Menu>
              <MenuItem>Bangla</MenuItem>
              <MenuItem>English</MenuItem>
              <MenuItem>Math</MenuItem>
              <MenuItem>Chemistry</MenuItem>
              <MenuItem>Biology</MenuItem>
              <MenuItem>Physics</MenuItem>
              <MenuItem>I&Ct</MenuItem>
            </Menu>
            <HeaderMeta>
              <CircledImage src={user && user.photoURL} />
              <IconWrapper>
                <Search />
              </IconWrapper>
              <IconWrapper onClick={onUserLogOut}>
                <ExitToApp />
              </IconWrapper>
            </HeaderMeta>
          </HeaderContainer>
          {/* <SearchContainer>
            <SearchInput placeholder="Enter keyword i.e. integration, straight line.." />
            <Button>Search</Button>
          </SearchContainer> */}
          <NotesView />
          <TakePicture onClick={handleTakePicture}>
            <CameraAlt />
          </TakePicture>
        </ShowcaseWrapper>
      )}
    </Wrapper>
  );
};
Showcase.propTypes = {
  onUserLogOut: PropTypes.func.isRequired,
};
export default Showcase;
