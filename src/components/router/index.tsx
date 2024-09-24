import React, { useState } from "react";
import Home from "../../pages/home";
import Sobre from "../../pages/sobre";
import Login from "../../pages/login";
import Gerenciador from "../../pages/gerenciador"; // Importar a página Gerenciador

enum RouterPages {
    'home' = 'home',
    'login' = 'login',
    'sobre' = 'sobre',
    'gerenciador' = 'gerenciador' // Manter apenas o Gerenciador
}

const Router = () => {
    const [getPaginaAtual, setPaginaAtual] = useState<RouterPages>(RouterPages.home);

    const renderizarBotoes = () => (
        <div>
            <button onClick={() => setPaginaAtual(RouterPages.home)}>Início</button>
            <button onClick={() => setPaginaAtual(RouterPages.login)}>Login</button>
            <button onClick={() => setPaginaAtual(RouterPages.sobre)}>Sobre</button>
            <button onClick={() => setPaginaAtual(RouterPages.gerenciador)}>Gerenciador</button> {/* Botão Gerenciador */}
        </div>
    );

    const renderizarPagina = () => {
        switch (getPaginaAtual) {
            case RouterPages.home: return <Home />;
            case RouterPages.login: return <Login />;
            case RouterPages.sobre: return <Sobre />;
            case RouterPages.gerenciador: return <Gerenciador />; // Renderizar a página Gerenciador
            default: return <Home />;
        }
    };

    return (
        <div>
            {renderizarBotoes()}
            {renderizarPagina()}
        </div>
    );
};

export default Router;
