import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import ReactCrop from "react-image-crop";
import styled from "styled-components";
import "react-image-crop/dist/ReactCrop.css";
const EditorWrapper = styled.div`
  height: 100%;
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: 20;
`;
const Button = styled.button`
  background: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 8px 10px;
  opacity: 0.9;
  margin-right: 5px;
  &:hover {
    opacity: 1;
  }
`;
const EditorControl = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  padding: 20px;
  user-select: none;
`;
const EditorView = ({ image, onProceed, onCancel }) => {
  const imgRef = useRef(null);
  const [crop, setCrop] = useState({
    x: 35,
    y: 35,
    unit: "%",
    width: 30,
    height: 30,
  });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const handleImageLoad = (img) => {
    imgRef.current = img;
  };
  const handleProceed = () => {
    if (croppedImage) onProceed(croppedImage);
    else onProceed(image);
  };
  useEffect(() => {
    if (!completedCrop || !imgRef.current) {
      return;
    }
    const canvas = document.createElement("canvas");
    const image = imgRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
    const croppedImage = canvas.toDataURL();
    setCroppedImage(croppedImage);
  }, [completedCrop]);
  return (
    <EditorWrapper>
      <ReactCrop
        src={image}
        onImageLoaded={handleImageLoad}
        crop={crop}
        onChange={(c) => setCrop(c)}
        onComplete={(c) => setCompletedCrop(c)}
      />
      <EditorControl>
        <Button onClick={handleProceed}>Proceed</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </EditorControl>
    </EditorWrapper>
  );
};
EditorView.propTypes = {
  image: PropTypes.string,
  onProceed: PropTypes.func,
  onCancel: PropTypes.func
};
export default EditorView;
