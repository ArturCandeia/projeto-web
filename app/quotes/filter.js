'use client'; // A diretiva "use client" para usar hooks

import React, { useState } from 'react';
import { fetchQuotes } from '../../lib/api';

const FilterQuotes = () => {
  const [quote, setQuote] = useState(null);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const quotes = await fetchQuotes(query);
      if (quotes.length === 0) {
        setError('Não há nenhuma quote com essa frase');
      } else {
        setQuote(quotes);
        setError('');
      }
    } catch (err) {
      setError('Erro ao buscar quotes');
    }
  };

  return (
    <div>
      <h1>Buscar Quotes</h1>
      <input
        type="text"
        placeholder="Digite uma frase"
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Buscar</button>

      {error && <p>{error}</p>}

      {quote && (
        <ul>
          {quote.map((quote, index) => (
            <li key={index}>
              <p>{quote.quote}</p>
              <p><strong>{quote.author}</strong> - {quote.category}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterQuotes;