import React from "react";
import Globalstyle from "./styles/global";
import Products from "./components/Products/index";
import { Struct, Header, MenuBar, Content } from "./components/styles/styles";

import SideBar from "./components/SideBar/index";
import Board from "./components/Board/index";

function App() {
  return (
    <Struct>
      <Header />
      <MenuBar>
        <SideBar />
      </MenuBar>
      <Content>
        <Products />
        <Board />
        <Board />
      </Content>
      <Globalstyle />
    </Struct>
  );
}

export default App;
