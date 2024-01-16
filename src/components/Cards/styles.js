import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${ ({theme}) =>theme.COLORS.BACKGROUND_700};
  border: none;
  border-radius: 10px;

  padding: 20px;
  margin-bottom: 16px;

  >h1{
    flex: 1;
    
    text-align: left;

    color: ${ ({theme}) =>theme.COLORS.WHITE};
    font-weight: 700;
    font-size: 24px;
  }

  >footer{
    width: 100%;
    display: flex;
    gap: 5px;
    margin-top: 20px;
  }
`;