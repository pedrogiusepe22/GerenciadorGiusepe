import React, { useState } from "react";

interface DespesasProps {
    despesas: { valor: number; descricao: string }[];
    adicionarDespesa: (valor: number, descricao: string) => void;
    removerDespesa: (index: number) => void;
    editarDespesa: (index: number, valor: number, descricao: string) => void; // Nova prop para editar despesa
}

const Despesas: React.FC<DespesasProps> = ({ despesas, adicionarDespesa, removerDespesa, editarDespesa }) => {
    const [valor, setValor] = useState<number>(0);
    const [descricao, setDescricao] = useState<string>("");
    const [indexEditando, setIndexEditando] = useState<number | null>(null); // Para controlar qual despesa está sendo editada

    const handleAdicionar = () => {
        if (indexEditando !== null) {
            editarDespesa(indexEditando, valor, descricao);
            setIndexEditando(null);
        } else {
            adicionarDespesa(valor, descricao);
        }
        setValor(0);
        setDescricao("");
    };

    const iniciarEdicao = (index: number) => {
        const despesa = despesas[index];
        setValor(despesa.valor);
        setDescricao(despesa.descricao);
        setIndexEditando(index);
    };

    return (
        <div className="despesas-container">
            <h2>Despesas</h2>
            <input
                type="number"
                value={valor}
                onChange={(e) => setValor(Number(e.target.value))}
                placeholder="Adicionar despesa"
            />
            <input
                type="text"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Descrição da despesa"
            />
            <button onClick={handleAdicionar}>
                {indexEditando !== null ? "Atualizar Despesa" : "Adicionar Despesa"}
            </button>
            <ul>
                {despesas.map((despesa, index) => (
                    <li key={index}>
                        {despesa.valor} - {despesa.descricao} 
                        <button onClick={() => iniciarEdicao(index)}>Editar</button>
                        <button onClick={() => removerDespesa(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Despesas;
