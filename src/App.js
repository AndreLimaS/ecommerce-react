import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Globalstyle from "./styles/global";
import Products from "./components/Products/index";
import { Struct, Header, MenuBar, Content } from "./components/styles/styles";

import SideBar from "./components/SideBar/index";
import Board from "./components/Board/index";
import Cart from "./components/Cart/index";

function App() {
  return (
    <BrowserRouter>
      <Struct>
        <Header />
        <MenuBar>
          <SideBar />
        </MenuBar>
        <Content>
          <Routes>
            <Board />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Products />} />
          </Routes>
        </Content>
        <Globalstyle />
      </Struct>
    </BrowserRouter>
  );
}

export default App;
