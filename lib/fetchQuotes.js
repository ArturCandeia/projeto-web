export const fetchQuotes = async () => {
    const res = await fetch('https://api.api-ninjas.com/v1/quotes', {
      headers: {
        'X-Api-Key': 'zYqYcInDlJg89G3lypVGFg==6GUs8i3flH8KDwbc',
      },
    });
    const data = await res.json();
    return data;
  };