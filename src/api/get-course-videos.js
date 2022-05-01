import httpClient from '../helpers/req-lib'

async function getCourseVideos(courseId) {
    return httpClient.get(`/courses/videos/${courseId}`)
        .then((res) => {
            return res.data
        }).catch((err) => {
            throw new Error(err)
        })
}

export default getCourseVideos;