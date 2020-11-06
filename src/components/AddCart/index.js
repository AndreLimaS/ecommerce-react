import React from "react";
import { BtnPrimary } from "../styles/btnPrimary";

export default function AddCart(props) {
  function addToCart(event) {
    window.localStorage.setItem("nome", event.innerText);
  }

  return (
    <BtnPrimary>
      <button onClick={({ target }) => addToCart(target)}>Add</button>
    </BtnPrimary>
  );
}
