import httpClient from '../helpers/req-lib'

async function verify(data) {
    return httpClient.post('/verify', data)
        .then((res) => {
            return res.data
        }).catch((err) => {
            throw new Error(err)
        })
}

export default verify;