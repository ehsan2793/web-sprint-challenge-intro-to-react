// Write your Character component here
import React from "react";
import styled from "styled-components"

const Container =styled.div `
background-color: white;
// style goes here
`;

const Character = (props) => {
const character = props.character;


    return (
        <Container>
            <h2>Name: {character.name}</h2>
            <h2>Gender: {character.gender}</h2>
            <h2>Height: {character.height}</h2>
            <h2>Mass: {character.mass}</h2>
            <h2>Birth year: {character.birth_year}</h2>
            <h2>Eye color: {character.eye_color}</h2>
            <h2>Hair color{character.hair_color}</h2>
            <h2>Skin_color{character.skin_color}</h2>
        </Container>
    )
}

export default Character