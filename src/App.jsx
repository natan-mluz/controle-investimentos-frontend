import React, { useState, useEffect } from 'react';
import api from './api';
import InvestmentForm from './components/InvestmentForm';
import InvestmentList from './components/InvestmentList';
import './App.css';

function App() {
  const [investments, setInvestments] = useState([]);
  const [editingInvestment, setEditingInvestment] = useState(null);

  const fetchInvestments = async () => {
    try {
      const response = await api.get('/investimentos');
      setInvestments(response.data);
    } catch (error) {
      console.error("Erro ao buscar investimentos:", error);
      alert("Falha ao carregar investimentos.");
    }
  };

  useEffect(() => {
    fetchInvestments();
  }, []);

  const handleSave = async (investmentData) => {
    try {
      if (editingInvestment) {
        await api.put(`/investimentos/${editingInvestment.id}`, investmentData);
        alert("Investimento atualizado com sucesso!");
      } else {
        await api.post('/investimentos', investmentData);
        alert("Investimento adicionado com sucesso!");
      }
      setEditingInvestment(null);
      fetchInvestments(); // recarrega a lista após salvar
      return true;
    } catch (error) {
      console.error("Erro ao salvar investimento:", error);
      alert("Falha ao salvar investimento.");
      return false;
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este investimento?")) {
      try {
        await api.delete(`/investimentos/${id}`);
        alert("Investimento excluído com sucesso!");
        fetchInvestments(); // recarrega a lista
      } catch (error) {
        console.error("Erro ao excluir:", error);
        alert("Erro ao excluir investimento.");
      }
    }
  };

  const handleEdit = (investment) => {
    setEditingInvestment(investment);
    window.scrollTo(0, 0); // rola para o topo da pagina ao editar
  };

  const cancelEdit = () => {
    setEditingInvestment(null);
  }

  return (
    <div className="container">
      <h1>Controle de Investimentos</h1>

      {/* formulario */}
      <InvestmentForm 
        onSave={handleSave}
        initialData={editingInvestment}
        onCancel={cancelEdit} />

      <hr />

      {/* tabela de listagem*/}
      <h2>Meus Investimentos</h2>
      <InvestmentList 
        investments={investments} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />
    </div>
  );
}

export default App;