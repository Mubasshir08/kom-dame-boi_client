import { useState } from 'react';
import Route from './routes/Route';
import { RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <RouterProvider router={Route}/>
    </div>
  )
}

export default App
