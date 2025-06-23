import { Routes, Route } from 'react-router-dom';
import Authentication from "./Pages/Authentication";
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/*" element={<Authentication />} />
      </Routes>
    </div>
  );
}

export default App;
