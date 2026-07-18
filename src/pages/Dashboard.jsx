import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    return (
        <div>

            <h1>AFP Agendamentos</h1>

            <h2>Dashboard</h2>

            <p>
                Bem-vindo ao painel da empresa!
            </p>

            <hr />

            <div>
                <h3>Resumo</h3>

                <div>
                    <h4>Clientes</h4>
                    <p>0</p>
                </div>

                <div>
                    <h4>Serviços</h4>
                    <p>0</p>
                </div>

                <div>
                    <h4>Agendamentos hoje</h4>
                    <p>0</p>
                </div>

            </div>

            <hr />

            <nav>
                <button onClick={() => navigate("/clientes")}>
                   Clientes
                </button>

                <button onClick={() => navigate("/servicos")}>
                    Serviços
                </button>

                <button onClick={() => navigate("/agendamentos")}>  
                    Agendamentos
                </button>
            </nav>

        </div>
    );
}

export default Dashboard;