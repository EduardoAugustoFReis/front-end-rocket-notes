import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;
  
  margin-bottom: 5px;
  
  border: none;
  border-radius: 10px;
  
  background-color: ${ ({theme}) =>theme.COLORS.ORANGE};

  font-size: 18px;
  color:  ${ ({theme}) =>theme.COLORS.BACKGROUND_900};

`;