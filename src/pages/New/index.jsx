import { useState } from "react";

import { Container,Main} from "./styles";

import {Header} from "../../components/Header";
import {Section} from "../../components/Section";
import {Input} from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoItem } from "../../components/NoItem";
import {Button} from "../../components/Button";

import {api} from "../../services/api";

import {Link} from "react-router-dom";

export function New(){

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink])
    setNewLink("");
  }

  function handleRemoveLink(deleted){ // gerar uma lista nova sem o link desejado
    setLinks(prevState => prevState.filter(link => link !== deleted));
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTags(deleted){
    setTags(prevState => prevState.filter(tags => tags !== deleted));
  }

  async function handleNewNote(){

    // validações para os campos
    
    if(!title){
      return alert("Você deixou o campo do título vazio.");
    }

    if(newLink){
      return alert("Você deixou um link no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio");
    }

    if(newTag){
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio");
    }

    // fazer conexão com a rota "/notes" no back-end e criar a nota  
    await api.post("/notes", {
      title,
      description,
      tags,
      links
    })

    alert("Notas criadas com sucesso!");
  }

  return(
    <Container>
      <Header/>
      
      <Main>

      <div>
       <h1>Criar nota</h1>
       <Link to={"/"}>Voltar</Link>
      </div>

      <Input 
      placeholder="Título"
      onChange={e => setTitle(e.target.value)}
      />
      
      <TextArea 
      placeholder="Observações"
      onChange={e => setDescription(e.target.value)}
      />

      <Section title={"Links úteis"}>

        {
          links.map((link, index)=> (
            <NoItem 
            key={String(index)} 
            value={link} 
            onClick={() => handleRemoveLink(link)}
            />
          ))
        }

        <NoItem 
        isNew 
        placeholder="Novo link" 
        value={newLink} 
        onChange={e => setNewLink(e.target.value)} 
        onClick={handleAddLink}
        />
    
      </Section>

      <Section title={"Marcadores"}>
        
        <div className="marcadores">
          {
            tags.map((tag, index) =>(
              <NoItem 
              key={String(index)}  
              value={tag}
              onClick={() => handleRemoveTags(tag)}
              />
            ))
          }
        
        <NoItem 
        isNew 
        placeholder="Novo marcador"
        onChange={e=> setNewTag(e.target.value)}
        value={newTag}
        onClick={handleAddTag}
        />

        </div>

      </Section>

      <Button 
      title={"Salvar"} 
      type="button"
      onClick={handleNewNote}
      />
      </Main>

    </Container>
  )
}