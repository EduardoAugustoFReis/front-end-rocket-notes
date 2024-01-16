import { useParams, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import { api } from "../../services/api";

import { Container, Main, Links } from "./styles";

import {Header} from "../../components/Header"
import { TextButton } from "../../components/TextButton";
import {Section} from "../../components/Section";
import {Tags} from "../../components/Tags";
import {Button} from "../../components/Button";

export function Details(){

  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1);
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if(confirm){
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(()=>{
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data)
    }

    fetchNote();

  }, []);

  return(
    <Container>
      <Header/>
    {
      data &&
      <Main>

      <div className="text-button">
      <TextButton title={"Excluir a nota"} onClick={handleRemove}/>
      </div>

      <h1>{data.title}</h1>

      <p>{data.description}</p>

      { 
      data.links && 
      <Section title="Links úteis">
        <Links>
        {
          data.links.map(link =>(
            <li key={String(link.id)}>
              <a href={link.url} target="_blank">
                {link.url}
              </a>
            </li>
          ))
        }
        </Links>
      </Section>
      }
      
      { 
      data.tags &&
      <Section title={"Marcadores"}>

        <div className="tags">
          {
            data.tags.map(tag =>(
              <Tags 
              key={String(tag.id)}
              title={tag.name}
              />
            ))
          }
        </div>

       </Section>
      }
     

      <div className="return-button">
      <Button title={"Voltar"} onClick={handleBack}/>
      </div>

      </Main>
 
    }
    
    </Container>
  )
}