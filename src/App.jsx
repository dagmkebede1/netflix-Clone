import "./App.css";
import Hero from "./components/hero/Hero";
import Card from "./components/card/Card";
import cardData from "./api/data";
function App() {
  return (
    <div className="App">
      <Hero />
      {cardData.map((data) => {
        return (
          <Card
            key={data.title}
            title={data.title}
            fetchUrl={data.fetchUrl}
            isLargeRow={data.isLargeRow}
          />
        );
      })}
    </div>
  );
}

export default App;
