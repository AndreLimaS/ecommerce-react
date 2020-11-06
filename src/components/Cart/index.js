import React from "react";
import {
  Container,
  ListPodruct,
  CardDetails,
  LabelNumber,
  Title,
  FooterCart,
} from "./styles";
import { NavLink } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import picProduct1 from "../../assets/m1.jpg";

export default function Cart() {
  const [qtd, setQtd] = React.useState(1);
  const [price, setPrice] = React.useState(300);

  return (
    <>
      <Container>
        <Title>
          <h1>Shopping Cart</h1>
        </Title>
        <ListPodruct>
          <img src={picProduct1} alt="" />
          <ul>
            <li>
              <h3>Mochila</h3>
            </li>
            <li>
              <p>#434243</p>
            </li>
          </ul>
          <LabelNumber>
            <RemoveIcon className="iconClass" onClick={() => setQtd(qtd - 1)} />
            <p>{qtd}</p>
            <AddIcon className="iconClass" onClick={() => setQtd(qtd + 1)} />
          </LabelNumber>
          <span>R$ {price * qtd}</span>
          <CloseIcon className="iconClass" />
        </ListPodruct>
        <FooterCart>
          <NavLink to="/">
            <span> ← Continue Shopping</span>
          </NavLink>
          <span>
            <span>Subtotal:</span> R$ {price * qtd}
          </span>
        </FooterCart>
        <CardDetails>
          <h3>Card Type</h3>
        </CardDetails>
      </Container>
    </>
  );
}
