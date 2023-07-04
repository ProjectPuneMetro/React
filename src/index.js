import React from 'react';
import ReactDOM from 'react-dom/client';
import Controller from './Screens';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Screens/navbar';
import SignIn from './Screens/signin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar></Navbar>
 <Controller>
  
 </Controller>
 </BrowserRouter>
);

