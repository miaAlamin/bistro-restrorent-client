import { FaTrashAlt } from "react-icons/fa";
import UseCarts from "../Hooks/UseCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const Cart = () => {

    const [cart, refetch] = UseCarts()
    const totalPrice = cart.reduce( (total, item)=> total + item.price, 0)
    const axiosSecure = useAxiosSecure()



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
                       

                        axiosSecure.delete(`/carts/${id}`)

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

    return (
        <div>
        <div className="flex justify-evenly">
            <h1 className="text-4xl">Items :{cart.length} </h1>
            <h1 className="text-4xl">Total :{totalPrice} </h1>
             <Link to='/dashboard/payment'>
            <button  className="btn btn-primary">pay</button>
            
            </Link> 
            {/* <button disabled className="btn btn-primary">pay</button> */}
             */
          
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
        <th>Name</th>
        <th>Price </th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        cart.map((item, index) =>    <tr key={item._id}>
            <th>
            {index + 1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={item.image}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  
                  
                </div>
              </div>
            </td>
            <td>
            <div className="font-bold">{item.name}</div>
             
            </td>
            <td>{item.price}</td>
            <th>
              <button onClick={()=>deleteHandle(item._id)} className="btn btn-ghost btn-lg">
                <FaTrashAlt></FaTrashAlt>
              </button>
            </th>
          </tr>)
      }
    
   
    </tbody>
   
  </table>
</div>

        </div>
    );
};

export default Cart;