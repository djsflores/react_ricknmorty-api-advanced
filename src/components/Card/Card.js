import classNames from 'classnames';
import React from 'react';
import { useThemeContext } from '../../providers/ThemeProvider';

export const Card = ({ character, getIdCharacter }) => {
  const theme = useThemeContext();
  // console.log('personaje recibido: ', character);
  const handleClick = () => {
    getIdCharacter(character.id);
  };
  return (
    <div className="card col-3 bg-secondary">
      <p>Theme color: {theme}</p>
      <img src={character.image} className="card-img-top" alt={character.name} />
      {/* <div className={`card-body ${theme === 'light' ? 'bg-light' : 'bg-dark text-white'}`}> */}
      <div className={classNames('card-body', {
        'bg-light': theme === 'light',
        'bg-dark text-white': theme === 'dark',
      })}>
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">{character.species} - {character.status} </p>
        <button type="button" className="btn btn-primary" onClick={handleClick}>Click me</button>
      </div>
    </div>
  );
};

export default Card;
