import { useState, useEffect } from 'react';
import { Card } from './components';
import useFetch from './hooks/CustomFetch/useFetch';
import { ThemeProvider } from './providers/ThemeProvider';

const App = () => {
  const [idCharacter, setIdCharacter] = useState(1);

  const url = 'https://rickandmortyapi.com/api/character';
  const dataPersonajes = useFetch(url);
  const dataPersonaje = useFetch(`https://rickandmortyapi.com/api/character/${idCharacter}`);

  const getIdCharacter = (id) => {
    setIdCharacter(id);
  };

  console.log('personaje: ', dataPersonaje.data);

  return (
    <ThemeProvider>
      <div className="App">
        {
          dataPersonajes.loading && <p>Loading...</p>
        }
        <div className="container-fluid">
          <div className="row">
            {
              dataPersonajes.data?.results.map(character => (
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
    </ThemeProvider>
  );
};

export default App;
