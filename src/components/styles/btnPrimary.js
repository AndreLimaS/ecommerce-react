import styled from "styled-components";

export const BtnPrimary = styled.div`
  justify-content: end;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to bottom right, #d4548c, #4d8ed0);
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.3rem;
    width: 7rem;
    height: 5vh;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    box-shadow: 0 0 0 1px #d4548c;
    transform: scale(1.05);
  }
`;
