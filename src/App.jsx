import { useEffect, useState } from "react";
import Card from "./components/Card";
import Scoreboard from "./components/Scoreboard";
import "./App.css";

const App = () => {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    //fetch cards from api on component mount
    fetchCards();
  }, []);

  const fetchCards = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
    const data = await response.json();

    //Map the fetched data to extract necessary card info
    const fetchedCards = data.results.map((pokemon, index) => ({
      id: index,
      name: pokemon.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + 1
      }.png`,
    }));

    setCards(fetchedCards);
  };

  const shuffleCards = () => {
    const shuffleCards = [...cards].sort(() => 0.5 - Math.random());
    setCards(shuffleCards);
  };

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      //Reset score if the same card is clicked twice
      setScore(0);
      setClickedCards([]);
    } else {
      //Update score and best score
      const newScore = score + 1;
      setScore(newScore);
      setBestScore(Math.max(newScore, bestScore));
      setClickedCards([...clickedCards, id]);
    }

    shuffleCards();
  };

  return (
    <div className="App">
      <h1 className="headOne">Memory Card Game</h1>
      <Scoreboard score={score} bestScore={bestScore} />
      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
};

export default App;
