import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function handleLogin(e) {
    e.preventDefault();

    try {
        const response = await api.post(
            "/auth/login",
            {
                email: email,
                senha: senha
            }
        );

        console.log(response.data);

        localStorage.setItem(
            "token",
            response.data.access_token
        );

        alert("Login realizado!");
        
        navigate("/dashboard");


    } catch (error) {
        console.log("ERRO COMPLETO:", error);
        console.log("RESPOSTA API:", error.response?.data);

        alert(
            error.response?.data?.detail ||
            "Erro no login"
        );
    }
}


    return (
        <div>
            <h1>Login AFP Agendamento</h1>

            <form onSubmit={handleLogin}>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />

                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <br />

                <button type="submit">
                    Entrar
                </button>

            </form>

        </div>
    );
}

export default Login;
