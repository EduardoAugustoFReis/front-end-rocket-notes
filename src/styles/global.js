import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${ ({theme}) =>theme.COLORS.BACKGROUND_900};
    color: ${ ({theme}) =>theme.COLORS.WHITE};
  }

  a{
    text-decoration: none;
  }

  a, button{
    cursor: pointer;
  }
  
  a:hover, button:hover{
    filter: brightness(0.9);
  }

`;