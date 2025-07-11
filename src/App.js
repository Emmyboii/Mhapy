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
import Notes from './Pages/Notes';
import API from './Pages/API';
import Settings from './Pages/Settings';
import Homework from './Pages/Homework';
import ClientHomework from './Components/ClientHomework';
import CreateHomework from './Components/CreateHomework';
import PublicRoute from './Components/PubilcRoute';
import ProtectedRoutes from './Components/ProtectedRoutes';
import AddTeamMember from './Pages/AddTeamMember';

function App() {

  const location = useLocation()

  const [openSidebar, setOpenSidebar] = useState(false)
  const [api, setApi] = useState(false)

  useEffect(() => {
    if (openSidebar || api) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openSidebar, api])

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
          <Sidebar setApi={setApi} />
          <SMSidebar setApi={setApi} openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        </>

      )}
      <div className={hideSidebar ? 'w-full' : 'w-full'}>
        <div onClick={() => setOpenSidebar(!openSidebar)} className={openSidebar ? 'bg-black/30 w-full z-40 absolute top-0 min-h-screen' : ''}></div>
        {!hideSidebar && (
          <NavBar setNotification={setNotification} notification={notification} dashboardFrame={dashboardFrame} setOpenSidebar={setOpenSidebar} />
        )}
        {location.pathname !== '/message' ? (
          <div onClick={() => setNotification(false)} className="sm:py-6 py-0 sm:px-[27px] px-3 pb-10">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />

              <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<Dashboard setOpenSidebar={setOpenSidebar} dashboardFrame={dashboardFrame} setDashboardFrame={setDashboardFrame} />} />
                <Route path="/therapist" element={<Therapist />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/pricing/*" element={<Pricing />} />
                <Route path="/calender" element={<Calender />} />
                <Route path="/notes/*" element={<Notes />} />
                <Route path="/add-team-members" element={<AddTeamMember />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/homework" element={<Homework />} />
                <Route path="/clients/:id" element={<ClientInfo />} />
                <Route path="/clientHomework/:id" element={<ClientHomework />} />
                <Route path="homework/createhomework" element={<CreateHomework />} />
              </Route>
              <Route path="/auth/*" element={<PublicRoute><Authentication /></PublicRoute>} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
            <API setApi={setApi} api={api} />
          </div>
        ) : (
          <div onClick={() => setNotification(false)}>
            <Routes>
              <Route path="/message" element={<Message />} />
            </Routes>
            <API setApi={setApi} api={api} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
