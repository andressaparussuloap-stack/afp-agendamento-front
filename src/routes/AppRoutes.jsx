import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Empresas from "../pages/Empresas";
import Clientes from "../pages/Clientes";
import Servicos from "../pages/Servicos";
import Agendamentos from "../pages/Agendamentos";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Login />} />

                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/empresas" element={<Empresas />} />

                <Route path="/clientes" element={<Clientes />} />
                
                <Route path="/servicos" element={<Servicos />} />

                <Route path="/agendamentos" element={<Agendamentos />} />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;