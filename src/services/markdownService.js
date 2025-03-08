// services/markdownService.js

export async function convertMarkdown(markdown) {
  console.log(process.env.BACKEND_URL)
    const response = await fetch(process.env.REACT_APP_BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ markdown }),
    });
    return await response.json(); 
  }
  