import "./App.css";
import ButtonComponent from "./Components/ButtonComponent.jsx";
import ImageComponent from "./Components/ImageComponent";
import TitleComponent from "./Components/TitleComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleComponent text="Prima pagina React" />
        <ButtonComponent text="Il mio primo bottone" />
        <ButtonComponent text="Il mio secondo bottone" />
        <ImageComponent
          img="https://www.bradipiinantartide.com/wp-content/uploads/2021/04/boh-1.jpg"
          altText="non so cosa scrivere"
          larghezza="100%"
        />
      </header>
    </div>
  );
}

export default App;
