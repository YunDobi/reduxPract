import React, {useState} from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashbord';
import Preferences from './components/Preferences/Preferences';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login/Login';
import useToken from './components/App/useToken';


// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App() {
  const {token, setToken} = useToken()

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/preferences" element={<Preferences />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
