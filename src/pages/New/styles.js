import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Main = styled.div`
  max-width: 600px;
  margin: 0 auto;

  >div:nth-child(1){
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding-top: 20px;
    padding-bottom: 20px;
    
    >h1{
      font-size: 38px;
    }

    >a{
      font-size: 18px;
      color: ${ ({theme}) =>theme.COLORS.GRAY_100};
    }
  }

  .marcadores{
    display: flex;
    gap: 5px;

    padding-bottom: 20px;
  }
`;