import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";


function Cadastro() {

    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [empresaId, setEmpresaId] = useState("");


    async function cadastrar() {

        try {

            await api.post("/auth/cadastro", {
                nome,
                email,
                senha,
                empresa_id: Number(empresaId)
            });


            alert("Cadastro realizado com sucesso!");

            navigate("/login");


        } catch (error) {

            console.log(error);

           let mensagem = "Erro ao realizar cadastro";

if (error.response?.data?.detail) {

    if (typeof error.response.data.detail === "string") {
        mensagem = error.response.data.detail;
    } else {
        mensagem = JSON.stringify(error.response.data.detail);
    }

}

            alert(mensagem);

        }

    }


    return (
        <div>

            <h1>AFP Agendamentos</h1>

            <h2>Criar Cadastro</h2>


            <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <br /><br />


            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />


            <br /><br />


            <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />


            <br /><br />


            <input
                type="number"
                placeholder="ID da empresa"
                value={empresaId}
                onChange={(e) => setEmpresaId(e.target.value)}
            />


            <br /><br />


            <button onClick={cadastrar}>
                Cadastrar
            </button>


            <br /><br />


            <button onClick={() => navigate("/login")}>
                Já tenho conta
            </button>


        </div>
    );
}


export default Cadastro;