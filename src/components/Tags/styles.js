import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  margin-bottom: 4px;
  padding: 8px;
  border-radius: 10px;

  background-color: ${ ({theme}) =>theme.COLORS.ORANGE};
  font-size: 16px;
  color: ${ ({theme}) =>theme.COLORS.WHITE} ;

`;