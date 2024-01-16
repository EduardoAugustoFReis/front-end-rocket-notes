import { useNavigate } from "react-router-dom";

import { Container, Profile } from "./styles";

import {useAuth} from "../../hooks/auth";

import {AiOutlinePoweroff} from "react-icons/ai";

import avatarPlaceHolder from "../../assets/avatar_placeholder.svg";

import { api } from "../../services/api";


export function Header(){

  const {signOut, user} =  useAuth();
  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;


  function handleSignOut(){
    navigate("/");
    signOut();
  }

  return(
    <Container>

      <Profile to={"/profile"}>

      <img src={avatarUrl} alt="Foto do usuário" />
      
      <div>
      <span>Bem vindo</span>
      
      <strong>{user.name}</strong>
      </div>

      </Profile>

      <AiOutlinePoweroff onClick={handleSignOut}/>

    </Container>
  )
}