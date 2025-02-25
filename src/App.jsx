import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';

function App() {
  const { islight } = useSelector((state) => state.theme); // Get theme state from Redux

  useEffect(() => {
    // Set the theme dynamically on the <html> element
    document.documentElement.setAttribute('data-theme', islight ? 'caramellatte' : 'black'); 
  }, [islight]); // Runs every time islight changes

  return <RouterProvider router={router} />;
}

export default App;
