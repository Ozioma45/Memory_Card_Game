import CardGrid from "./components/CardGrid";
import Scoreboard from "./components/Scoreboard";

const App = () => {
  return (
    <div className="App">
      <Scoreboard bestScore={bestScore} />
      <CardGrid cards={shuffledCards} handleCardClick={handleCardClick} />
    </div>
  );
};

export default App;
