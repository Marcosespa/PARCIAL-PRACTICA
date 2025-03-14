import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import SpaceDetail from './components/SpaceDetail';
import RoomDetail from './components/RoomDetail';

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/space/:id' element={<SpaceDetail/>} />
        <Route path='/room/:id' element={<RoomDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;