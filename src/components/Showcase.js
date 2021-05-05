import React, { useContext, useState } from "react";
import styled from "styled-components";
import LoginContext from "../context";
import CameraView from "./CameraView";
import NotesView from "./NotesView";
import SearchView from "./SearchView";
import PropTypes from "prop-types";
import "firebase/auth";
import { CameraAlt, Search } from "@material-ui/icons";
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
  background: #111c33;
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
  color: gray;
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
  background: #111c33;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
`;
const CircledImage = styled.img`
  height: ${(props) => props.dim}px;
  width: ${(props) => props.dim}px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const ProfileWrapper = styled.div`
  height: 300px;
  width: 300px;
  position: absolute;
  z-index: 250;
  top: 70px;
  right: 50px;
  background: #111c33;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 3.5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  @media screen and (max-width: 720px) {
    right: 5px;
  }
`;
const Text = styled.p`
  color: ${(props) => props.color};
  font-family: "Montserrat", sans-serif;
  font-weight: 450;
  margin-top: 8px;
  font-size: ${(props) => props.size}px;
`;
const Button = styled.div`
  height: auto;
  width: auto;
  background: #1ecbe1;
  color: #fff;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  margin-top: 35px;
  font-size: 15px;
  cursor: pointer;
  border: 2px solid #fff;
`;

const Showcase = ({ onUserLogOut }) => {
  const user = useContext(LoginContext);
  const [showCamera, setShowCamera] = useState(false);
  const [animeDone, setAnimeDone] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [noteCount, setNoteCount] = useState(0);
  const handleHideCamera = (refresh) => {
    setAnimeDone(false);
    setTimeout(() => {
      setShowCamera(!showCamera);
    }, 350);
  };
  const handleShowProfile = () => {
    setShowSearchInput(false);
    setShowProfile(!showProfile);
  };
  const handleNoteCount = (count) => setNoteCount(count);
  const handleShowSearchInput = () => {
    setShowSearchInput(!showSearchInput);
    setShowProfile(false);
  };
  const handleTakePicture = () => setShowCamera(!showCamera);
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
              <CircledImage
                dim={35}
                onClick={handleShowProfile}
                src={user && user.photoURL}
              />
              {/* Profile */}
              {showProfile && (
                <ProfileWrapper onBlur={handleShowProfile}>
                  <CircledImage dim={65} src={user && user.photoURL} />
                  <Text size={18} color="#fff">
                    {user && user.displayName}
                  </Text>
                  <Text size={14} color="gray">
                    {user && user.email}
                  </Text>
                  <Text color="gray" size={15}>
                    Notes: {noteCount === 0 ? "..." : noteCount}
                  </Text>
                  <Button onClick={onUserLogOut}>Logout</Button>
                </ProfileWrapper>
              )}
              <IconWrapper onClick={handleShowSearchInput}>
                <Search />
              </IconWrapper>
            </HeaderMeta>
          </HeaderContainer>
          {showSearchInput && (
            // <SearchContainer>
            //   <SearchInput placeholder="Enter keyword to search..." />
            // </SearchContainer>
            <SearchView onClose={handleShowSearchInput} />
          )}
          {/* Notes */}
          <NotesView onCount={handleNoteCount} />
          {/* Take pictur button */}
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
