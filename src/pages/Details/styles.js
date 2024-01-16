import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Main = styled.div`

  max-width: 500px;
  margin: 0 auto;
  position: relative;

  padding-top: 20px;

  .text-button{
    position: absolute;
    right: 10px;
  }

  >h1{
    font-size: 38px;
    padding-top: 30px;
    padding-bottom: 20px;
  }
  >p{
    font-size: 18px;
    text-align: left;
    padding-bottom: 15px;
  }

  .links{
    display: flex;
    flex-direction: column;
    width: fit-content;
    
    padding-bottom: 10px;

    a{
      font-size: 20px;
      color: ${ ({theme}) =>theme.COLORS.GRAY_100};
    }
  }

 .tags{
  display: flex;
  gap: 5px;
  padding-bottom: 20px;
 }

 .return-button{
  padding-top: 40px;
 }

`;
export const Links = styled.ul`
  list-style: none;

  >li{
    margin-top: 12px;
    
    a{
      color: ${ ({theme}) => theme.COLORS.WHITE};
      font-size: 16px;
    }
  }
`;