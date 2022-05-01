import httpClient from '../helpers/req-lib'

async function getCourseWithVideos(courseId) {
    return httpClient.get(`/courses/course/${courseId}?includeVideo=true`)
        .then((res) => {
            return res.data
        }).catch((err) => {
            throw new Error(err)
        })
}

export default getCourseWithVideos;