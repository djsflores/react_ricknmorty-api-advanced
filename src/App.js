import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card } from './components';
import useFetch from './hooks/CustomFetch/useFetch';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [idCharacter, setIdCharacter] = useState(1);

  const url = 'https://rickandmortyapi.com/api/character';
  // const response = useFetch(url);
  // console.log('useFetch: ', response.data?.results);
  const { data } = useFetch(url);
  console.log('useFetch: ', data);
  // setCharacters(response.data?.results);

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
    // setIsLoading(true);
    // const { data } = await axios('https://rickandmortyapi.com/api/character');
    // setCharacters(data.results);
    // setIsLoading(false);
  };
  // Consumo la API al cargar la pagina
  const getCharacters = () => {
    setIsLoading(true);
    // const { data } = await axios('https://rickandmortyapi.com/api/character');
    // Custom hook
    // const url = 'https://rickandmortyapi.com/api/character';
    // const { data } = await useFetch(url);
    // console.log('useFetch: ', data);
    // const url = 'https://rickandmortyapi.com/api/character';
    // const response = useFetch(url);
    // console.log('useFetch: ', response);
    // setCharacters(data.results);
    setCharacters(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getCharacters();
  }, [data]);
  console.log('personajes obtenidos: ', characters);
  // console.log('personaje clickeado: ', idCharacter);
  const getIdCharacter = (id) => {
    setIdCharacter(id);
  };
  const getCharacterById = async () => {
    // const { data } = await axios(`https://rickandmortyapi.com/api/character/${idCharacter}`);
    // console.log('personaje clickeado: ', data);
  };
  useEffect(() => {
    getCharacterById();
  }, [idCharacter]);

  return (
    <div className="App">
      {
        // isLoading ? <p>Loading...</p> : ""
        // isLoading ? <p>Loading...</p> : null
        // isLoading ? <p>Loading...</p> : <></>
        isLoading && <p>Loading...</p>
      }
      <button onClick={handleClick} disabled={isLoading}>Obtener Personajes</button>
      <div className="container-fluid">
        <div className="row">
          {
            // characters?.map(character => <p key={character.id}>{character.name}</p>)
            characters?.map(character => (
            <Card
              character={character}
              key={character.id}
              getIdCharacter={getIdCharacter}
            />
            ))
          }
          </div>
        </div>
    </div>
  );
};

export default App;
