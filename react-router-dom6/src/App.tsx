import React from 'react';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import {Main} from "./components/Main";
import {Login} from "./components/Login";
import {Profile} from "./components/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>React-router-dom6</h1>
        <NavLink to={'/'}>main</NavLink>
        <NavLink to={'/login'}>login</NavLink>
        <NavLink to={'/profile'}>profile</NavLink>

        <Routes>
          <Route path={'/'} element={<Main/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/profile'} element={<Profile/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
