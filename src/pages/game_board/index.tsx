import React, { useEffect } from 'react';
import { Pokemon } from '../../typings/pokemon';
import { v4 as uuid } from 'uuid';
import Spinner from 'react-bootstrap/Spinner';
import PokemonCard from '../../components/pokemon_card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

interface Props {
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  loading: boolean;
  lastUncovered: Pokemon;
  setLastUncovered: React.Dispatch<React.SetStateAction<Pokemon>>;
  checking: boolean;
  setChecking: React.Dispatch<React.SetStateAction<boolean>>;
  difficulty: number;
}
const GameBoard: React.FC<Props> = ({
  pokemons,
  setPokemons,
  loading,
  lastUncovered,
  setLastUncovered,
  checking,
  setChecking,
  difficulty,
}) => {
  useEffect(() => {
    return () => {
      setPokemons([]);
    };
  }, [setPokemons]);
  return (
    <Container fluid>
      <Row className='justify-content-center align-items-center'>
        {' '}
        {loading ? (
          <Spinner animation='grow' />
        ) : (
          pokemons.map((p) => (
            <PokemonCard
              key={uuid()}
              pokemons={pokemons}
              setPokemons={setPokemons}
              pokemon={p}
              lastUncovered={lastUncovered}
              setLastUncovered={setLastUncovered}
              checking={checking}
              setChecking={setChecking}
              difficulty={difficulty}
            />
          ))
        )}
      </Row>
    </Container>
  );
};

export default GameBoard;
