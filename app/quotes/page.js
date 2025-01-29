'use client'; // Diretiva que indica que este é um componente de cliente

import React, { useState, useEffect } from 'react';

// Função assíncrona para buscar as quotes
async function fetchQuotes() {
  const res = await fetch('https://api.api-ninjas.com/v1/quotes', {
    method: 'GET',
    headers: {
      'X-Api-Key': 'zYqYcInDlJg89G3lypVGFg==6GUs8i3flH8KDwbc', // Sua chave da API
    },
  });

  if (!res.ok) {
    throw new Error(`Erro ao buscar quotes: ${res.statusText}`);
  }

  const quotes = await res.json();
  return quotes;
}

// Componente para exibir quote aleatória
export default function QuotesPage() {
  const [quote, setQuote] = useState(null); // Estado para armazenar a quote
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(''); // Estado para armazenar mensagens de erro

  // Função que busca uma quote aleatória
  const fetchRandomQuote = async () => {
    setLoading(true);
    setError(''); // Limpa qualquer mensagem de erro anterior
    try {
      const quotes = await fetchQuotes();
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    } catch (error) {
      setError('Erro ao carregar quotes');
      console.error('Erro ao carregar quotes:', error);
    } finally {
      setLoading(false);
    }
  };

  // Busca a primeira quote aleatória quando a página é carregada
  useEffect(() => {
    fetchRandomQuote(); // Chama a função quando o componente é montado
  }, []); // O array vazio garante que a função seja chamada apenas uma vez

  return (
    <div>
      <h1>Quote Aleatória</h1>

      {/* Exibe a mensagem de erro se houver */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Exibe a quote ou mensagem de carregamento */}
      {loading ? (
        <p>Carregando...</p>
      ) : (
        quote && (
          <div style={{ marginTop: '20px' }}>
            <p style={{ fontStyle: 'italic' }}>"{quote.quote}"</p>
            <p>- {quote.author}</p>
          </div>
        )
      )}

      {/* Botão para gerar uma nova quote aleatória */}
      <button
        onClick={fetchRandomQuote}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Nova Quote
      </button>
    </div>
  );
}
