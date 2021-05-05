import React, { useContext, useEffect, useState } from "react";
import { TEXT_COLOR, MAIN_COLOR, MAIN_COLOR_LIGHT } from "../assets/colors";
import TransitionView from "./TransitionView";
import styled from "styled-components";
import { Close } from "@material-ui/icons";
import firebase from "../firebase";
import LoginContext from "../context";
const SearchviewContainer = styled.div`
  height: 100%;
  width: 100%;
  background: ${MAIN_COLOR};
  position: absolute;
  left: 0;
  z-index: 300;
  transition: transform 0.8s;
`;
const SearchInputHolder = styled.div`
  max-height: 50px;
  width: 100%;
  display: flex;
  padding: 0 5px;
`;
const SearchInput = styled.input`
  height: auto;
  width: 100%;
  background: ${MAIN_COLOR_LIGHT};
  color: ${TEXT_COLOR};
  padding: 15px;
  font-size: 20px;
  border: none;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 720px) {
    jfont-size: 15px;
  }
`;
const IconWrapper = styled.div`
  color: #1ecbe1;
  cursor: pointer;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h3`
  color: #fff;
`;
const Info = styled.p`
  color: #fff;
`;
const SearchedItemsContainer = styled.div`
  padding: 20px;
`;
const FlatNote = styled.div`
  color: #fff;
  height: 35px;
  width: 100%;
  background: #fff;
  border-radius: 5px;
`;
const SearchView = ({ onClose }) => {
  const [notes, setNotes] = useState([]);
  const { uid } = useContext(LoginContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedItems, setSearchedItems] = useState([]);
  useEffect(() => {
    (async () => {
      const db = firebase.database();
      const imageRef = db.ref(`images/${uid}`);
      const data = await imageRef.once("value");
      setNotes(Object.values(data.val()));
    })();
  }, [uid]);
  useEffect(() => {
    if (searchTerm) {
      const items = notes.filter((val) => val.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      setSearchedItems(items);
    }
  }, [notes, searchTerm]);
  return (
    <TransitionView from="top" to="top" willLast="300ms" onClose={onClose}>
      {(handleClose) => (
        <SearchviewContainer>
          <SearchInputHolder>
            <SearchInput
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter your keyword to search"
            />
            <IconWrapper onClick={handleClose}>
              <Close />
            </IconWrapper>
          </SearchInputHolder>
          <SearchedItemsContainer>
            {searchTerm && searchedItems.length === 0 && (
              <Info>No items found.</Info>
            )}
            {searchedItems.length > 0 && searchTerm && (
              <Title>
                {" "}
                {searchedItems.length} note
                {searchedItems.length > 1 ? "s" : null} found
              </Title>
            )}
            {searchedItems.length > 0 &&
              searchTerm &&
              searchedItems.map((d) => (
                <FlatNote key={d.uid}>{d.name}</FlatNote>
              ))}
          </SearchedItemsContainer>
        </SearchviewContainer>
      )}
    </TransitionView>
  );
};
export default SearchView;
