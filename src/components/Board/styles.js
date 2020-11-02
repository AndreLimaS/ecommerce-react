import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin-top: 6rem;
  padding: 4rem;

  h1 {
    font-size: 4rem;
    margin-bottom: 3rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
  img {
    width: 200px;
  }
`;

export const Products = styled.div`
  display: flex;
  max-width: 900px;

  ul {
    margin: 0 2rem;
  }
`;

export const Listyle = styled.div`
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

export const Thumbs = styled.div`
  display: flex;

  img {
    width: 60px;
    padding: 5px 0 0 8px;
  }
`;
