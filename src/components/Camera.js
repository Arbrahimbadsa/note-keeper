import React, { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";
const CameraWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
const Video = styled.video`
  postition: absolute;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  object-fit: fill;
  pointer-events: none;
`;
const Button = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    border: 5px solid gray;
    opacity: 0.8;
  }
`;
const Camera = ({ onSnap, onShowPreview }) => {
  const video = useRef(null);
  const getImage = (video) => {
    const c = document.createElement("canvas");
    c.height = window.innerHeight;
    c.width = window.innerWidth;
    const ctx = c.getContext("2d");
    ctx.drawImage(video, 0, 0, c.width, c.height);
    return c.toDataURL();
  };
  useEffect(() => {
    (async () => {
      try {
        const facingMode = await (await navigator.mediaDevices.enumerateDevices()).length <=1 ? 'user' : 'environment';
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode
          }
        });
        video.current.srcObject = stream;
      } catch (error) {
        //..
      }
    })();
  }, []);
  const snap = () => {
    const photo = getImage(video.current);
    onSnap && onSnap(photo);
  };
  return (
    <>
      <CameraWrapper>
        <Video playsInline autoPlay ref={video} />
        <Button onClick={snap} />
      </CameraWrapper>
    </>
  );
};
export default Camera;
