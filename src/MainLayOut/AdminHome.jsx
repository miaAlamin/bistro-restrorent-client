import { useContext } from "react";
import { authContex } from "../Provider/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaDollarSign, FaList, FaUsers } from "react-icons/fa";


const AdminHome = () => {
    const {user} = useContext(authContex)
    const axiosSecure  = useAxiosSecure()

    const {data: status = []}  = useQuery({
        queryKey: ['admin-status'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/admin-status')
            return res.data;

        }
    })
    return (
        <div>
            <h1 className="text-3xl font-bold">
            <span>Hi Welcome</span>
            {
                user?.displayName ? user?.displayName : 'Back'
            }
            </h1>

         <div className="stats shadow">
            <div className="stat">
                <div className="stat-figure text-secondary">
            <FaDollarSign className="text-5xl"></FaDollarSign>
                </div>
                <div className="stat-title">Revenue</div>
                <div className="stat-value"> $ {status.revenue}</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
        <FaUsers className="text-5xl"></FaUsers>
                </div>
                <div className="stat-title">Users</div>
                <div className="stat-value">{status.users}</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
              <FaList className="text-5xl"></FaList>
                </div>
                <div className="stat-title">Menue Items</div>
                <div className="stat-value">{status.menuItems}</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
            <div className="stat">
                <div className="stat-figure text-secondary">
              <FaList className="text-5xl"></FaList>
                </div>
                <div className="stat-title">Orders</div>
                <div className="stat-value">{status.orders}</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
            </div>
        </div>
    );
};

export default AdminHome;