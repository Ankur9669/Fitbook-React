import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Explore from "./pages/explore/Explore";
import Bookmark from "./pages/bookmark/Bookmark";
import Profile from "./pages/profile/Profile";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Axios from "axios";
import Login from "./pages/Authentication/Login/Login";

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
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmarks" element={<Bookmark />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
