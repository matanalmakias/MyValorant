import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./sizes.scss";
import "./style.scss";
import "./styles/setup.scss";
import Coach from "./components/coach/Coach";
import Home from "./components/home/Home";
import BecomeCoach from "./components/coach/BecomeCoach";
import Header1 from "./components/layouts/Header1";
import Chat from "./components/layouts/Chat";

const App = () => {
  return (
    <>
      <Header1 />
      <Routes>
        <Route path="/valocoach" element={<Home />} />
        <Route path="/valocoach/coach" element={<Coach />} />
        <Route path="/valocoach/become-a-coach" element={<BecomeCoach />} />
      </Routes>
      <Chat />
    </>
  );
};

export default App;
