import httpClient from '../helpers/req-lib'

async function getCourses(data) {
    
    let urlParameters = data ? Object.entries(data).map(e => e.join('=')).join('&') : '';

    return httpClient.get(`/courses/get-courses?${urlParameters}`)
        .then((res) => {
            return res.data
        }).catch((err) => {
            throw new Error(err)
        })
}

export default getCourses;