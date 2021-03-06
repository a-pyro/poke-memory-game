import { useState, useEffect } from 'react';
import { Pokemon } from './typings/pokemon';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GameBoard from './pages/game_board';
import GameOver from './pages/game_over';
import StartingPage from './pages/starting_page';
import { v4 as uuid } from 'uuid';
import ReactAudioPlayer from 'react-audio-player';

//898 tot pokemon
// TODO:
// fix mobile view
// fix audio
// implement timer & results w/localStorage

function App() {
  const [pokemons, setPokemons] = useState([] as Pokemon[]);
  const [lastUncovered, setLastUncovered] = useState({} as Pokemon);
  const [loading, setLoading] = useState(false);
  const [difficulty, setDifficulty] = useState(0);
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    (async () => {
      if (difficulty === 0) return;
      try {
        setLoading(true);
        for (let i = 0; i < difficulty; i++) {
          //fetcho pokemon random
          const randomNum = Math.ceil(Math.random() * 898);
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${randomNum}`
          );
          const data = await response.json();

          const firstPokemon = { ...data, id: uuid(), covered: true };
          const secondPokemon = { ...data, id: uuid(), covered: true };
          setPokemons((prevState) =>
            [...prevState, firstPokemon, secondPokemon].sort(
              (a, b) => 0.5 - Math.random()
            )
          );
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    })();
  }, [difficulty]);
  return (
    <Router>
      <ReactAudioPlayer
        src='https://res.cloudinary.com/a-pyro/video/upload/v1625572547/poke-game-music-service/pokemon_soundtrack_t41o8j.mp3'
        autoPlay={true}
        controls
        loop={true}
        className='d-none'
      />
      <Route
        path='/'
        exact
        render={() => <StartingPage setDifficulty={setDifficulty} />}
      />
      <Route
        path='/board'
        render={() => (
          <GameBoard
            pokemons={pokemons}
            loading={loading}
            setPokemons={setPokemons}
            lastUncovered={lastUncovered}
            setLastUncovered={setLastUncovered}
            checking={checking}
            setChecking={setChecking}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
        )}
      />
      <Route
        path='/results'
        render={() => <GameOver setDifficulty={setDifficulty} />}
      />
    </Router>
  );
}

export default App;
