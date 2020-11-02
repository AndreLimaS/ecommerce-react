import styled from "styled-components";

export const Struct = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas:
    "header header"
    "menubar content";
`;

export const Header = styled.div`
  grid-area: header;
  background: black;
  height: 50px;
`;

export const MenuBar = styled.div`
  grid-area: menubar;
  background-color: #f2ede8;
  height: 100vh;
`;

export const Content = styled.div`
  grid-area: content;
  background-color: #f8f5f2;
  height: 100vh;
`;
