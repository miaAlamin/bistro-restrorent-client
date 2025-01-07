import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { FaTrash, FaUser, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AlllUsers = () => {

    const axiosSecure = useAxiosSecure()


    const {data: allusers = [], refetch} = useQuery({
        queryKey: ["allusers"],
        queryFn: async ()=> {
           
            const res = await axiosSecure.get('/allusers')
       
            return res.data

        },
        // headers: {
        //     authorization : `Bearar ${localStorage.getItem('access-token')}`
        // }
    })





 const deleteHandle = (id)=>{

        
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                    }).then((result) => {
                       

                        axiosSecure.delete(`/allusers/${id}`)

                        .then(res=>{
                            if(res.data.deletedCount > 0){

                                refetch()
                                
                                if (result.isConfirmed) {
                                    Swal.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success"
                                    });
                                    }

                            }
                        })

                        
                    });

        
    }


    const HandleMakeAdmin = (user)=>{

        axiosSecure.patch(`allusers/admin/${user._id}`)
        .then(result=>{
            console.log(result.data)

            if(result.data.modifiedCount > 0){
                refetch()

                
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })

    }
    return (
        <div>
            <div className="flex justify-evenly">
                <h1 className="text-3xl font-bold">All Users</h1>
                <h1 className="text-3xl font-bold">Total Users: {allusers.length}</h1>
            </div>

            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role </th>
        <th>Action </th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        allusers.map((user, index)=>   <tr key={user._id}>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>

            <td>
               { user.role === 'admin' ? 'Admin' : <button onClick={()=>HandleMakeAdmin(user)} className="p-4 bg-orange-300 rounded-md">
                <FaUsers></FaUsers>

                </button>}
            </td>
            <td>
                <button onClick={()=>deleteHandle(user._id)}>
                <FaTrash></FaTrash>

                </button>
            </td>
          </tr>)
      }
    
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AlllUsers;