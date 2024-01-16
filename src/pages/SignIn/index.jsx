import { useState } from "react";

import {FiMail, FiLock} from "react-icons/fi";
import {Link} from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import {Input} from "../../components/Input";
import {Button} from "../../components/Button";

import { Container, Form , Background} from "./styles";

export function SignIn(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {SignIn} = useAuth();
  
  function handleSignIn(){

    SignIn({email, password});

  }

  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        
        <p>Aplicação para salvar e gerenciar links úteis</p>
        
        <h2>Faça seu login</h2>

        <Input 
        icon={FiMail} 
        placeholder="E-mail" 
        type="text"
        onChange={e => setEmail(e.target.value)}
        />

        <Input 
        icon={FiLock} 
        placeholder="Senha" 
        type="password"
        onChange={e => setPassword(e.target.value)}
        />

        <Button title={"Entrar"} type="button" onClick={handleSignIn}/>

        <Link to={"/signup"}>Criar conta</Link>

      </Form>  

      <Background/>   
    </Container>
  )
}