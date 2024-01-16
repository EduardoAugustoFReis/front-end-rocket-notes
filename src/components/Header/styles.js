import styled from "styled-components";

import {Link} from "react-router-dom";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  justify-content: space-between;

  padding: 30px 50px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${ ({theme}) =>theme.COLORS.BACKGROUND_700};
  
  >svg{
    font-size: 25px;
    color: ${ ({theme}) =>theme.COLORS.GRAY_100};

    cursor: pointer;
  }

  >svg:hover{
    transform: scale(1.1);
  }

`;

export const Profile = styled(Link)`
  display: flex;

  color: ${ ({theme}) => theme.COLORS.WHITE};

  >img{
    width: 60px;
    height: 60px;
    border-radius: 50px;
    margin-right: 7px;
  }

  div{
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    >span{
      font-size: 14px;
    }

    >strong{
      font-size: 18px;
    }

  }
  
`;