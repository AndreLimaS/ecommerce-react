import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr minmax(320px, 1fr);
  grid-template:
    "title title"
    "products  card"
    "footer card";

  .iconClass {
    cursor: pointer;
  }
`;

export const Title = styled.div`
  margin: 3rem;
  grid-area: title;
  max-height: 100px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 1rem;
`;

export const ListPodruct = styled.div`
  grid-area: products;
  display: flex;
  margin: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  align-items: center;
  justify-content: space-around;

  img {
    width: 120px;
    border-radius: 50%;
  }
  span {
    font-weight: bold;
  }
`;

export const LabelNumber = styled.div`
  display: flex;
  align-items: center;
  p {
    display: flex;
    width: 3rem;
    justify-content: center;
    border-radius: 5px;
    height: 2rem;
    border: 1px solid #e4e1df;
    align-items: center;
  }
`;

export const CardDetails = styled.div`
  background-color: #41434b;
  height: 50vh;
  margin: 1rem;
  border-radius: 8px;
`;

export const FooterCart = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0rem 3rem 3rem 3rem;
`;
