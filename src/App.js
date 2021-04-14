import Camera from "./components/Camera";
import styled from "styled-components";
import { useEffect, useState } from "react";
const PreviewImage = styled.img`
  height: 100vh;
  width: 100vw;
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
  background: red;
`;
const Control = styled.div`
  position: absolute;
  bottom: 0;
  padding: 25px 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
function App() {
  const [showPreview, setShowPreview] = useState(false);
  const [image, setImage] = useState(null);
  const handleSnap = (imageSrc) => {
    setImage(imageSrc);
    setShowPreview(true);
  };
  const handleRetake = () => {
    setShowPreview(false);
  }
  return (
    <div className="App">
      <Camera onSnap={handleSnap} />
      {showPreview && (
        <PreviewWrapper>
          <PreviewImage src={image} />
          <Control>
            <Button onClick={handleRetake}>Retake</Button>
            <Button>Edit</Button>
            <Button>Proceed</Button>
          </Control>
        </PreviewWrapper>
      )}
    </div>
  );
}

export default App;
