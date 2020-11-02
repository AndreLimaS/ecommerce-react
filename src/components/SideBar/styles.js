import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin-top: 10rem;

  img {
    margin-bottom: 5rem;
    width: 100px;
  }

  ul {
    font-size: 1rem;
    text-align: left;
    padding: 0 10vw;
  }

  li {
    height: 2rem;
    font-weight: 600;
    cursor: pointer;
  }

  span {
    width: 100%;
    display: block;
    position: relative;
  }

  span:hover {
    border-bottom: 3px solid rgba(0, 0, 0, 0.3);
    transition: 0.05s;
  }
`;
