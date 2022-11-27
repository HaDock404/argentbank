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
import Test from './pages/Test'
//import PersonList from './api/test';
//import { DataUser } from './components/Grosgrostest';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyle/>
    <Header/>
    <Routes>
          <Route path="/" element={<><Home/></>}/>
          <Route path="/sign-in" element={<><SignIn/></>}/>
          <Route path="/user" element={<><User/></>}/>
          <Route path="/test" element={<><Test/></>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
