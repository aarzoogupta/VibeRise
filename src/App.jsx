import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home";
import MentorConnect from "./Pages/MentorConnect";
import Event from "./Pages/Event";
import UserProfile from "./Pages/UserProfile";
function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/MentorConnect" element={<MentorConnect/>} />
          <Route path="/Event" element={<Event/>} />
          <Route path="/UserProfile" element={<UserProfile/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
