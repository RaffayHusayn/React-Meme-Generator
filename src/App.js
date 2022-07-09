import "./App.css";
import Meme from "./components/Meme";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Meme />
      <Counter />
    </div>
  );
}

export default App;
