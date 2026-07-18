import { useEffect, useState } from "react";
import api from "../api/api";

function Agendamentos() {

    const [agendamentos, setAgendamentos] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [servicos, setServicos] = useState([]);

    const [clienteId, setClienteId] = useState("");
    const [servicoId, setServicoId] = useState("");
    const [data, setData] = useState("");
    const [horario, setHorario] = useState("");
    const [observacao, setObservacao] = useState("");


    async function carregarClientes() {
        try {
            const response = await api.get("/clientes/");
            setClientes(response.data);
        } catch (error) {
            console.log(error);
        }
    }


    async function carregarServicos() {
        try {
            const response = await api.get("/servicos/");
            setServicos(response.data);
        } catch (error) {
            console.log(error);
        }
    }


    async function carregarAgendamentos() {
        try {
            const response = await api.get("/agendamentos/");
            setAgendamentos(response.data);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        carregarClientes();
        carregarServicos();
        carregarAgendamentos();
    }, []);


    async function cadastrarAgendamento() {

        try {

            await api.post("/agendamentos/", {

                cliente_id: Number(clienteId),
                servico_id: Number(servicoId),
                data,
                horario,
                observacao

            });


            alert("Agendamento criado com sucesso!");

            setClienteId("");
            setServicoId("");
            setData("");
            setHorario("");
            setObservacao("");

            carregarAgendamentos();


        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.detail ||
                "Erro ao criar agendamento"
            );

        }
    }


    async function excluirAgendamento(id) {

        try {

            await api.delete(`/agendamentos/${id}`);

            alert("Agendamento excluído!");

            carregarAgendamentos();


        } catch (error) {

            console.log(error);

            alert("Erro ao excluir agendamento");

        }

    }


    return (
        <div>

            <h1>Agendamentos</h1>


            <h2>Novo Agendamento</h2>


            <select
                value={clienteId}
                onChange={(e) => setClienteId(e.target.value)}
            >

                <option value="">
                    Selecione o cliente
                </option>

                {clientes.map((cliente) => (

                    <option 
                        key={cliente.id}
                        value={cliente.id}
                    >
                        {cliente.nome}
                    </option>

                ))}

            </select>


            <br /><br />


            <select
                value={servicoId}
                onChange={(e) => setServicoId(e.target.value)}
            >

                <option value="">
                    Selecione o serviço
                </option>


                {servicos.map((servico) => (

                    <option
                        key={servico.id}
                        value={servico.id}
                    >
                        {servico.nome}
                    </option>

                ))}


            </select>


            <br /><br />


            <input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
            />


            <br /><br />


            <input
                type="time"
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
            />


            <br /><br />


            <input
                type="text"
                placeholder="Observação"
                value={observacao}
                onChange={(e) => setObservacao(e.target.value)}
            />


            <br /><br />


            <button onClick={cadastrarAgendamento}>
                Salvar Agendamento
            </button>


            <hr />


            <h2>Lista de Agendamentos</h2>


            {agendamentos.map((agendamento) => (

                <div key={agendamento.id}>

                    <p>
                        Cliente ID: {agendamento.cliente_id}
                    </p>

                    <p>
                        Serviço ID: {agendamento.servico_id}
                    </p>

                    <p>
                        Data: {agendamento.data}
                    </p>

                    <p>
                        Horário: {agendamento.horario}
                    </p>

                    <p>
                        Status: {agendamento.status}
                    </p>


                    <button
                        onClick={() => excluirAgendamento(agendamento.id)}
                    >
                        Excluir
                    </button>


                    <hr />

                </div>

            ))}


        </div>
    );
}


export default Agendamentos;