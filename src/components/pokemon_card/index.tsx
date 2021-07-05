import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Pokemon } from '../../typings/pokemon';

interface Props {
  pokemon: Pokemon;
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  unCovered: Pokemon[];
  setUnCovered: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  lastUncovered: Pokemon;
  setLastUncovered: React.Dispatch<React.SetStateAction<Pokemon>>;
}
const PokemonCard: React.FC<Props> = ({
  pokemon,
  pokemons,
  setPokemons,
  unCovered,
  setUnCovered,
  lastUncovered,
  setLastUncovered,
}) => {
  // const [covered, setCovered] = useState(true);
  // const [uncovered, setUncovered] = useState([]);

  const handleClick = () => {
    //check per no cliccare mille carte alla volta
    //posso cliccare una carta solo se
    // è coperta => non è l'ultima carta scoperta e al momento non ci sono altre scoperte sulla board => ergo, la last uncovered.key === 0
    //

    if (pokemon.covered) {
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
        }, 2000);
      }
    } else {
      return;
    }

    // scopro carta e la setto come lastUncovered

    //se quella che sto cliccando è uguale a quella che mi arriva come lastUncovered => match

    //se non ho carte scoperte (unConvered length === 0), scopro e basta
    // if (unCovered.length === 0) {
    //   console.log(1);
    //   const newPokemons = pokemons.map((p: Pokemon) => {
    //     if (pokemon.id === p.id) {
    //       p.covered = !p.covered;
    //       setUnCovered((prev) => [...prev, p]); // lo metto negli scoperti
    //       return p;
    //     } else {
    //       return p;
    //     }
    //   });
    //   setPokemons(newPokemons);
    // } else {
    //   console.log(2);
    //   //la flippo
    //   const newPokemons = pokemons.map((p: Pokemon) => {
    //     if (pokemon.id === p.id) {
    //       console.log(3);

    //       p.covered = !p.covered;
    //       //la mando nelle scoperte
    //       setUnCovered((prev) => [...prev, p]); // lo metto negli scoperti
    //       return p;
    //     } else {
    //       return p;
    //     }
    //   });
    //   setPokemons(newPokemons);

    //   // controllo se c'è un match nel nome tra l'ultima carta scoperta e le carte già presenti nelle carte scoperte
    //   if (
    //     unCovered.some((p: Pokemon) => p.name === pokemon.name)
    //   ) {
    //     console.log(4);
    //     return;
    //     //   // se c'è rimangono entrambe nelle scoperte
    //   } else {
    //     console.log('no match', 5);

    //     //se non c'è => cambio la flag all'ultima flippata
    //     //la flippo
    //     const newPokemons = pokemons.map((p: Pokemon) => {
    //       if (pokemon.id === p.id) {
    //         p.covered = !p.covered;
    //         //e la tolgo anche dall'array delle carte scoperte
    //         setUnCovered((prev) => [
    //           ...prev.filter((p: Pokemon) => p.id !== pokemon.id),
    //         ]);
    //         return p;
    //       } else {
    //         return p;
    //       }
    //     });
    //     setPokemons(newPokemons);
    //   }
    // }

    // //check per non girarli ricliccando una volta scoperti
    // if (unCovered.some((p: Pokemon) => p.id === pokemon.id)) return;

    // //cambio la flag e setto lo state
    // const newPokemons = pokemons.map((p: Pokemon) => {
    //   if (pokemon.id === p.id) {
    //     p.covered = !p.covered;
    //     setUnCovered((prev) => [...prev, p]); // lo metto negli scoperti
    //     return p;
    //   } else {
    //     return p;
    //   }
    // });
    // setPokemons(newPokemons);
    // if (
    //   unCovered.some((p: Pokemon) => p.name === pokemon.name)
    // ) {
    // }

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
