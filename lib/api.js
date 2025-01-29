export const fetchQuotes = async (filter = '') => {
    const response = await fetch("https://api.api-ninja.com/v1/quotes", {
      headers: {
        "Authorization": "Bearer zYqYcInDlJg89G3lypVGFg==6GUs8i3flH8KDwbc"
      }
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch quotes');
    }
  
    const data = await response.json();
  
    // Filtra as quotes com base na frase fornecida
    if (filter) {
      return data.filter(quote =>
        quote.quote.toLowerCase().includes(filter.toLowerCase())
      );
    }
  
    return data; // Retorna todas as quotes se nenhum filtro for fornecido
  };