import "./App.css";
import Meme from "./components/Meme";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Meme />
      <Counter />
      <List />
    </div>
  );
}

export default App;
