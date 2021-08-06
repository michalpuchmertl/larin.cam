import { useEffect } from 'react';
import './App.scss';
import { ROUTES, RenderRoutes } from './utils/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContextProvider from './providers/UserContext';

function App() {
  return (
    <div className='App'>
      <UserContextProvider>
        <RenderRoutes routes={ROUTES}></RenderRoutes>
      </UserContextProvider>
    </div>
  );
}

export default App;
