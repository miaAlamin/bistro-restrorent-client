import { useContext } from "react";
import { authContex } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

import useAxiosSecure from "../Hooks/useAxiosSecure";
import UseCarts from "../Hooks/UseCarts";


const FoodCard = ({item}) => {

    const {name, image, price, recipe, _id} = item


    const {user} = useContext(authContex)
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = UseCarts()


    {
      
    }
    const addtoCardHandle = (item)=>{
     

      if(user && user?.email){
        console.log(item, user.email)

        const cartsItem = {
          menuId: _id,
          price,
          name,
          image,
          email: user?.email,


        }

        axiosSecure.post('/carts', cartsItem)
        .then(res=>{
          console.log(res.data)
          if(res.data.insertedId){
             Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name}`,
              showConfirmButton: false,
              timer: 1500
             });

             refetch()
          }

         
        })
      }
      else{
        
        Swal.fire({
          title: "You are not logined",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from:location}})
          }
        });
      }
    }
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <p className="bg-slate-900 absolute top-3 text-white right-6 px-4">$:{price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          
          <div className="card-actions justify-end">
          <button onClick={()=>addtoCardHandle(item)} className="btn border-0 border-b-4 bg-slate-300 border-yellow-300 uppercase btn-outline mt-4">order Now</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;