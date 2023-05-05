import "./App.css";
import Jokes from "./component/Jokes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Programming Jokes</h1>
        <Jokes/>
        <Jokes/>
        <Jokes/>
      </header>
    </div>
  );
}

export default App;
