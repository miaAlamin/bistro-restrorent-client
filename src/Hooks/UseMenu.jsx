import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosPiblic from "./useAxiosPiblic";


const UseMenu = () => {
    
        // const [menu, setMenue] = useState([])
        // const [loading, setLoading] = useState(true)

        const axiosSecurepiblic = useAxiosPiblic()


    
        // useEffect( ()=>{
        //     fetch('http://localhost:5000/mune')
        //     .then(res=> res.json())
        //     .then(data=> {
                
        //         setMenue(data)
        //         setLoading(false)
        //     })
        // },[])


        const {data: menu = [], isPending: loading, refetch } = useQuery({
            queryKey: ["menu"],
            queryFn: async ()=>{

                const res = await axiosSecurepiblic.get('/mune')
                return res.data

            }
        })

        return [menu, loading, refetch]
};

export default UseMenu;