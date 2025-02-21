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
import "./App.css"
import Discover from "./Pages/Discover";
import Sponsorship from "./Pages/Sponsorship";
import OrganizeEvent from "./Pages/OrganizeevenForm";
import MyState from "./Context/Mystate";
function App() {
  return (
    <div>
     <MyState>
     <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/MentorConnect" element={<MentorConnect/>} />
          <Route path="/event" element={<Event/>} />
          <Route path="/Discover" element={<Discover/>} />
          <Route path="/sponsorships" element={<Sponsorship/>} />
          <Route path="/organize-event" element={<OrganizeEvent/>} />
          <Route path="/UserProfile" element={<UserProfile/>} />
        </Routes>
      </Router>
    </MyState> 
    </div>
  )
}

export default App
