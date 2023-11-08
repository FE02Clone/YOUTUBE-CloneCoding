import React, { useState } from "react";
import styled from "styled-components";

import * as icon from "../icons/index";

const Container = styled.ul`
  padding: 0.5rem;
  width: 72px;
`;
const Iconbox = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0.4rem;

  text-align: center;

  & svg {
    padding: 0.7rem 0.7rem 0 0.7rem;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 11px;
  }
`;
const Text = styled.div`
  margin: 0.3rem;
  wiidth: 100%;
  font-size: 15px;
`;
const NavLeft = () => {
  const [clicked, setClicked] = useState();
  return (
    <>
      <div className="nav-left">
        <ul>
          <li className="nav-icon">
            <img src="/images/icon_total.jpg" alt="" />
          </li>
          <Container>
            <Iconbox
              key={1}
              onClick={() => {
                setClicked(1);
              }}
            >
              <div>
                {clicked === 1 ? (
                  <icon.Ic_home_selected></icon.Ic_home_selected>
                ) : (
                  <icon.Ic_home></icon.Ic_home>
                )}
              </div>
              <Text>홈</Text>
            </Iconbox>
            <Iconbox
              key={2}
              onClick={() => {
                setClicked(2);
              }}
            >
              <div>
                {clicked === 2 ? (
                  <icon.Ic_Shorts_selected></icon.Ic_Shorts_selected>
                ) : (
                  <icon.Ic_Shorts></icon.Ic_Shorts>
                )}{" "}
              </div>
              <Text>Shorts</Text>
            </Iconbox>
            <Iconbox
              key={3}
              onClick={() => {
                setClicked(3);
              }}
            >
              <div>
                {clicked === 3 ? (
                  <icon.Ic_Subscription_selected></icon.Ic_Subscription_selected>
                ) : (
                  <icon.Ic_Subscription></icon.Ic_Subscription>
                )}
              </div>
              <Text>구독</Text>
            </Iconbox>
            <Iconbox
              key={4}
              onClick={() => {
                setClicked(4);
              }}
            >
              <div>
                {clicked === 4 ? (
                  <icon.Ic_Me_selected></icon.Ic_Me_selected>
                ) : (
                  <icon.Ic_Me></icon.Ic_Me>
                )}
              </div>
              <Text>나</Text>
            </Iconbox>
          </Container>
        </ul>
      </div>
    </>
  );
};
export default NavLeft;
