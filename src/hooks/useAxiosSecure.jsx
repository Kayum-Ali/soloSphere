import axios from 'axios'

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    // headers: {
    //     'Content-Type': 'application/json',
    // },
    // validateStatus: (status) => status >= 200 && status < 300,
    // timeout: 10000,
    // maxRedirects: 0,
    // maxBodyLength: 10000000, // 10MB
   
})
const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;