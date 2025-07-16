import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes/routes';
import SearchPage from './pages/privates/Search';
import EntityPage from './pages/privates/EntityPage';
import Login from './pages/publics/Login';
import { ProtectedRoute } from './hooks/protectedRoutes';
import { Layout } from './layouts/Layout';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<SearchPage />} />
          <Route path="/:category/:id" element={<EntityPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;