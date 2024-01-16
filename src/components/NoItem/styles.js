import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color:  ${ ({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700} ;
  
  color: ${ ({theme}) =>theme.COLORS.GRAY_100};
 
  border:  ${ ({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"} ;

  margin-bottom: 15px;
  border-radius:10px;

  padding-right: 16px;

  >button{
    border: none;
    background: none;
  }

  .button-add{
    color: ${ ({theme}) =>theme.COLORS.ORANGE};
    font-size: 20px;
  }

  .button-delete{
    color: ${ ({theme}) =>theme.COLORS.RED};
    font-size: 20px;
  }

  >input{
    height: 56px;
    width: 100%;  
    padding: 12px;
    
    font-size: 16px;
    color: ${ ({theme}) =>theme.COLORS.WHITE};

    background: transparent;
    border: none;
    
    &&placeholder{
      color: ${ ({theme}) =>theme.COLORS.GRAY_100};
    }

  }
`;