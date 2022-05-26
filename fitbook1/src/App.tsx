import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-container">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
