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
  unCovered: Pokemon[];
  setUnCovered: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  lastUncovered: Pokemon;
  setLastUncovered: React.Dispatch<React.SetStateAction<Pokemon>>;
}
const GameBoard: React.FC<Props> = ({
  pokemons,
  setPokemons,
  loading,
  unCovered,
  setUnCovered,
  lastUncovered,
  setLastUncovered,
}) => {
  useEffect(() => {
    return () => {
      setPokemons([]);
      setUnCovered([]);
    };
  }, [setPokemons, setUnCovered]);
  return (
    <Container fluid>
      <Row style={{ maxHeight: '100%' }}>
        {' '}
        {loading ? (
          <Spinner animation='grow' />
        ) : (
          pokemons.map((p) => (
            <PokemonCard
              key={uuid()}
              pokemons={pokemons}
              setPokemons={setPokemons}
              unCovered={unCovered}
              setUnCovered={setUnCovered}
              pokemon={p}
              lastUncovered={lastUncovered}
              setLastUncovered={setLastUncovered}
            />
          ))
        )}
      </Row>
    </Container>
  );
};

export default GameBoard;
