import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Explore from "./pages/explore/Explore";
import { useEffect } from "react";
import Axios from "axios";

function App() {
  useEffect(() => {
    Axios.get("/api/posts")
      .then((res) => {
        console.log(res);
      })
      .catch(() => {
        console.log("Error");
      });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
