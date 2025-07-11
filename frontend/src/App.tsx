import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes/routes';
import HelloPage from './pages/publics/HelloPage';

function App() {
  return (
    <Routes>
      {/* Routes publiques */}
      <Route path={ROUTES.HOME} element={<HelloPage />} />
    </Routes>
  );
}

export default App;