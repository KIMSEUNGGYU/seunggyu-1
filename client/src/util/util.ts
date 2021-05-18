const crypto = require('crypto');

export function makeSHA256(data: string) {
  const secret = 'MySecretKey1$1$234';
  const hashed = crypto.createHmac('sha256', secret).update(data).digest('hex');
  return hashed;
}

export async function Get(url = '') {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error(`${url} GET Error: ${error}`);
  }
}

export function Post(url = '', data = {}) {
  try {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(`${url} POST Error: ${error}`);
  }
}

function Put(url = '', data = {}) {
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

function Delete(url = '') {
  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function getDate() {
  const date = new Date();
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
}
