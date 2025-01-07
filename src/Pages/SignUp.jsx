import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { authContex } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPiblic from "../Hooks/useAxiosPiblic";
import SocailLogin from "../SocailLogin/SocailLogin";

const SignUp = () => {
const {creatUser, UpdateProfile} = useContext(authContex)
const navigate = useNavigate()

const useSecureAxiosPiblic = useAxiosPiblic()







    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        console.log(data)
        creatUser(data.email, data.password)
        .then(result=>{
            console.log(result.user)
        })
        UpdateProfile(data.name, data.photoUrl)
        .then( ()=>{

          const userInfo ={
            name: data.name,
            email: data.email
          }
            
          useSecureAxiosPiblic.post('/user', userInfo)
          .then(res=>{
            if(res.data.insertedId){

              Swal.fire({
                title: "SignUp Successfully",
                showClass: {
                popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                `
                },
                hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                `
                }
            });

            navigate('/')

            }
          })
           
            
                
        })
        .catch(error=>{
            console.log(error)
        })
    
    }
   

    return (
     <>
         <Helmet>
                     <title>Bistro Boss | SignUp</title>
                 </Helmet>
           <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name",{ required: true })} name="name" placeholder="Enter your Name" className="input input-bordered" required />
                {errors.name && <span className="text-red-500">This Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email",{ required: true })} name="email" placeholder="email" className="input input-bordered" required />
                {errors.email && <span className="text-red-500">This email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input type="text" {...register("photoUrl",{ required: true })} name="photoUrl" placeholder="PhotoURL" className="input input-bordered" required />
                {errors.photoUrl && <span className="text-red-500">This PhotoURL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password",{ required: true,
                     minLength:6,
                      maxLength: 20,
                      pattern: /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}/

                      
                      })} name="password" placeholder="password" className="input input-bordered" required />

                {errors.password?.type === 'minLength' && <span className="text-red-500">password must be 6 charactor</span>}
                {errors.password?.type === "required" && (<p className="text-red-500" role="alert">password is required</p>)}
                
                {errors.password?.type === 'maxLength' && <span className="text-red-500">password must be less then 20  charactor</span>}
                {errors.password?.type === "pattern" && (<p className="text-red-500" role="alert">password must be have one uppercase one lowercase one spacal charactor and a number</p>)}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value='SignUp'/>
                
                <p>Have a Account ? <Link className="text-blue-600" to='/login'>Login</Link></p>

                <SocailLogin></SocailLogin>
              </div>
            </form>
          </div>
        </div>
      </div>
     </>
    );
};

export default SignUp;