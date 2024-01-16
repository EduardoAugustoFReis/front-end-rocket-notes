import styled from "styled-components";

import {Link} from "react-router-dom";

export const Container= styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas: 
  "brand header"
  "menu content"
  "menu content"
  "newnote content";

  background-color: ${ ({theme}) =>theme.COLORS.BACKGROUND_800};
`; 

export const Brand= styled.div`
  grid-area: brand;

  background-color: ${ ({theme}) =>theme.COLORS.BACKGROUND_900};

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${ ({theme}) =>theme.COLORS.BACKGROUND_700};
  
  h1{
    color: ${ ({theme}) =>theme.COLORS.ORANGE};
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    padding-top: 39px;
  }

`;

export const Menu= styled.div`
  grid-area: menu;
  
  display: flex;
  flex-direction: column;
  
  background-color: ${ ({theme}) =>theme.COLORS.BACKGROUND_900};
  
  text-align: center;
  padding-top: 20px;

  gap: 10px;

  >li{
    list-style: none;
  }


`;


export const Content= styled.div`
  grid-area: content;

  padding: 24px 64px 64px 12px;
`;

export const NewNote= styled(Link)`
  grid-area: newnote;
  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: ${ ({theme}) =>theme.COLORS.ORANGE};

  font-size: 16px;
  color: ${ ({theme}) =>theme.COLORS.BACKGROUND_900} ;

  svg{
    font-size: 16px;
    margin-right: 3px;
  }

`;


