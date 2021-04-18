import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { images } from "../data/images";
import { Lightbox } from "react-modal-image";
import firebase from "../firebase";
import LoginContext from "../context";
const NotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 15px;
  height: auto;
  user-select: none;
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

////////////////// Firebase Refs /////////////////////
const db = firebase.database();

const NotesView = () => {
  const [showLightbox, setShowLighbox] = useState(false);
  const [lightboxData, setLightboxData] = useState(null);
  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { uid } = useContext(LoginContext);
  const handleShowLightbox = (data) => {
    setShowLighbox(!showLightbox);
    setLightboxData(data);
  };
  const hideLightBox = () => {
    setShowLighbox(!showLightbox);
  };
  // fetch images from firebase database
  useEffect(() => {
    const fetchImages = async () => {
      const imagesRef = db.ref(`images/${uid}`);
      const data = await imagesRef.once("value");
      if (data.exists()) {
        // if data exists in database
        const val = data.val();
        const values = Object.values(val);
        setImageData(values);
      }
      setIsLoading(false);
    };
    fetchImages();
  }, [uid]);
  return (
    <NotesContainer>
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
          <Note onClick={() => handleShowLightbox(d)}>
            <NoteImage src={d && d.image} />
            <NoteName>{d && d.name}</NoteName>
          </Note>
        ))}
      {showLightbox && lightboxData && (
        <Lightbox
          large={lightboxData.image}
          medium={lightboxData.image}
          hideDownload={true}
          alt={lightboxData.name}
          onClose={hideLightBox}
        />
      )}
    </NotesContainer>
  );
};
export default NotesView;
