import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto bg' >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
