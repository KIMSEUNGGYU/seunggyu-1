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
    console.log(`${url} GET Error: ${error}`);
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
    console.log(`${url} POST Error: ${error}`);
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

// function deleteData(url) {
//   return fetch(url, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// }

interface Cookies {
  [key: string]: string;
}

const COOKIE_SPLIT_CHAR = '; ';

export const cookieParser = (cookies = ''): Cookies =>
  cookies.split(COOKIE_SPLIT_CHAR).reduce((parsingCookies: Cookies, cookieLine) => {
    const [key, value] = cookieLine.split('=');
    parsingCookies[key] = value;
    return parsingCookies;
  }, {});
