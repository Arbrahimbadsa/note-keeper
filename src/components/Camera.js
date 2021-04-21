import React, { useState, useRef, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import LoginContext from "../context";
const CameraWrapper = styled.div`
  height: 100%;
  width: 100vw;
`;
const Video = styled.video`
  postition: absolute;
  height: 100%;
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
const Camera = ({ onSnap }) => {
  const video = useRef(null);
  const { stream } = useContext(LoginContext);
  const getImage = (video) => {
    const c = document.createElement("canvas");
    c.height = window.innerHeight;
    c.width = window.innerWidth;
    const ctx = c.getContext("2d");
    ctx.drawImage(video, 0, 0, c.width, c.height);
    return c.toDataURL();
  };
  useEffect(() => {
    video.current.srcObject = stream;
  }, [stream]);
  const snap = () => {
    const photo = getImage(video.current);
    const img = document.createElement("img");
    img.src = photo;
    onSnap && onSnap({ height: img.height, width: img.width, photo });
  };
  return (
    <CameraWrapper>
      <Video playsInline autoPlay ref={video} />
      <Button onClick={snap} />
    </CameraWrapper>
  );
};
Camera.propTypes = {
  onSnap: PropTypes.func,
};
export default Camera;
