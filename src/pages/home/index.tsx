import React from "react";
import './index.css'; 

const Home: React.FC = () => {
    return (
        <div className="container">
            <h1>Bem-vindo ao Gerenciador de Orçamento Pessoal</h1>
            <p className="description">
                Este site permite que você gerencie sua renda e despesas mensais de forma fácil e eficiente.
                Aqui, você pode adicionar, editar e excluir suas entradas, mantendo um controle total sobre
                suas finanças. Navegue pelas páginas para explorar todas as funcionalidades que oferecemos!
            </p>
            <a href="/login" className="button">Começar</a>
        </div>
    );
}

export default Home;
