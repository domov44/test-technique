import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes/routes';
import SearchPage from './pages/privates/Search';
import PersonPage from './pages/privates/Person';
import PlanetPage from './pages/privates/Planet';
import SpeciesPage from './pages/privates/Species';
import StarshipPage from './pages/privates/Starship';
import VehiclePage from './pages/privates/Vehicle';
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
          <Route path={ROUTES.PERSON_DETAIL(":id")} element={<PersonPage />} />
          <Route path={ROUTES.PLANET_DETAIL(":id")} element={<PlanetPage />} />
          <Route path={ROUTES.SPECIES_DETAIL(":id")} element={<SpeciesPage />} />
          <Route path={ROUTES.STARSHIP_DETAIL(":id")} element={<StarshipPage />} />
          <Route path={ROUTES.VEHICLE_DETAIL(":id")} element={<VehiclePage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;