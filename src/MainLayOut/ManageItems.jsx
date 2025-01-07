import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitlel from "../components/SectionTitlel";
import UseMenu from "../Hooks/UseMenu";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

;

const ManageItems = () => {

    const[menu, , refetch] = UseMenu()

    const axiosSecure = useAxiosSecure()





    const deleteHandle = (menu)=>{


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async (result) => {
            if (result.isConfirmed) {

               
                const res = await axiosSecure.delete(`/mune/${menu._id}`)
                console.log(res.data)

                if(res.data.deletedCount > 0){
                    refetch()
                    
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${menu.name} deleted`,
                    showConfirmButton: false,
                    timer: 1500
                });
                }
          
            }
          });


    }
    return (
        <div>
            <div>
                <SectionTitlel Heading='mange all items' subHeading='hurry Up'></SectionTitlel>
            </div>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        menu.map((menu, index)=>  <tr key={menu._id}>
            <th>
            {
                index + 1
            }
    
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={menu.image}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                 
                 
                </div>
              </div>
            </td>
            <td>
            <div className="font-bold">{menu.name}</div>
              <br />
              
            </td>
            <td>{menu.price}</td>
            <th>
             <Link to={`/dashboard/updateItems/${menu._id}`}>
             <button  className="p-4 bg-orange-300 rounded-md">
                              <FaEdit></FaEdit>
              
              </button>
             </Link>
            </th>
              <td>
                <button onClick={()=>deleteHandle(menu)}>
                <FaTrash></FaTrash>

                </button>
                </td>

          </tr> )
      }
     
      {/* row 2 */}
  
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default ManageItems;