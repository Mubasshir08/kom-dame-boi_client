import { useState } from 'react';
import router from './routes/routes';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './shared/navbar/Navbar';

function App() {
  return (
      <RouterProvider router={router}/>
  )
}

export default App
