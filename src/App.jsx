import React,{useState,useEffect} from 'react';
import { Grid } from '@mui/material';
import { Outlet } from 'react-router';
import Home from './pages/Home';

function App() {
 
  return (
    <div>
      <Home/>
    </div>
  )
}

export default App;