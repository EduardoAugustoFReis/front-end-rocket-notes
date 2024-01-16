import { useState } from "react";
import {FiMail, FiLock, FiUser} from "react-icons/fi";
import {Link, useNavigate} from "react-router-dom";

import { api } from "../../services/api";  

import {Input} from "../../components/Input";
import {Button} from "../../components/Button";

import { Container, Form , Background} from "./styles";

export function SignUp(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(){

    if(!name || !email || !password){
      return alert("Preencha todos os campos!")
    }

    api.post("/users", { name, email, password })
    .then(() => {
      console.log("Usuário cadastrado com sucesso!");
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    })
    .catch( error => {
      if(error.response) {
        alert(error.response.data.message);
      }else {
        alert("Não foi possível cadastrar.")
      }
    })
  }

  return(
    <Container>
      
      <Background/>   
      
       <Form>
        <h1>Rocket Notes</h1>
        
        <p>Aplicação para salvar e gerenciar links úteis</p>
        
        <h2>Criar sua conta</h2>

        <Input 
        icon={FiUser} 
        placeholder="Nome" 
        type="text"
        onChange={e => setName(e.target.value)}
        />

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

        <Button title={"Cadastrar"} type="button" onClick={handleSignUp}/>

        <Link to={"/"} >Voltar para o login</Link>

      </Form>  


    </Container>
  )
}