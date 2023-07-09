import React, { useContext } from 'react';
import {  Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import AuthContext from './ContextProvider/Context';
import Card from './Components/Card/Card';
import Rankings from './Components/Ranking/Rankings';
import PageNotFound from './Components/Home/PageNotFound';

const App = () => {
  const {loggedIn}  = useContext(AuthContext);

  return (
  <div className='App'>
    {loggedIn ? <Navbar  /> : null}
    <Routes>
      <Route path='/'  element={loggedIn ? <Home /> : <Login />} />
      <Route path='/addtodish'  element={loggedIn ? <Card /> : <Navigate to="/" />} />
      <Route path='/rankings'  element={loggedIn ? <Rankings /> :<Navigate to="/" />} />
      <Route path='*'  element={<PageNotFound />} />
    </Routes>
  </div>
  );
};

export default App;
