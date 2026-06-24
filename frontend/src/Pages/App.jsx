import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registro from './Registro';
import InicioSesion from './Inicio de sesion';
import RestablecerContraseña from './RestablecerContraseña';
import Recuperar from './recuperar';
import DashboardAdmin from './Dashboard_admin';
import DashboardUsuario from './Dashboard_usuario';
import Landing from './Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<InicioSesion />} />
        <Route path="/restablecer/:uid/:token" element={<RestablecerContraseña />} />
        <Route path="/recuperar" element={<Recuperar />} />
        <Route path="/dashboard_admin" element={<DashboardAdmin />} />
        <Route path="/dashboard_usuario" element={<DashboardUsuario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;