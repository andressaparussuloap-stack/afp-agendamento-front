import { useEffect, useState } from "react";
import api from "../api/api";

function Servicos() {

    const [servicos, setServicos] = useState([]);
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");


    async function carregarServicos() {
        try {
            const response = await api.get("/servicos/");
            setServicos(response.data);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        carregarServicos();
    }, []);


    async function cadastrarServico() {
        try {

            await api.post("/servicos/", {
                nome,
                descricao,
                valor: Number(valor)
            });


            alert("Serviço cadastrado com sucesso!");

            setNome("");
            setDescricao("");
            setValor("");

            carregarServicos();


        } catch (error) {
            console.log(error);

            alert(
                error.response?.data?.detail ||
                "Erro ao cadastrar serviço"
            );
        }
    }


    async function excluirServico(id) {

        try {

            await api.delete(`/servicos/${id}`);

            alert("Serviço excluído!");

            carregarServicos();


        } catch (error) {

            console.log(error);

            alert("Erro ao excluir serviço");

        }
    }


    return (
        <div>

            <h1>Serviços</h1>


            <h2>Cadastrar Serviço</h2>


            <input
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />


            <br /><br />


            <input
                placeholder="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            />


            <br /><br />


            <input
                type="number"
                placeholder="Valor"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
            />


            <br /><br />


            <button onClick={cadastrarServico}>
                Salvar Serviço
            </button>


            <hr />


            <h2>Lista de Serviços</h2>


            {servicos.map((servico) => (

                <div key={servico.id}>

                    <h3>{servico.nome}</h3>

                    <p>{servico.descricao}</p>

                    <p>Valor: R$ {servico.valor}</p>


                    <button
                        onClick={() => excluirServico(servico.id)}
                    >
                        Excluir
                    </button>


                    <hr />

                </div>

            ))}


        </div>
    );
}


export default Servicos;