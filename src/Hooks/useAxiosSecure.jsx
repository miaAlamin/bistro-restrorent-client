import axios from "axios";
import { useContext } from "react";
import { authContex } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";






 const axiosSecure = axios.create ({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
const {logOut} = useContext(authContex)
const navigate = useNavigate()


    axiosSecure.interceptors.request.use(function (config){
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config;
    },function(error){
        return Proimce.reject(error)
    })

    axiosSecure.interceptors.response.use(function(response){
        return response
    },async (error)=>{
        const status = error.response.status;
        if(status === 401 || status == 403){

            await logOut()

            navigate('/login')

        }
        console.log('status error is interceptors', status)
        return Proimce.reject(error)
    })

    return axiosSecure;
    
};

export default useAxiosSecure;