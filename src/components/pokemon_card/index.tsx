import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useHistory } from 'react-router-dom';
import { Pokemon } from '../../typings/pokemon';

interface Props {
  pokemon: Pokemon;
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  lastUncovered: Pokemon;
  setLastUncovered: React.Dispatch<React.SetStateAction<Pokemon>>;
  checking: boolean;
  setChecking: React.Dispatch<React.SetStateAction<boolean>>;
  difficulty: number;
}
const PokemonCard: React.FC<Props> = ({
  pokemon,
  pokemons,
  setPokemons,
  lastUncovered,
  setLastUncovered,
  checking,
  setChecking,
  difficulty,
}) => {
  const history = useHistory();

  const handleClick = () => {
    //check per no cliccare mille carte alla volta

    if (pokemon.covered && !checking) {
      //check se sono al primo turno, scopro e basta
      if (Object.keys(lastUncovered).length === 0) {
        //flippo la flag alla carta che sto cliccando
        const newPokemons = pokemons.map((p: Pokemon) => {
          if (p.id === pokemon.id) {
            p.covered = !p.covered;
            //la setto come ultima flippata
            setLastUncovered(p);
            return p;
          }
          return p;
        });
        setPokemons(newPokemons);
      } else {
        //ora devo flipparne un'altra e controllare se ha il nome di quella settata come flippata

        const newPokemons = pokemons.map((p: Pokemon) => {
          if (p.id === pokemon.id) {
            p.covered = !p.covered;
            return p;
          }
          return p;
        });
        setPokemons(newPokemons);
        setChecking(true);
        setTimeout(() => {
          //controllo che abbia lo stesso nome dell'ultima girata
          if (lastUncovered.name === pokemon.name) {
            //match => rimangono entrambe scoperte e resetto l'ultima flippata
            setLastUncovered({} as Pokemon);
          } else {
            //se non c'è match => setto l'ultima flippata a zero e cambio la flag all'ultima cliccata
            const newPokemons = pokemons.map((p: Pokemon) => {
              if (p.id === pokemon.id || p.id === lastUncovered.id) {
                p.covered = !p.covered;
                return p;
              }
              // e anche quella precedentemete flippata
              return p;
            });
            setPokemons(newPokemons);
            setLastUncovered({} as Pokemon);
          }
          setChecking(false);
        }, 1500);
      }
      if (pokemons.every((p: Pokemon) => !p.covered)) {
        history.push('/results');
      }
    } else {
      return;
    }
  };
  return (
    <Col
      sm={4}
      style={
        difficulty !== 16
          ? { cursor: 'pointer', height: '200px', width: '250px' }
          : { cursor: 'pointer', height: '150px', width: '150px' }
      }
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
