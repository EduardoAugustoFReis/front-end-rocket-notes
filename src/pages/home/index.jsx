import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {api} from "../../services/api";

import {Container, Brand, Menu, Content, NewNote} from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Cards } from "../../components/Cards";
import {TextButton} from "../../components/TextButton";

import {AiOutlinePlus} from "react-icons/ai";

export function Home(){

  const[search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();


  function handleTagsSelected(tagName){

    if(tagName === "all"){
      return setTagsSelected([]);
    }

    const alreadySelected = tagsSelected.includes(tagName); // retorna boolean

    if(alreadySelected){ // se a tag está selecionada
      
      const filteredTags = tagsSelected.filter(tag=> tag !== tagName);
      setTagsSelected(filteredTags);

    }else{ // se a tag ainda não foi selecionada
      setTagsSelected(prevState => [...prevState, tagName]);
    }

  }

  function handleDetails(id){
    navigate(`/details/${id}`);
  }


  useEffect(() => {

    async function fetchTags(){
      const response = await api.get("/tags");
      setTags(response.data);

    }

    fetchTags();

  }, []);

  useEffect(() => {

    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      setNotes(response.data);
    }

    fetchNotes();

  },[tagsSelected, search]);

  return(
    <Container>

      <Brand>
        <h1>Rocketnotes</h1>      
      </Brand>

      <Header/>

      <Content>
     
      <Section title={"Minhas notas"}/>
        {
          notes.map((note)=>(
            <Cards
            key={ String(note.id)}
            data={note}
            onClick={() => handleDetails(note.id)}
            />
          ))
      
      }

      </Content>

      <Menu>

      <li><TextButton 
        title={"Todos"} 
        $isactive ={tagsSelected.length === 0}
        onClick={() => handleTagsSelected("all")}
      />
      </li>

        {
          tags && tags.map(tag =>(
            <li key={String(tag.id)} >
              <TextButton 
              title={tag.name}
              onClick={() => handleTagsSelected(tag.name)}
              $isactive ={tagsSelected.includes(tag.name)}
            />
            </li>
          ))
        }
      </Menu>

      <NewNote to={"/new"}>
        <AiOutlinePlus/>
        Criar nota
      </NewNote>

    </Container>
  )
}