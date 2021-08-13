import React,{useState} from 'react';

function Details(props) {
    
    // console.log(props.people);
    const people = props.people;
console.log(people);
const [details, setDetails] = useState(null)
    return (
        
        <div>
                <div>
                    <h2>Gender: {people.gender} </h2>
                    <h2>Height: {people.height} </h2>
                    <h2>Mass: {people.mass} </h2>
                
                    <h2>Eye color:{people.eye_color} </h2>
                    <h2>Hair color {people.hair_color}</h2>
                    <h2>Skin color{people.skin_color}</h2>
                </div>
                <button>close</button>
        </div>
    )
    
}
export default Details;