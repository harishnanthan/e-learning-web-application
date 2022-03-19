import httpClient from '../helpers/req-lib'

async function register(data) {
    return httpClient.post('/register', data)
        .then((res) => {
            return res.data
        }).catch((err) => {
            throw new Error(err)
        })
}

export default register;