import React from "react";
import {NavLink} from "react-router-dom";
import {NavItem} from "./Basic";

export const LinkToGames = () => <NavItem position="left"><NavLink to="/">← Games</NavLink></NavItem>;
export const LinkToInfo = () => <NavItem position="right"><NavLink to="/info">Info</NavLink></NavItem>;
