import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Authentication from "./Pages/Authentication";
import Dashboard from './Pages/Dashboard';
import Sidebar from './Components/Sidebar';
import NotFound from './Pages/NotFound';
import ClientInfo from './Components/ClientInfo';
import { useEffect, useState } from 'react';
import SMSidebar from './Components/SMSidebar';
import NavBar from './Components/NavBar';
import Therapist from './Pages/Therapist';
import Profile from './Pages/Profile';
import Message from './Pages/Message';
import Pricing from './Pages/Pricing';
import Calender from './Pages/Calender';

function App() {

  const location = useLocation()

  const [openSidebar, setOpenSidebar] = useState(false)

  useEffect(() => {
    if (openSidebar) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openSidebar])

  const [dashboardFrame, setDashboardFrame] = useState(() => {
    return localStorage.getItem('dashboardFrame') || 'portal'
  })

  const [notification, setNotification] = useState(false)

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        setNotification(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('dashboardFrame', dashboardFrame);
  }, [dashboardFrame]);

  const hideSidebar = location.pathname.startsWith('/auth') || location.pathname === '/404';

  return (
    <div className="flex w-full">
      {!hideSidebar && (
        <>
          <Sidebar />
          <SMSidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        </>

      )}
      <div className={hideSidebar ? 'w-full' : 'w-full'}>
        <div onClick={() => setOpenSidebar(!openSidebar)} className={openSidebar ? 'bg-black/30 w-full z-30 absolute top-0 min-h-screen' : ''}></div>
        {!hideSidebar && (
          <NavBar setNotification={setNotification} notification={notification} dashboardFrame={dashboardFrame} setOpenSidebar={setOpenSidebar} />
        )}
        {location.pathname !== '/message' ? (
          <div className="py-6 sm:px-[27px] px-3 pb-10">
            <Routes>
              <Route path="/" element={<Dashboard setOpenSidebar={setOpenSidebar} dashboardFrame={dashboardFrame} setDashboardFrame={setDashboardFrame} />} />
              <Route path="/therapist" element={<Therapist />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/calender" element={<Calender />} />
              <Route path="/clients/:id" element={<ClientInfo setOpenSidebar={setOpenSidebar} />} />
              <Route path="/auth/*" element={<Authentication />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
          </div>
        ) : (
          <div>
            <Routes>
              <Route path="/message" element={<Message />} />
            </Routes>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
