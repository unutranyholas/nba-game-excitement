import React from "react";
import {Emoji, SubTitle, Title, HeaderContainer} from "./Basic";

/* eslint-disable jsx-a11y/accessible-emoji */

export const Header = () => <HeaderContainer>
  <SubTitle>NBA Game Excitement</SubTitle>
  <Title>
    Choose <Emoji role="img" aria-label="Ball">🏀</Emoji>&nbsp;games worth watching with&nbsp;
    <Emoji role="img" aria-label="Closed eyes">🙈</Emoji>&nbsp;no&nbsp;spoilers
  </Title>
</HeaderContainer>;
