import "./App.css";
import Navbar from "./components/navbar/Navbar";
import LeftSidebar from "./components/left-sidebar/LeftSidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-container">
        <LeftSidebar />
      </div>
    </div>
  );
}

export default App;
