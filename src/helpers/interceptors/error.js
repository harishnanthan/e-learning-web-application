import history from "../history";

const errorInterceptor = (axiosInstance) => {
    axiosInstance.interceptors.response.use((response) => {
        if(response.data.status === 401 || response.data.status === 403) {
            console.log("Unauthorized", response)
            let currentPage = window.location.pathname;
            history.push(`/login?back-to=${currentPage}`);
            history.push(currentPage);
            history.back();
        }
        return response;
    },(error) => {
        if (error?.status?.code === 401 || error?.status?.code === 403) {
            //Unauthorized
            //redirect to Login
        } else {
            //dispatch your error in a more user friendly manner
            // if (DEBUG) {
            //easier debugging
            //     console.group("Error");
            //     console.log(error);
            //     console.groupEnd();
            // }
        }
        return error
    });
};

export default errorInterceptor;