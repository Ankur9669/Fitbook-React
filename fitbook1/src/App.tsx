import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Explore from "./pages/explore/Explore";
import Bookmark from "./pages/bookmark/Bookmark";
import Profile from "./pages/profile/Profile";
import { ToastContainer } from "react-toastify";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/signup/SignUp";
import { useDocumentTitle } from "./util/change-document-title";
import SinglePost from "./pages/singlepost/SinglePost";
import RequireAuth from "./util/RequireAuth/RequireAuth";
import Messages from "./pages/messages/Messages";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  useDocumentTitle("FitBook-Home");
  return (
    <div className="App">
      <ToastContainer theme="colored" />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Homepage />
            </RequireAuth>
          }
        />
        <Route
          path="/explore"
          element={
            <RequireAuth>
              <Explore />
            </RequireAuth>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <RequireAuth>
              <Bookmark />
            </RequireAuth>
          }
        />
        <Route path="/profile/:emailId" element={<Profile />} />
        {/* <Route path="/messages" element={<Messages />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/post/:postId" element={<SinglePost />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
