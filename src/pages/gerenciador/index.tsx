import React, { useState } from "react";
import Receitas from "../../components/Receitas/Receitas";
import Despesas from "../../components/Despesas/Despesas";
import "./index.css"; // Ajuste o caminho se necessário



const Gerenciador: React.FC = () => {
    const [receitas, setReceitas] = useState<{ valor: number; descricao: string }[]>([]);
    const [despesas, setDespesas] = useState<{ valor: number; descricao: string }[]>([]);
    const [salario, setSalario] = useState<number>(0);
    const [saldoFinal, setSaldoFinal] = useState<number | null>(null);

    const adicionarReceita = (valor: number, descricao: string) => {
        setReceitas([...receitas, { valor, descricao }]);
    };

    const adicionarDespesa = (valor: number, descricao: string) => {
        setDespesas([...despesas, { valor, descricao }]);
    };

    const removerReceita = (index: number) => {
        const novasReceitas = receitas.filter((_, i) => i !== index);
        setReceitas(novasReceitas);
    };

    const removerDespesa = (index: number) => {
        const novasDespesas = despesas.filter((_, i) => i !== index);
        setDespesas(novasDespesas);
    };

    const editarReceita = (index: number, valor: number, descricao: string) => {
        const novasReceitas = [...receitas];
        novasReceitas[index] = { valor, descricao };
        setReceitas(novasReceitas);
    };

    const editarDespesa = (index: number, valor: number, descricao: string) => {
        const novasDespesas = [...despesas];
        novasDespesas[index] = { valor, descricao };
        setDespesas(novasDespesas);
    };

    const calcularSaldoFinal = () => {
        const totalReceitas = receitas.reduce((acc, curr) => acc + curr.valor, 0);
        const totalDespesas = despesas.reduce((acc, curr) => acc + curr.valor, 0);
        const saldo = salario + totalReceitas - totalDespesas;
        setSaldoFinal(saldo);
    };

    return (
        <div className="gerenciador-container">
            <h1>Gerenciador de Orçamento</h1>
            <div>
                <input
                    type="number"
                    value={salario}
                    onChange={(e) => setSalario(Number(e.target.value))}
                    placeholder="Salário Inicial"
                />
                <span>Coloque seu saldo inicial</span>
            </div>
            <Receitas 
                receitas={receitas} 
                adicionarReceita={adicionarReceita} 
                removerReceita={removerReceita} 
                editarReceita={editarReceita} // Passando função de editar
            />
            <Despesas 
                despesas={despesas} 
                adicionarDespesa={adicionarDespesa} 
                removerDespesa={removerDespesa} 
                editarDespesa={editarDespesa} // Passando função de editar
            />
            <button onClick={calcularSaldoFinal}>Calcular Saldo Final</button>
            {saldoFinal !== null && (
                <div>
                    <h2>Saldo Final: R$ {saldoFinal}</h2>
                    <h3>Resumo:</h3>
                    <p>Total de Receitas: R$ {receitas.reduce((acc, curr) => acc + curr.valor, 0)}</p>
                    <p>Total de Despesas: R$ {despesas.reduce((acc, curr) => acc + curr.valor, 0)}</p>
                </div>
            )}
        </div>
    );
};

export default Gerenciador;
