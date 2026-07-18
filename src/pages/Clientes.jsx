import { useEffect, useState } from "react";
import api from "../api/api";


function Clientes() {

    const [clientes, setClientes] = useState([]);
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");

    async function carregarClientes() {
        try {
            const response = await api.get("/clientes/");
            setClientes(response.data);
        }
catch (error) {
    console.log("Erro completo:", error);
    console.log("Resposta da API:", error.response?.data);

    alert(JSON.stringify(error.response?.data, null, 2));
}
    }

    useEffect(() => {
        carregarClientes();
    }, []);

    async function cadastrarCliente() {
    try {
        await api.post("/clientes/", {
            nome,
            telefone,
            email
        });

        alert("Cliente cadastrado com sucesso!");

        setNome("");
        setTelefone("");
        setEmail("");

        carregarClientes();

    } catch (error) {
        console.log(error);
        alert("Erro ao cadastrar cliente");
    }
}
    async function excluirCliente(id) {
    try {

        await api.delete(`/clientes/${id}`);

        carregarClientes();

    } catch (error) {
        console.log("Erro:", error);
        console.log("Resposta da API:", error.response?.data);
        alert(JSON.stringify(error.response?.data, null, 2));
}
    }
}


    return (
        <div>

            <h1>Clientes</h1>

            <h2>Novo Cliente</h2>

<input
    type="text"
    placeholder="Nome"
    value={nome}
    onChange={(e) => setNome(e.target.value)}
/>

<br /><br />

<input
    type="text"
    placeholder="Telefone"
    value={telefone}
    onChange={(e) => setTelefone(e.target.value)}
/>

<br /><br />

<input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
/>

<br /><br />

<button onClick={cadastrarCliente}>
    Salvar Cliente
</button>

            <hr />

            {
                clientes.map((cliente) => (
                    <div key={cliente.id}>
                        <h3>
                            {cliente.nome}
                        </h3>

                        <p>
                            Telefone: {cliente.telefone}
                        </p>

                        <p>
                            Email: {cliente.email}
                        </p>

                        <button
                            onClick={() => excluirCliente(cliente.id)}
                        >
                            Excluir
                        </button>

                    </div>
                ))
            }

        </div>
    );


export default Clientes;