import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  // Fetch basado en resultados
  // const handleClick = () => {
  //   fetch('https://rickandmortyapi.com/api/character')
  //     .then(data => data.json())
  //     .then(json => console.log('api: ', json.results));
  //   };
  // Fetch de manera declarativa
  // const handleClick = async () => {
  //   const data = await fetch('https://rickandmortyapi.com/api/character');
  //   const json = await data.json();
  //   console.log('api: ', json.results);
  // };
  // Axios (desestructuramos y obtenemos data de axios)
  // const handleClick = async () => {
  //   const { data, status } = await axios('https://rickandmortyapi.com/api/character');
  //   console.log('api: ', data.results);
  //   console.log('estado: ', status);
  // };
  // Spinner de carga al hacer click
  const handleClick = async () => {
    setIsLoading(true);
    const { data } = await axios('https://rickandmortyapi.com/api/character');
    setCharacters(data.results);
    setIsLoading(false);
  };
  // Consumo la API al cargar la pagina
  const getCharacters = async () => {
    setIsLoading(true);
    const { data } = await axios('https://rickandmortyapi.com/api/character');
    setCharacters(data.results);
    setIsLoading(false);
  };
  useEffect(() => {
    getCharacters();
  }, []);
  console.log(characters);
  return (
    <div className="App">
      {
        // isLoading ? <p>Loading...</p> : ""
        // isLoading ? <p>Loading...</p> : null
        // isLoading ? <p>Loading...</p> : <></>
        isLoading && <p>Loading...</p>
      }
      <button onClick={handleClick} disabled={isLoading}>Obtener Personajes</button>
      {
        characters?.map(character => <p key={character.id}>{character.name}</p>)
      }
    </div>
  );
};

export default App;
