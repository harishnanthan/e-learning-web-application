const updateHeaderInterceptor = (axiosInstance) => {
    axiosInstance.interceptors.request.use((config) => {
       const jwtToken = "eLearningAppTokenPre!" + sessionStorage.getItem('auth');
       config.headers["Authorization"] = jwtToken;
       return config;
    },(error) => {
       console.log(error)
    });
};

export default updateHeaderInterceptor;