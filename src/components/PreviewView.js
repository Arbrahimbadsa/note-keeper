import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Edit, NavigateBefore, NavigateNext } from "@material-ui/icons";
const PreviewImage = styled.img`
  height: auto;
  width: auto;
  top: 0;
  z-index: 10;
`;
const PreviewWrapper = styled.div`
  height: 100%;
  width: 100vw;
  background: red;
  position: absolute;
  top: 0;
  transform: translateX(100%);
  transition: 0.3s;
`;
const Icon = styled.div`
  height: 50px;
  width: 50px;
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #000;
    opacity: 0.8;
  }
`;
const Control = styled.div`
  position: absolute;
  z-index: 50;
  top: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  align-items: flex-end;
  padding: 50px;
`;
const InputsHolder = styled.div`
  position: absolute;
  z-index: 150;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const NameInput = styled.input`
  height: 35px;
  width: 45%;
  border: none;
  border-bottom: 2px solid #fff;
  color: #fff;
  padding: 20px 5px;
  background: transparent;
  font-size: 20px;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.829);
  }
  @media screen and (max-width: 720px) {
    width: 65%;
    font-size: 15px;
  }
`;
const LoadingIndicator = styled.div`
  height: 30px;
  width: 180px;
  background: #1ecbe1;
  border-radius: 5px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 300;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
`;
const PreviewView = ({ image, onRetake, onShowEditor, onImageSave, isSaving }) => {
  const wrapper = useRef(null);
  const [tValue, setTvalue] = useState("0");
  const [noteName, setNoteName] = useState("");
  useEffect(() => (wrapper.current.style.transform = `translate(${tValue})`), [
    tValue,
  ]);
  return (
    <PreviewWrapper ref={wrapper}>
      {isSaving && <LoadingIndicator>Saving...</LoadingIndicator>}
      <PreviewImage src={image} />
      <InputsHolder>
        <NameInput
          value={noteName}
          onChange={(e) => setNoteName(e.currentTarget.value)}
          placeholder="Enter your note name"
        />
      </InputsHolder>
      <Control>
        {/* Back icon */}
        <Icon
          onClick={() => {
            setTvalue("-100%");
            setTimeout(() => {
              onRetake();
            }, 300); // unmount after 300ms so that the animation can play it's role..
          }}
        >
          <NavigateBefore />
        </Icon>
        {/* Edit icon */}
        <Icon onClick={onShowEditor}>
          <Edit />
        </Icon>
        {/* Forward icon */}
        <Icon onClick={() => onImageSave(noteName)}>
          <NavigateNext />
        </Icon>
      </Control>
    </PreviewWrapper>
  );
};
export default PreviewView;
