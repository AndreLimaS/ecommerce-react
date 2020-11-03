import React, { useState } from "react";
import AddCart from "../AddCart/index";

import { Container, Listyle, Thumbs } from "./styles";

import picProduct1 from "../../assets/m1.jpg";
import picProduct2 from "../../assets/m2.jpg";
import picProduct3 from "../../assets/m3.jpg";
import picProduct4 from "../../assets/m4.jpg";

export default function Board() {
  const [state, setState] = useState(picProduct1);

  return (
    <>
      <Container>
        <img src={state} alt="" />
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
            <img
              src={picProduct1}
              alt=""
              onClick={({ target }) => setState(target.src)}
            />
            <img
              src={picProduct2}
              alt=""
              onClick={({ target }) => setState(target.src)}
            />
            <img
              src={picProduct3}
              alt=""
              onClick={({ target }) => setState(target.src)}
            />
            <img
              src={picProduct4}
              alt=""
              onClick={({ target }) => setState(target.src)}
            />
          </Thumbs>
        </ul>
        <AddCart />
      </Container>
    </>
  );
}
