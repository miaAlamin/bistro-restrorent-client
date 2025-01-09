import { useContext } from "react";
import { authContex } from "../Provider/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const PaymentHistory = () => {

    const {user} =  useContext(authContex);
    const axiosSecure = useAxiosSecure()

    const {data: payments=[]} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Price</th>
        <th>TransationId</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        payments.map((pay,index)=> <tr key={pay._id} className="bg-base-200">
            <th>{index + 1}</th>
            <td>{pay.price}</td>
            <td>{pay.transaction}</td>
            <td>{pay.status}</td>
          </tr>)
      }
  
      {/* row 2 */}
  
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;