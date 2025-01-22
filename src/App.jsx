/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from 'react';

import LoginForm from "./pages/Auth/LoginForm";
import SignUpForm from "./pages/Auth/SignUpForm";
import Home from "./pages/Dashboard/Home";
import CreatePoll from "./pages/Dashboard/CreatePoll";
import MyPoll from "./pages/Dashboard/MyPoll";
import VotePolls from "./pages/Dashboard/VotePolls";
import BookMarks from "./pages/Dashboard/BookMarks";

const App = () => {
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element={<LoginForm />} />
          <Route path="/signUp" exact element={<SignUpForm />} />
          <Route path="/dashboard" exact element={<Home />} />
          <Route path="/create-poll" exact element={<CreatePoll />} />
          <Route path="/my-polls" exact element={<MyPoll />} />
          <Route path="/voted-polls" exact element={<VotePolls />} />
          <Route path="/bookmarked-polls" exact element={<BookMarks />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");
   return isAuthenticated ? (
    <Navigate to="/dashboard" />
   ) : (
    <Navigate to="/login" />
   );
};