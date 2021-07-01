import { Pokemon } from '../typings/pokemon';

export const shufflePokemons = (pokemons: Pokemon[]): Pokemon[] => {
  for (let i = pokemons.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = pokemons[i];
    pokemons[i] = pokemons[j];
    pokemons[j] = temp;
  }
  return pokemons;
};
