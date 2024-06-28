

async function generate(link) {
  let url = 'https://ezly.site'; 
  
  try {
   
    url = `${url}/api/website/handler`;

  
    const x = await postData(url, { to: link });

   
    if (!x.data.to.startsWith('http://') && !x.data.to.startsWith('https://')) {
      x.data.to = `https://${x.data.to}`;
    }

    return `${url}/r?r=${x.data.from}` ; 


  } catch (error) {
    console.error('Error calling backend route:', error);
  }
}

async function postData(url, data) {
  const fetch = await import('node-fetch');
  const response = await fetch.default(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

async function fetchData(url) {
  const fetch = await import('node-fetch');
  const response = await fetch.default(url);
  return response.json();
}

module.exports = {
  generate,
};



