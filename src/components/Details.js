import React,{useState} from 'react';
import styled from "styled-components"

const OutsideContainer =styled.div`
 border: 1px solid rgb(210, 210, 210);
 background-color: rgb(255, 255, 255,0.3);
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  border-radius: 8px;
  /* margin: 16px; */
  padding: 16px 8px 12px 8px;
  

`;
const H2 =styled.h2`
color: black;
text-shadow:1px 1px yellow;
text-transform: uppercase;
  

`;
const Button =styled.button `
box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
border-radius: 20px;
background-color: lightgrey;
padding: 8px 18px;
font-size: 1.2rem;
cursor: pointer;


`;

const Span =styled.span`
color: white;
text-shadow:3px 3px red;
`;

function Details(props) {
    
    // console.log(props.people);
    const people = props.people;
console.log(people);
const close = props.close

    return (
        
        <OutsideContainer>
                <div>
                    <H2> <Span>Gender : </Span> {people.gender} </H2>
                    <H2><Span>Height : </Span> {people.height} </H2>
                    <H2> <Span>Mass : </Span>{people.mass} </H2>
                
                    <H2><Span>Eye color : </Span>{people.eye_color} </H2>
                    <H2> <Span>Hair color : </Span> {people.hair_color}</H2>
                    <H2> <Span>Skin color : </Span>{people.skin_color}</H2>
                </div>
                <Button onClick={props.close}>close</Button>
        </OutsideContainer>
    )
    
}
export default Details;