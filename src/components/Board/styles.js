import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  padding: 0 4rem 4rem;

  img {
    width: 200px;
  }

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
    cursor: pointer;
    transition: 0.3s;
  }

  img:hover {
    transform: scale(1.2);
  }
`;
