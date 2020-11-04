import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./styles";
import logo from "../../assets/logo.png";

function index() {
  return (
    <Container>
      <img src={logo} alt="" />
      <ul>
        <NavLink to="/">
          <li>
            <span>Home</span>
          </li>
        </NavLink>
        <li>
          <span>Products</span>
        </li>
        <NavLink to="cart">
          <li>
            <span>Card</span>
          </li>
        </NavLink>
      </ul>
    </Container>
  );
}

export default index;
