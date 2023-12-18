import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const PokemonCard = () => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const navigate = useNavigate();

  const [pokeData, setPokeData] = useState();

  const { apiUrl } = useContext(ApiContext);

  const { pokemon } = useParams();

  const getPokemonData = async () => {
    try {
      const response = await axios.get(`${apiUrl}${pokemon}`);
      const data = response.data;
      console.log(data);
      setPokeData(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  const goToPokemonSelector = () => {
    navigate(`/pokemons`);
  };

  return (
    <main className="pokeTrainer">
      {pokeData ? (
        <Card style={{ width: '18rem' }}>
          <section className="statSection">
            <Card.Body>
              <Card.Title>{capitalizeFirstLetter(pokeData.name)}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              {pokeData.stats.map((e) => {
                return (
                  <ListGroup.Item key={e.id}>
                    {capitalizeFirstLetter(e.stat.name)}:{e.base_stat}
                  </ListGroup.Item>
                );
              })}
              {pokeData.types.map((e) => {
                return (
                  <ListGroup.Item>
                    Type: {capitalizeFirstLetter(e.type.name)}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </section>
          <section className="imageSection">
            <Card.Img
              variant="top"
              src={pokeData.sprites.other.dream_world.front_default}
            />
          </section>
        </Card>
      ) : null}
      <Button className="btn" variant="info" onClick={goToPokemonSelector}>
        Busca nuevamente
      </Button>
    </main>
  );
};

export default PokemonCard;
