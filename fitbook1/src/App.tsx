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
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/signup/SignUp";
import { useDocumentTitle } from "./util/change-document-title";
import SinglePost from "./pages/singlepost/SinglePost";
import RequireAuth from "./util/RequireAuth/RequireAuth";
import Messages from "./pages/messages/Messages";

function App() {
  useDocumentTitle("FitBook-Home");
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/explore" element={<Explore />} />
        <Route
          path="/bookmarks"
          element={
            <RequireAuth>
              <Bookmark />
            </RequireAuth>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/post/:postId" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
