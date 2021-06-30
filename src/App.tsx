import React from 'react';
import { useState, useEffect } from 'react';
import { Pokemon } from './typings/pokemon';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GameBoard from './pages/game_board';
import GameOver from './pages/game_over';
import StartingPage from './pages/starting_page';

//898 tot pokemon

function App() {
  const [pokemon, setPokemon] = useState([] as Pokemon[]);
  const [loading, setLoading] = useState(false);
  const [difficulty, setDifficulty] = useState(0);

  useEffect(() => {
    (async () => {
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
          setPokemon((prevState) => [...prevState, data]);
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
      <Route path='/board' render={() => <GameBoard />} />
      <Route path='/results' render={() => <GameOver />} />
    </Router>
  );
}

export default App;
