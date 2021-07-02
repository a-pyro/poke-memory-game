import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Pokemon } from '../../typings/pokemon';
import { v4 as uuid } from 'uuid';

interface Props {
  pokemon: Pokemon;
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  unCovered: Pokemon[];
  setUnCovered: React.Dispatch<React.SetStateAction<Pokemon[]>>;
}
const PokemonCard: React.FC<Props> = ({
  pokemon,
  pokemons,
  setPokemons,
  unCovered,
  setUnCovered,
}) => {
  const [covered, setCovered] = useState(true);
  const [scoperte, setScoperte] = useState([] as Pokemon[]);

  const handleClick = () => {
    scoperte.push(pokemon);
    console.log(pokemon.species.name);
    setCovered(!covered);
    console.log(scoperte);
  };
  return (
    <Col sm={3} style={{ cursor: 'pointer' }} onClick={handleClick}>
      <Image
        fluid
        roundedCircle
        src={
          covered
            ? '/assets/pokeball.png'
            : pokemon.sprites?.other?.['official-artwork'].front_default
        }
      />
    </Col>
  );
};

export default PokemonCard;

// src={
//         pokemons.map((p) => p.id).includes(pokemon.id)
//           ? '/assets/pokeball.png'
//           : pokemon.sprites?.other?.['official-artwork'].front_default
//       }
