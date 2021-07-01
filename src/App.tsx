import React from 'react';
import { useState, useEffect } from 'react';
import { Pokemon } from './typings/pokemon';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GameBoard from './pages/game_board';
import GameOver from './pages/game_over';
import StartingPage from './pages/starting_page';
import { shufflePokemons } from './utils';

//898 tot pokemon

function App() {
  const [pokemons, setPokemons] = useState([] as Pokemon[]);
  const [unCovered, setUnCovered] = useState([] as Pokemon[]);
  const [loading, setLoading] = useState(false);
  const [difficulty, setDifficulty] = useState(0);

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

          console.log(data);
          setPokemons((prevState) =>
            [...prevState, data, data].sort((a, b) => 0.5 - Math.random())
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
          />
        )}
      />
      <Route path='/results' render={() => <GameOver />} />
    </Router>
  );
}

export default App;
