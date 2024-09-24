import React, { useState } from "react";

interface ReceitasProps {
    receitas: { valor: number; descricao: string }[];
    adicionarReceita: (valor: number, descricao: string) => void;
    removerReceita: (index: number) => void;
    editarReceita: (index: number, valor: number, descricao: string) => void; // Nova prop para editar receita
}

const Receitas: React.FC<ReceitasProps> = ({ receitas, adicionarReceita, removerReceita, editarReceita }) => {
    const [valor, setValor] = useState<number>(0);
    const [descricao, setDescricao] = useState<string>("");
    const [indexEditando, setIndexEditando] = useState<number | null>(null); // Para controlar qual receita está sendo editada

    const handleAdicionar = () => {
        if (indexEditando !== null) {
            editarReceita(indexEditando, valor, descricao);
            setIndexEditando(null);
        } else {
            adicionarReceita(valor, descricao);
        }
        setValor(0);
        setDescricao("");
    };

    const iniciarEdicao = (index: number) => {
        const receita = receitas[index];
        setValor(receita.valor);
        setDescricao(receita.descricao);
        setIndexEditando(index);
    };

    return (
        <div className="receitas-container">
            <h2>Receitas</h2>
            <input
                type="number"
                value={valor}
                onChange={(e) => setValor(Number(e.target.value))}
                placeholder="Adicionar receita"
            />
            <input
                type="text"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Descrição da receita"
            />
            <button onClick={handleAdicionar}>
                {indexEditando !== null ? "Atualizar Receita" : "Adicionar Receita"}
            </button>
            <ul>
                {receitas.map((receita, index) => (
                    <li key={index}>
                        {receita.valor} - {receita.descricao} 
                        <button onClick={() => iniciarEdicao(index)}>Editar</button>
                        <button onClick={() => removerReceita(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Receitas;
