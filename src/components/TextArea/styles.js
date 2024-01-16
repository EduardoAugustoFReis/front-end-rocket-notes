import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  resize: none;

  margin-bottom: 20px;

  border: none;
  border-radius: 10px;

  padding: 10px;

  background-color: ${ ({theme}) =>theme.COLORS.BACKGROUND_700};
  color: ${ ({theme}) =>theme.COLORS.WHITE};
  font-size: 16px;

  &&placeholder{
  color: ${ ({theme}) =>theme.COLORS.GRAY_100};
  }

`;
