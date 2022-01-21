require('dotenv').config()

async function login(credentials) {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include'
    }).then(data => 
      data.json()
    ).then((data) => {
      if(data.status === 200) {
        sessionStorage.setItem('auth', data.token);
      }
      return data;
    }).catch((err) => {
      throw new Error(err)
    })
}

export default login;