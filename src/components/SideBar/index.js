import React from "react";
import { Container } from "./styles";
import logo from "../../assets/logo.png";

function index() {
  return (
    <Container>
      <img src={logo} alt="" />
      <ul>
        <li>
          <span>Home</span>
        </li>
        <li>
          <span>Products</span>
        </li>
        <li>
          <span>Card</span>
        </li>
      </ul>
    </Container>
  );
}

export default index;
