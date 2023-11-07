import React, { useState } from "react";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";
const Container = styled.div`
  margin: 2rem 0 0 0.5rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 56px;
  overflow: hidden;

  ul {
    display: inline;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
`;

const List = styled.li`
  display: inline-flex;
  flex-direction: row;
  height: 32px;
  min-width: 12px;
  padding: 0px 12px;
  margin: 12px 12px 12px 0px;
  align-items: center;
  position: relative;
  outline-style: none;

  background-color: ${({ selected }) =>
    selected ? "black" :"rgba(0,0,0,0.05)"};
  border-radius: 8px;
  div {
    font-size: 1rem;
    font-weight: 500;
    font-family: roboto, Arial, sans-serif;
    line-height: 2rem;
    color: ${({ selected }) => (selected ? "white" : "black")};
  }
  &:not(.m-select){
  &:hover {
    background-color: rgba(0,0,0,0.15);
  }}
`;

function MenuFilter({ info, ...rest }) {
  const navigate = useNavigate();


  const [clicked, setClicked] = useState();
  const list = info.map((a, i) => {
    return (
      <List
        key={i}
        onClick={() => {
          setClicked(i);
          navigate(`/search/${a}`);
        }}
        className={clicked === i ? "m-select" : ""}
        selected={clicked === i ? true : false}
      ><div>{a}</div></List>
    );
  });

  return (
    <Container>
      <ul>{list}</ul>
    </Container>
  );
}
export default MenuFilter;
