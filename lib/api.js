export const fetchQuotes = async () => {
    const response = await fetch("https://api.api-ninja.com/v1/quotes", {
      headers: {
        "Authorization": "Bearer zYqYcInDlJg89G3lypVGFg==6GUs8i3flH8KDwbc"
      }
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch quotes');
    }
  
    const data = await response.json();
    return data;
  };