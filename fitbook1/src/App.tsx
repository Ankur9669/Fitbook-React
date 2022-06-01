import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Explore from "./pages/explore/Explore";
import Bookmark from "./pages/bookmark/Bookmark";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/bookmarks" element={<Bookmark />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
