/**
 * @param {string} endpoint - path of the URL contains the BD name and query
 * @param {string} method - http method (GET | POST | PATCH | PUT | DELETE)
 * @param {Object} data - optional body
 * */
export const postman = async (endpoint: string, method: string, data = null): Promise<any> => {
  const url: string = `https://api.mockaroo.com/api/${endpoint}&key=${import.meta.env.VITE_APP_API_KEY}`;
  const headers = {
    'ContentType': 'application/json',
  };
  try {
    const response = await fetch(
      url,
      {
        method,
        body: data ? JSON.stringify(data) : null,
        headers,
      },
    );

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return response.json();
  } catch (err) {
    console.error('Fetch data error: ', err);
    return null;
  }
}