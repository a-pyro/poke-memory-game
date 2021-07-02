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
  // const [covered, setCovered] = useState(true);
  // const [uncovered, setUncovered] = useState([]);

  const handleClick = () => {
    //check per non girarli ricliccando una volta scoperti
    if (unCovered.some((p: Pokemon) => p.id === pokemon.id)) return;

    //cambio la flag e setto lo state
    const newPokemons = pokemons.map((p: Pokemon) => {
      if (pokemon.id === p.id) {
        p.covered = !p.covered;
        setUnCovered((prev) => [...prev, p]); // lo metto negli scoperti
        return p;
      } else {
        return p;
      }
    });
    setPokemons(newPokemons);
    if (
      unCovered.some((p: Pokemon) => p.species.name === pokemon.species.name)
    ) {
    }

    //

    // setCovered(!covered);

    // setUnCovered((prevScoperte) => [...prevScoperte, pokemon]);
  };
  return (
    <Col
      sm={3}
      style={{ cursor: 'pointer', height: '200px', width: '250px' }}
      onClick={handleClick}
    >
      <Image
        fluid
        roundedCircle
        src={
          pokemon.covered
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
