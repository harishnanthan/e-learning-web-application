import httpClient from '../helpers/req-lib'

async function resetPassword(data) {
    return httpClient.post('/reset-password', data)
        .then((res) => {
            return res.data
        }).catch((err) => {
            throw new Error(err)
        })
}

export default resetPassword;