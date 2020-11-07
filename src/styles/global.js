import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    
    min-height: 100vh;
  }
  body {
    font: 14px 'Roboto', sans-serif;
    background: #ecf1f8;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }
  ul {
    list-style: none;
  }
  button {
    border:none;
  }
  a{
    text-decoration: none;
    color: #333;
  }
`;
