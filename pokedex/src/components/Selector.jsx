import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { ApiContext } from '../context/ApiContext';

export default function Selector() {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const stringToLowerCase = (string) => {
    return string.charAt(0).toLowerCase() + string.slice(1);
  };

  const { allPokemons } = useContext(ApiContext);

  const [pokeName, setPokeName] = useState('');

  const navigate = useNavigate();

  const goPokemon = () => {
    navigate(`/pokemons/${stringToLowerCase(pokeName)}`);
  };

  return (
    <div className="selectPokemon">
      <h4>Escoge un pokémon para la Batalla!</h4>
      <select
        className="select"
        type="text"
        value={pokeName}
        onChange={({ target }) => setPokeName(target.value)}
      >
        <option defaultValue={''} disabled value="">
          Pokémones
        </option>
        {allPokemons.map((e, index) => {
          return <option key={index}>{capitalizeFirstLetter(e.name)}</option>;
        })}
      </select>
      <br />
      <Button variant="info" onClick={goPokemon}>
        Yo te elijo!
      </Button>
    </div>
  );
}
