import React from 'react';

export const Card = ({ character, getIdCharacter }) => {
  // console.log('personaje recibido: ', character);
  const handleClick = () => {
    getIdCharacter(character.id);
  };
  return (
    <div className="card col-3">
      <img src={character.image} className="card-img-top" alt={character.name} />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">{character.species} - {character.status} </p>
        <button type="button" className="btn btn-primary" onClick={handleClick}>Click me</button>
      </div>
    </div>
  );
};

export default Card;
