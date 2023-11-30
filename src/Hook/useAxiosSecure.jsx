import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth"

const axiosSecure= axios.create({
    baseURL: 'https://medical-camp-server-site.vercel.app'
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut}= useAuth()
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request must stop by interceptor', token)
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        // Do something with request error
        return Promise.reject(error)
    })
    // interceptore 401 and 403
    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, async (error) => {
        // console.log(error)
        // Do something with request error
        const status = error.response.status
        console.log("status error", status)
        // for 401 and 403 logOut the user and move the login page
        if(status === 401 || status === 403){
            await logOut
            navigate('/login')
        }
        return Promise.reject(error)
    })
    return axiosSecure
};

export default useAxiosSecure;