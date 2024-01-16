import styled from "styled-components";

import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
   padding: 0 136px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   position: relative;

  >h1{
    font-size: 38px;
    color: ${ ({theme}) =>theme.COLORS.ORANGE};
    padding-bottom: 10px;
  }

  >p{
    font-size: 18px;
    padding-bottom: 20px;
    color: ${ ({theme}) =>theme.COLORS.GRAY_100};
  }

  >h2{
    font-size: 25px;
    padding-bottom: 30px;
  }

  >a{
    position: absolute;
    font-size: 18px;
    color: ${ ({theme}) =>theme.COLORS.ORANGE};

    bottom: 100px;
  }


`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;

