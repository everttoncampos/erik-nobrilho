import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AutomotiveLandingPage from './pages/AutomotiveLandingPage';
import LinktreePage from './pages/LinktreePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AutomotiveLandingPage />} />
        <Route path="/linktree" element={<LinktreePage />} />
        <Route path="/alguma-coisa" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
