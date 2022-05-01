import httpClient from '../helpers/req-lib'

async function getStreamLink(videoId) {
    return httpClient.get(`/video/${videoId}`)
        .then((res) => {
            return res.data
        }).catch((err) => {
            throw new Error(err)
        })
}

export default getStreamLink;