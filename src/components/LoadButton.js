import React from "react";
import {connect} from "react-redux";
import {fetchGames} from "../actions";

export const LoadButtonComponent = ({date, fetchGames}) => {
  return <button onClick={() => fetchGames({date})}>Load for {date}</button>;
};

export const LoadButton = connect(
  state => state,
  {fetchGames},
)(LoadButtonComponent);