import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './styles/normalize.css'
import GlobalStyle from './styles/createGlobalStyle.jsx'

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import Error from './pages/Error';

//import PersonList from './api/test';
//import { DataUser } from './components/Grosgrostest';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyle/>
    <Routes>
          <Route path="/" element={<><Header/><Home/></>}/>
          <Route path="/sign-in" element={<><Header/><SignIn/></>}/>
          <Route path="/user/:id" element={<><Header/><User/></>}/>
          <Route path="*" element={<><Header/><Error/></>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
