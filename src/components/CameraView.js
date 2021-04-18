import Camera from "../components/Camera";
import Editor from "../components/Editor";
import styled from "styled-components";
import { useContext, useState } from "react";
import { v4 as uuiv4 } from "uuid";
import firebase from "../firebase";
import LoginContext from "../context";
const PreviewImage = styled.img`
  height: auto;
  width: auto;
  top: 0;
  z-index: 10;
`;
const Button = styled.button`
  height: 30px;
  width: 80px;
  border-radius: 5px;
  background: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const PreviewWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;
const Control = styled.div`
  position: absolute;
  bottom: 0;
  padding: 25px 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 20;
`;
const HideCamera = styled.div`
  height: 50px;
  width: 50px;
  position: absolute;
  top: 20px;
  right: 20px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;

////////////////// Firebase Refs /////////////////////
const db = firebase.database();

const CameraView = ({ onCameraHide }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [image, setImage] = useState(null);
  const [showEditor, setShowEditor] = useState(false);
  const [data, setData] = useState(null);
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
  const handleImageSave = () => {
    const imageUid = uuiv4();
    const imgUrl = `images/${userId}/${imageUid}`;
    const imagesRef = db.ref(imgUrl);
    const imageData = {
      name: "Test name for image.",
      image: image,
      uid: imageUid,
    };
    imagesRef.set(imageData, () => {
      onCameraHide();
    });
  };
  return (
    <div className="camera-view">
      <Camera onSnap={handleSnap} />
      <HideCamera onClick={onCameraHide}>Hide</HideCamera>
      {showPreview && (
        <PreviewWrapper>
          <PreviewImage src={image} height={data.height} width={data.width} />
          <Control>
            <Button onClick={handleRetake}>Retake</Button>
            <Button onClick={handleShowEditor}>Edit</Button>
            <Button onClick={handleImageSave}>Proceed</Button>
          </Control>
        </PreviewWrapper>
      )}
      {showEditor && (
        <Editor
          image={image}
          onProceed={handleOnProceed}
          onCancel={handleEditorCancel}
        />
      )}
    </div>
  );
};

export default CameraView;
