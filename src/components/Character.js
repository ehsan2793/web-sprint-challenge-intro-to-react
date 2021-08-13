// Write your Character component here
import React,{useState} from "react";
import styled from "styled-components"


//===============================
import Details from "./Details"


const Container =styled.div `
background-color: rgb(0, 0, 0 ,0.5);;
color: white;
width: 100%;
 border: 1px solid rgb(210, 210, 210);
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  border-radius: 8px;
  margin: 16px;
  padding: 16px 0px 12px 0px;
  display: flex;
  justify-content: space-evenly;
// style goes here
`;
const Button =styled.button `
box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
border-radius: 20px;
background-color: lightgrey;
padding: 16px 8px;
font-size: 1.2rem;


`;
// ================================  components


const Character = (props) => {
const character = props.character;

// ================================
const [detail,setDetail] =useState(null)
const openDetails = id => {
    setDetail(id)
  }

  const closeDetails = () => {
    setDetail(null)
  }
//==================================
  
    return (
        <div>
        <Container onClick={()=>openDetails(character)}>
            <h2> {character.name}</h2>
          
            <h2> {character.birth_year}</h2>
            
        </Container>
{/* // ================= ================================ */}
{
        detail && <Details people={detail} close={closeDetails} />
      }
        {/* <Details people={props.character}/>        */}
                                                                            {/* // dont erase this only the line above */}

 {/* ================================================================= */}
                {/* <div>
                    <h2>Gender: {character.gender}</h2>
                    <h2>Height: {character.height}</h2>
                    <h2>Mass: {character.mass}</h2>
                
                    <h2>Eye color: {character.eye_color}</h2>
                    <h2>Hair color{character.hair_color}</h2>
                    <h2>Skin_color{character.skin_color}</h2>
                </div> */}
        
        </div>
    )
}

export default Character