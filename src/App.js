import "./App.css";
import Meme from "./components/Meme";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import List from "./components/List";
import FormPractice from "./components/FormPractice";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FormPractice />
      <Meme />
      <Counter />
      <List />
    </div>
  );
}

export default App;
