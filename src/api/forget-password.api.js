import httpClient from '../helpers/req-lib'

async function forgetPassword(data) {
    return httpClient.post('/forget-password', data)
        .then((res) => {
            return res.data
        }).catch((err) => {
            throw new Error(err)
        })
}

export default forgetPassword;