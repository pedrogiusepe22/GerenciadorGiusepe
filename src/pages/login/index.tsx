import React, { useState } from "react";
import './index.css'; // Certifique-se de que o caminho para o CSS está correto

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [loggedInEmail, setLoggedInEmail] = useState<string | null>(null); // Estado para armazenar o e-mail logado

    const handleLogin = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Simulação do login
        if (email.includes("@")) {
            setLoggedInEmail(email); // Define o e-mail logado
            setEmailError(""); // Limpa qualquer erro
        } else {
            setEmailError("O e-mail deve conter o caractere '@'.");
        }
    };

    const handleGoogleLogin = () => {
        // Simulação do login com Google
        setLoggedInEmail("user@google.com"); // Simula um login com Google
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const emailValue = e.target.value;
        setEmail(emailValue);

        if (emailValue && !emailValue.includes("@")) {
            setEmailError("O e-mail deve conter o caractere '@'.");
        } else {
            setEmailError(""); // Limpa o erro se o e-mail for válido
        }
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <form onSubmit={handleLogin}>
                <div className="login-input-group">
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    {emailError && <span className="error-message">{emailError}</span>}
                </div>
                <div className="login-input-group">
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Entrar</button>
            </form>
            <button onClick={handleGoogleLogin} className="google-button">Entrar com Google</button>

            {loggedInEmail && (
                <div className="logged-in-email">
                    <span>Logado como: {loggedInEmail}</span>
                </div>
            )}
        </div>
    );
}

export default Login;
