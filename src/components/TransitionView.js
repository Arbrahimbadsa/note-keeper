import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: transparent;
  position: absolute;
  z-index: 300;
`;
const TransitionView = ({ from, to, willLast, onClose, children }) => {
  const containerRef = useRef(null);
  const [tValue, setTvalue] = useState(`translate(0)`);
  useEffect(() => {
    containerRef.current.style.transform = tValue;
  }, [tValue]);
  const handleClose = () => {
    switch (to) {
      case "left":
        setTvalue(`translateX(-100%)`);
        break;
      case "right":
        setTvalue(`translateX(100%)`);
        break;
      case "top":
        setTvalue(`translateY(-100%)`);
        break;
      case "bottom":
        setTvalue(`translateY(100%)`);
        break;
      default:
        setTvalue(`translate(0)`);
        break;
    }
    setTimeout(() => {
      onClose();
    }, parseInt(willLast));
  };
  return (
    <Container
      ref={containerRef}
      style={{
        transform:
          from === "left"
            ? `translateX(-100%)`
            : from === "right"
            ? `translateX(100%)`
            : from === "top"
            ? `translateY(-100%)`
            : from === "bottom"
            ? `translateY(100%)`
            : null,
        transition: `transform ${willLast}`,
      }}
    >
      {children(handleClose)}
    </Container>
  );
};
export default TransitionView;
