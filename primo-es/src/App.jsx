import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ImageComponent
          className="prova"
          src="https://cdn-img.automoto.it/images/26238199/3000x/alfa-romeo-giulia-v1-718327.jpeg"
        />
        <ButtonComponent type="submit" content="Invio" />
      </header>
    </div>
  );
}

export default App;
