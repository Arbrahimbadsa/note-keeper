import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Lightbox } from "react-modal-image";
import firebase from "../firebase";
import LoginContext from "../context";
import { Delete } from "@material-ui/icons";
const NotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: auto;
  user-select: none;
  padding-top: 66px;
`;
const NoteControlContainer = styled.div`
  height: auto;
  width: 100%;
  position: absolute;
  top: 0;
  opacity: 0;
`;
const IconWrapper = styled.div`
  height: auto;
  width: auto;
  padding: 5px;
  color: #1ecbe1;
`;
const NoteName = styled.p`
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
`;
const Note = styled.div`
  height: 200px;
  flex-grow: 1;
  margin: 2px;
  background: #fff;
  cursor: pointer;
  position: relative;
  &:hover {
    opacity: 0.8;
  }
  &:hover ${NoteName} {
    opacity: 1;
  }
  &:hover ${NoteControlContainer} {
    opacity: 1;
  }
`;
const NoteImage = styled.img`
  height: 200px;
  object-fit: cover;
  max-width: 100%;
  min-width: 100%;
  vertical-align: bottom;
`;
const Svg = styled.svg`
  height: 45px;
  width: 45px;
  stroke: blue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Circle = styled.circle`
  stroke-dasharray: 180;
  stroke-dashoffset: 0;
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
  @keyframes turn {
    0% {
      stroke-dashoffset: 180;
    }

    50% {
      stroke-dashoffset: 45;
      transform: rotate(135deg);
    }

    100% {
      stroke-dashoffset: 180;
      transform: rotate(360deg);
    }
  }
  -webkit-animation: turn 1.35s ease-in-out infinite;
  animation: turn 1.35s ease-in-out infinite;
`;
const Info = styled.p`
  height: auto;
  width: 100%;
  padding: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  color: gray;
`;

////////////////// Firebase Refs /////////////////////
const db = firebase.database();

const NotesView = ({ onCount }) => {
  const [showLightbox, setShowLighbox] = useState(false);
  const [lightboxData, setLightboxData] = useState(null);
  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [noImageFound, setNoImageFound] = useState(false);
  const [noteCount, setNoteCount] = useState(0);
  const { uid } = useContext(LoginContext);
  const handleShowLightbox = (data) => {
    setShowLighbox(!showLightbox);
    setLightboxData(data);
  };
  const hideLightBox = () => {
    setShowLighbox(!showLightbox);
  };
  const handleDelete = ({ uid: imgId }) => {
    const imageRef = db.ref(`images/${uid}/${imgId}`);
    setImageData(data => data.filter(v => v.uid !== imgId));
    imageRef.set(null);
  };
  useEffect(() => {
    const imagesRef = db.ref(`images/${uid}`);
    setImageData([]);
    imagesRef.on("child_added", (snap) => {
      const val = snap.val();
      console.log(val);
      setImageData((data) => [...data, val]);
      setNoteCount((count) => count + 1);
      setIsLoading(false);
    });
  }, [uid]);
  useEffect(() => {
    const imagesRef = db.ref(`images/${uid}`);
    imagesRef.once("value").then((data) => {
      if (!data.exists()) {
        setIsLoading(false);
        setNoImageFound(true);
      } else {
        setNoImageFound(false);
      }
    });
  }, [uid, imageData]);
  useEffect(() => {
    onCount(noteCount);
  }, [noteCount, onCount]);

  return (
    <NotesContainer>
      {noImageFound && <Info>No image found, please take one.</Info>}
      {isLoading && (
        <Svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <Circle
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            cx="33"
            cy="33"
            r="25"
          ></Circle>
        </Svg>
      )}
      {imageData &&
        !isLoading &&
        imageData.map((d) => (
          <Note>
            <NoteImage
              src={d && d.image}
              onClick={() => handleShowLightbox(d)}
            />
            <NoteName onClick={() => handleShowLightbox(d)}>
              {d && d.name}
            </NoteName>
            <NoteControlContainer>
              <IconWrapper onClick={() => handleDelete(d)}>
                <Delete />
              </IconWrapper>
            </NoteControlContainer>
          </Note>
        ))}
      {showLightbox && lightboxData && (
        <Lightbox
          large={lightboxData.image}
          medium={lightboxData.image}
          hideDownload={true}
          alt={lightboxData.name}
          showRotate={true}
          onClose={hideLightBox}
        />
      )}
    </NotesContainer>
  );
};
export default NotesView;
