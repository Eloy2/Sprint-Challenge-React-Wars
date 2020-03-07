import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Card from "./Card";
import styled from 'styled-components';

/////////////////////////////////STYLES///////////////////////////////////

const BodyStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

/////////////////////////////////STYLES///////////////////////////////////

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const apikey = "https://swapi.co/api/people/"
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(apikey)
      .then(response => {
        console.log(response.data.results);
        setData(response.data.results);
      })
      .catch(err => { console.log(err) });
  }, [])

  return (
    <BodyStyle>
      <h1 className="Header">React Wars</h1>
      {data.map((person) =>{
        return <Card Name={person.name} 
                     Gender={person.gender} 
                     Height={person.height} 
                     Mass={person.mass} 
                     HairColor={person.hair_color}/>
      })}
    </BodyStyle>
  );
}

export default App;
