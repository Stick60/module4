import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Inscription from "./pages/Inscription";
import Connection from './pages/Connection';
import Films from './pages/Films';
import Film from './pages/Film';
import Historique from './pages/Historique';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/films" element={<Films />} />
        <Route path="*" element={<Home />} />
        <Route path="/film/:id" element={<Film />} />
        <Route path="/historique" element={<Historique />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;