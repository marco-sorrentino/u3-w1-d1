import "./App.css";
import ButtonComponent from "./Components/ButtonComponent.jsx";
import ImageComponent from "./Components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent text="Il mio primo bottone" />
        <ImageComponent
          img="https://www.bradipiinantartide.com/wp-content/uploads/2021/04/boh-1.jpg"
          altText="non so cosa scrivere"
        />
      </header>
    </div>
  );
}

export default App;
