import React from "react";
import AddCart from "../AddCart/index";
import { listproducts } from "../../services/api";
import { Container, Listyle, Thumbs } from "./styles";

export default function Board() {
  const [products, setProducts] = React.useState(null);
  React.useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const response = await listproducts();
    setProducts(response);
  }

  if (products === null || products === "") return null;
  return (
    <>
      {products.map(({ id, name, images, price, sku }) => (
        <Container key={id}>
          <img src={images[0]} alt="" />
          <ul>
            <li>May 31, 2019</li>
            <Listyle>
              <li style={{ fontSize: "1.5rem" }}>{name}</li>
            </Listyle>

            <li>Order</li>
            <Listyle>
              <li>{sku}</li>
            </Listyle>

            <li>Price</li>
            <Listyle>
              <li>${price}</li>
            </Listyle>
            <p>Also i this order</p>
            <Thumbs>
              <img
                src={images[1]}
                alt=""
                // onClick={({ target }) => setState(target.src)}
              />
            </Thumbs>
          </ul>
          <AddCart />
        </Container>
      ))}
    </>
  );
}
