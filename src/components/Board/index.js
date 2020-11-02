import React from "react";
import { Container, Products, Listyle, Thumbs } from "./styles";

import m1 from "../../assets/m1.jpg";
import m2 from "../../assets/m2.jpg";
import m3 from "../../assets/m3.jpg";
import m4 from "../../assets/m4.jpg";

function index() {
  return (
    <Container>
      <h1>Products</h1>
      <Products>
        <img src={m1} alt="" />
        <ul>
          <li>May 31, 2019</li>
          <Listyle>
            <li style={{ fontSize: "1.5rem" }}>Mochila</li>
          </Listyle>

          <li>Order #</li>
          <Listyle>
            <li>30004</li>
          </Listyle>

          <li>Price</li>
          <Listyle>
            <li>$324. 96</li>
          </Listyle>
          <p>Also i this order</p>
          <Thumbs>
            <img src={m1} alt="" />
            <img src={m2} alt="" />
            <img src={m3} alt="" />
            <img src={m4} alt="" />
          </Thumbs>
        </ul>
      </Products>
    </Container>
  );
}

export default index;
