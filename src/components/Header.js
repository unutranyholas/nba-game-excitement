import React from "react";
import connect from "react-redux/es/connect/connect";
import {unspoilAllGames} from "../actions";
import {Emoji, HeaderContainer, SubTitle, Title} from "./Basic";

/* eslint-disable jsx-a11y/accessible-emoji */

const monkeys = ["🐵", "🙊", "🙉"];

const MonkeyComponent = ({spoiledGamesCount, unspoilAllGames}) => {
  return <Emoji
    role="img"
    aria-label="Closed eyes"
    clickable={spoiledGamesCount > 0}
    onClick={() => unspoilAllGames()}
  >
    {spoiledGamesCount === 0 ? "🙈" : monkeys[spoiledGamesCount % monkeys.length]}
  </Emoji>;
};

export const Monkey = connect(
  ({spoiledGames}) => ({spoiledGamesCount: spoiledGames.length}),
  {unspoilAllGames},
)(MonkeyComponent);

export const Header = () => <HeaderContainer>
  <SubTitle>NBA Game Excitement</SubTitle>
  <Title>
    Choose <Emoji role="img" aria-label="Ball">🏀</Emoji>&nbsp;games worth watching with&nbsp;
    <Monkey />&nbsp;no&nbsp;spoilers
  </Title>
</HeaderContainer>;
