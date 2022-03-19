import httpClient from '../helpers/req-lib'

async function getCourse(courseId) {
    return httpClient.get(`/courses/course/${courseId}`)
        .then((res) => {
            return res.data
        }).catch((err) => {
            throw new Error(err)
        })
}

export default getCourse;