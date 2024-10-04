import axios from 'axios'
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

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
    const {logOut} = useAuth()
    const navigate = useNavigate()

    // interceptor
    axiosSecure.interceptors.response.use(
        res =>{
            console.log('asar age ami ddksi', res)
            return res
        }
        , 

       
      async (error) => {

            if(error.response.status === 401 || error.response.status === 403){
                 await logOut()
                navigate('/login')
            }
            return Promise.reject(error)
        }
    )


    return axiosSecure
};

export default useAxiosSecure;