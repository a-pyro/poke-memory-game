import React, { useEffect } from 'react';
import { Pokemon } from '../../typings/pokemon';
import { v4 as uuid } from 'uuid';
import Spinner from 'react-bootstrap/Spinner';
interface Props {
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  loading: boolean;
}
const GameBoard: React.FC<Props> = ({ pokemons, setPokemons, loading }) => {
  useEffect(() => {
    return () => {
      setPokemons([]);
    };
  }, [setPokemons]);
  return (
    <>
      {loading ? (
        <Spinner animation='grow' />
      ) : (
        pokemons.map((p) => (
          <img
            key={uuid()}
            alt='artwork'
            src={p.sprites?.other?.['official-artwork'].front_default}
          />
        ))
      )}
    </>
  );
};

export default GameBoard;
