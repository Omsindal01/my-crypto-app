import logo from "./logo.svg";
import "./App.css";
import Crypto from "./components/cryptTable";

function App() {
  return (
    <div className="container">
      <h1>All Cryptocurrencies</h1>
      <Crypto />
    </div>
  );
}

export default App;
