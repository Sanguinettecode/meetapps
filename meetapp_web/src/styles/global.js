import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body, input, button {
  font: 14px Roboto, sans-serif;
}
html{
  min-height: 100%;
}
html, body, #root {
  height: auto;
}

button {
  cursor: pointer;
}
body {
  background: linear-gradient(180deg, #22202C 0%, #402845 100%) no-repeat center;
  -webkit-font-smoothing: antialiased !important
}

`;
