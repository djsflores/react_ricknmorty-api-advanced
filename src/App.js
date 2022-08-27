import { useState, useEffect } from 'react';
import { Card } from './components';
import useFetch from './hooks/CustomFetch/useFetch';

const App = () => {
  const [idCharacter, setIdCharacter] = useState(1);

  const url = 'https://rickandmortyapi.com/api/character';
  const { data, loading } = useFetch(url);

  const getIdCharacter = (id) => {
    setIdCharacter(id);
  };
  const getCharacterById = async () => {
    fetch(`https://rickandmortyapi.com/api/character/${idCharacter}`)
      .then(resp => resp.json())
      .then(json => console.log('personaje clickeado: ', json));
  };
  useEffect(() => {
    getCharacterById();
  }, [idCharacter]);

  return (
    <div className="App">
      {
        loading && <p>Loading...</p>
      }
      <div className="container-fluid">
        <div className="row">
          {
            data?.map(character => (
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
