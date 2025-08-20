import React, { useState, useEffect } from 'react';

// O formulário recebe duas props:
// 1. onSave: A função que será executada quando o formulário for submetido.
// 2. initialData: Os dados de um investimento existente, caso seja uma edição.
function InvestmentForm({ onSave, initialData }) {
    const initialState = {
        nome: '',
        tipo: '',
        valor: '',
        data: ''
    };

    const [formData, setFormData] = useState(initialState);

    // useEffect é usado para observar mudanças na prop 'initialData'.
    // Se 'initialData' mudar (ou seja, o usuário clicou em "Editar"),
    // o estado do formulário é preenchido com os dados do investimento.
    useEffect(() => {
        if (initialData) {
            // Formata a data para o formato YYYY-MM-DD
            const formattedData = {
                ...initialData,
                data: initialData.data.split('T')[0] 
            };
            setFormData(formattedData);
        } else {
            // Se não há initialData, reseta o formulário para o estado inicial (limpo)
            setFormData(initialState);
        }
    }, [initialData]);

    // Atualiza o estado do formulário conforme o usuário digita
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Lida com a submissão do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await onSave(formData); // Impede o recarregamento da página
        if (success) {
            setFormData(initialState); // Reseta o formulário após salvar com sucesso
        }
    };

    return (
        <form onSubmit={handleSubmit} className="investment-form">
            <h2>{initialData ? 'Editar Investimento' : 'Cadastrar Novo Investimento'}</h2>
            <input
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Nome do Investimento (ex: Ação PETR4)"
                required
            />
            <input
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                placeholder="Tipo (Ação, Fundo, Título)"
                required
            />
            <input
                type="number"
                name="valor"
                value={formData.valor}
                onChange={handleChange}
                placeholder="Valor Investido (R$)"
                min="0.01"
                step="0.01"
                required
            />
            <input
                type="date"
                name="data"
                value={formData.data}
                onChange={handleChange}
                required
            />
            <div className="form-actions">
                <button type="submit">{initialData ? 'Atualizar' : 'Cadastrar'}</button>
                {/* Botão para limpar o formulário (reseta o estado) */}
                {initialData && <button type="button" onClick={() => setFormData(initialState)}>Cancelar Edição</button>}
            </div>
        </form>
    );
}

export default InvestmentForm;