import React from 'react';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import {Main} from "./components/Main";
import {Login} from "./components/Login";
import {Profile} from "./components/Profile";
import {Error404} from "./components/Error404";
import {Settings} from "./components/Settings";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React-router-dom6</h1>
        <NavLink to={'/'}>main</NavLink>
        <NavLink to={'/login'}>login</NavLink>
        <NavLink to={'/profile'}>profile</NavLink>
        <NavLink to={'/profile/settings'}>settings</NavLink>

        <Routes>
          <Route path={'/'} element={<Main/>}/>
          <Route path={'/*'} element={<Error404/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/profile/*'} element={
            <div>
              <Profile/>
              <Routes>
                <Route path={'/settings'} element={<Settings/>}/>
              </Routes>
            </div>
          }/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
