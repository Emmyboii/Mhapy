import { Routes, Route, useLocation } from 'react-router-dom';
import Authentication from "./Pages/Authentication";
import Dashboard from './Pages/Dashboard';
import Sidebar from './Components/Sidebar';
import NotFound from './Pages/NotFound';

function App() {

  const location = useLocation()

  const hideSidebar = location.pathname === '/signup' || location.pathname === '/login' || location.pathname === '/verifyemail'

  return (
    <div className="flex w-full">
      {!hideSidebar && (
        <Sidebar />
      )}
      <div className={hideSidebar ? 'w-full' : 'w-full'}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/*" element={<Authentication />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
