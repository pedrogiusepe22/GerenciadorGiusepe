import React from "react";
import './index.css'; // Certifique-se de que o caminho para o CSS está correto

const Sobre = () => {
    return (
        <div className="container">
            <h1>Sobre o Criador</h1>
            <p className="description">
                Este site foi desenvolvido por um estudante de tecnologia e finanças.
            </p>
            <div className="info">
                <p><strong>Nome:</strong> Pedro Giusepe</p>
                <p><strong>Idade:</strong> 21 anos</p>
                <p><strong>Curso:</strong> Acadêmico de Engenharia de Software da FAG</p>
                <p><strong>E-mail:</strong> pgcapelina@minha.fag.edu.br</p>
            </div>
            <a href="/" className="button">Voltar para Home</a>
        </div>
    );
}

export default Sobre;
