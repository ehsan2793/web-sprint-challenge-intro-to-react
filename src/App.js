import React,{useEffect,useState} from 'react';
import './App.css';
import Character from './components/Character'
import axios from 'axios'
import Details from './components/Character'
//import style here

const App = () => {

  const [characters,setCharacter] = useState([])

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const [info, SetInfo] = useState(null);
  const openInfo = (index) => {
    SetInfo(index)
  }

  const closeInfo = () => {
    SetInfo(null)
  }

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  useEffect(()=>{
    axios.get("https://swapi.dev/api/people")
    .then(response => {
      setCharacter(response.data)
      console.log(response.data)
    })
    .catch(error =>{
      <div>server is not responding. Please try again <br/>${error} </div>
    })

  },[])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map((character,index) => (<Character key= {index} character={character} openInfo={openInfo}  closeInfo={closeInfo} />))}
    {/* ======================================================== */}
    <div>

    </div>
    {/* ======================================================== */}
    </div>
  );
}

export default App;
