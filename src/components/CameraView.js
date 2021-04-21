import Camera from "../components/Camera";
import Editor from "../components/Editor";
import styled from "styled-components";
import { useContext, useEffect, useRef, useState } from "react";
import { v4 as uuiv4 } from "uuid";
import firebase from "../firebase";
import LoginContext from "../context";
import PreviewView from "./PreviewView";
import { ArrowBack } from "@material-ui/icons";
const CameraViewWrapper = styled.div`
  height: 100%;
  width: 100vw;
  overflow: hidden;
  position: absolute;
  transform: translateX(100%);
  transition: 0.3s;
  z-index: 150;
`;
const HideCamera = styled.div`
  height: 50px;
  width: 50px;
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  color: #fff;
`;

////////////////// Firebase Refs /////////////////////
const db = firebase.database();

const CameraView = ({ onCameraHide, stream }) => {
  const wrapper = useRef(null);
  const [tValue, setTvalue] = useState("0");
  const [showPreview, setShowPreview] = useState(false);
  const [image, setImage] = useState(null);
  const [showEditor, setShowEditor] = useState(false);
  const [data, setData] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const { uid: userId } = useContext(LoginContext);
  const handleSnap = (data) => {
    setImage(data.photo);
    setData(data);
    setShowPreview(true);
  };
  const handleRetake = () => {
    setShowPreview(false);
  };
  const handleOnProceed = (croppedImage) => {
    setImage(croppedImage);
    setShowEditor(false);
    setShowPreview(true);
  };
  const handleShowEditor = () => {
    setShowEditor(true);
    setShowPreview(false);
    setImage(data.photo);
  };
  const handleEditorCancel = () => {
    setShowEditor(false);
    setShowPreview(true);
  };
  useEffect(() => {
    wrapper.current.style.transform = `translateX(${tValue})`;
  }, [tValue]);
  const handleImageSave = (noteName) => {
    const imageUid = uuiv4();
    const imgUrl = `images/${userId}/${imageUid}`;
    const imagesRef = db.ref(imgUrl);
    const imageData = {
      name: noteName,
      image: image,
      uid: imageUid,
    };
    setIsSaving(true);
    imagesRef.set(imageData, () => {
      onCameraHide();
      setIsSaving(false);
    });
  };
  return (
    <CameraViewWrapper ref={wrapper}>
      <Camera onSnap={handleSnap} />
      <HideCamera
        onClick={() => {
          setTvalue("-100%");
          onCameraHide();
        }}
      >
        <ArrowBack />
      </HideCamera>
      {showPreview && (
        <PreviewView
          isSaving={isSaving}
          image={image}
          onRetake={handleRetake}
          onShowEditor={handleShowEditor}
          onImageSave={handleImageSave}
        />
      )}
      {showEditor && (
        <Editor
          image={image}
          onProceed={handleOnProceed}
          onCancel={handleEditorCancel}
        />
      )}
    </CameraViewWrapper>
  );
};

export default CameraView;
