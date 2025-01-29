// app/quotes/page.js

'use client'; // Diretiva que indica que este é um componente de cliente

import React, { useState } from 'react';

// Função assíncrona para buscar as quotes
async function fetchQuotes() {
  const res = await fetch('https://api.api-ninjas.com/v1/quotes', {
    method: 'GET',
    headers: {
      'X-Api-Key': 'zYqYcInDlJg89G3lypVGFg==6GUs8i3flH8KDwbc', // Sua chave da API
    },
  });

  // Verifica se a resposta é válida
  if (!res.ok) {
    throw new Error(`Erro ao buscar quotes: ${res.statusText}`);
  }

  return res.json(); // Retorna as quotes em formato JSON
}

// Componente que renderiza as quotes
export default function QuotesPage() {
  const [quote, setQuote] = useState(null); // Estado para armazenar uma quote
  const [loading, setLoading] = useState(false); // Estado de carregamento

  const handleGetQuote = async () => {
    setLoading(true);
    try {
      const quotes = await fetchQuotes();
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]; // Pega uma quote aleatória
      setQuote(randomQuote); // Atualiza o estado com a quote aleatória
    } catch (error) {
      console.error('Erro ao carregar quotes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Quote Aleatória</h1>
      <button
        onClick={handleGetQuote}
        disabled={loading} // Desabilita o botão enquanto está carregando
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {loading ? 'Carregando...' : 'Pegar uma Quote'}
      </button>

      {quote && (
        <div style={{ marginTop: '20px' }}>
          <p style={{ fontStyle: 'italic' }}>"{quote.quote}"</p>
          <p>- {quote.author}</p>
        </div>
      )}
    </div>
  );
}