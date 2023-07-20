
import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import router from './routes/router';



function App() {
 
  return <RouterProvider router={createBrowserRouter(router)} />

}
export default App;