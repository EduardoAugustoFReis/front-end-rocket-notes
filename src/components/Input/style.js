import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  
  margin-bottom: 10px;
  
  border-radius: 10px;

  background-color: ${ ({theme}) =>theme.COLORS.BACKGROUND_700};

  >input{
    width: 100%;
    height: 56px;

    padding: 12px;

    outline: none;
  
    border-radius: 10px;
    border: none;
    background-color: ${ ({theme}) =>theme.COLORS.BACKGROUND_700};
    color:  ${ ({theme}) =>theme.COLORS.WHITE};
    
    font-size: 16px;

    &:placeholder{
      color:  ${ ({theme}) =>theme.COLORS.GRAY_100};
    }

  }

  >svg{
      margin-left: 5px;
    }

`;