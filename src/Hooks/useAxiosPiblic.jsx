import axios from "axios";



const useSecureAxiosPiblic = axios.create({
    baseURL:'http://localhost:5000'
})

const useAxiosPiblic = () => {
    return useSecureAxiosPiblic
};

export default useAxiosPiblic;