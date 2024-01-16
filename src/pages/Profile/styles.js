import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${ ({theme}) =>theme.COLORS.BACKGROUND_800};

  header{
    width: 100%;
    height: 144px;

    background-color: ${ ({theme}) =>theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;
    padding-left: 100px;
    >a{
    svg{
      font-size: 25px;
      color: ${ ({theme}) =>theme.COLORS.GRAY_100};
      }
    }
  }

`;

export const Form = styled.form`
  max-width: 340px;

  margin: 30px auto 0;

  >div:nth-child(3){
    margin-bottom: 20px;
  }
  
`;

export const Avatar = styled.div`

  width: 200px;
  height: 200px;
  position: relative;

  margin: -80px auto 30px;


  img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  >label{
    width: 48px;
    height: 48px;

    background-color: ${ ({theme}) =>theme.COLORS.ORANGE};

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    bottom: 7px;
    right: 7px;
    
    cursor: pointer;

    >input{
      display: none;
    }

    svg{
      width: 20px;
      height: 20px;
    }

  }

`;