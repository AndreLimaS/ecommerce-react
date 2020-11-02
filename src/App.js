import React from "react";
import Globalstyle from "./styles/global";
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
        <Board />
      </Content>
      <div>Ecommerce</div>
      <Globalstyle />
    </Struct>
  );
}

export default App;
