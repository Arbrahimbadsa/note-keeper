import React, { useEffect, useRef } from "react";
import { TEXT_COLOR, MAIN_COLOR, MAIN_COLOR_LIGHT } from "../assets/colors";
import TransitionView from "./TransitionView";
import styled from "styled-components";
const SearchviewContainer = styled.div`
  height: 100%;
  width: 100%;
  background: ${MAIN_COLOR};
  position: absolute;
  left: 0;
  z-index: 300;
  transition: transform 0.8s;
`;
const SearchInput = styled.input`
  height: auto;
  width: 100%;
  background: ${MAIN_COLOR_LIGHT};
  color: ${TEXT_COLOR};
  padding: 25px;
  font-size: 20px;
  border: none;
  &:focus {
    outline: none;
  }
`;
const SearchView = ({ onClose }) => {
  return (
    <TransitionView from="top" to="left" willLast="300ms" onClose={onClose}>
      {(handleClose) => (
        <SearchviewContainer>
          <SearchInput placeholder="Enter your keyword to search" />
          <button onClick={handleClose}>Close</button>
        </SearchviewContainer>
      )}
    </TransitionView>
  );
};
export default SearchView;
