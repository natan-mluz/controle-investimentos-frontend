import React from 'react';

// A lista recebe 3 props:
// 1. investments: O array com os investimentos a serem exibidos.
// 2. onEdit: A função a ser chamada quando o botão "Editar" é clicado.
// 3. onDelete: A função a ser chamada quando o botão "Excluir" é clicado.
function InvestmentList({ investments, onEdit, onDelete }) {
    
    // Função para formatar o valor como moeda brasileira
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    };

    // Função para formatar a data para o padrão brasileiro
    const formatDate = (dateString) => {
        // Adiciona a opção timeZone
        return new Date(dateString).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    };

    return (
        <div className="investment-list-container">
            <h2>Meus Investimentos</h2>
            <table className="investment-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Valor Investido</th>
                        <th>Data do Investimento</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Se não houver investimentos, exibe uma mensagem */}
                    {investments.length === 0 ? (
                        <tr>
                            <td colSpan="5" style={{ textAlign: 'center' }}>
                                Nenhum investimento cadastrado.
                            </td>
                        </tr>
                    ) : (
                        // Mapeia cada investimento para uma linha <tr> na tabela
                        investments.map(inv => (
                            <tr key={inv.id}>
                                <td>{inv.nome}</td>
                                <td>{inv.tipo}</td>
                                <td>{formatCurrency(inv.valor)}</td>
                                <td>{formatDate(inv.data)}</td>
                                <td>
                                    <button onClick={() => onEdit(inv)} className="btn-edit">Editar</button>
                                    <button onClick={() => onDelete(inv.id)} className="btn-delete">Excluir</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default InvestmentList;