import "./App.css";
import CardHandler from "./components/cardHandler";

function App() {
  return (
    <div>
      <h1 className="header">Memory Game!</h1>
      <CardHandler cardNumber={12}></CardHandler>
    </div>
  );
}

export default App;
