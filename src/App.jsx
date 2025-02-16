import { useState } from 'react';
import Route from './routes/Route';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './shared/navbar/Navbar';

function App() {
  return (
    <div className='container'>
      <Navbar /> {/* shared component */}
      <div className='divider -mt-1 '></div>
      <RouterProvider router={Route}/>
    </div>
  )
}

export default App
