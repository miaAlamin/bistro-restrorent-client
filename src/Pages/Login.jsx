import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { authContex } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import SocailLogin from '../SocailLogin/SocailLogin';

const Login = () => {

const [disabled, setDisable] = useState(true)
const {signInUser} = useContext(authContex)

const location = useLocation()
const navigate = useNavigate()

const from = location.state?.from?.pathname || '/'

    const loginformHandle =(e)=>{
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
        signInUser(email, password)
        .then(result=>{
          console.log(result.user)

          
            Swal.fire({
              title: "Login Successfully",
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

            navigate(from, {replace: true})
        })
        .catch(error=>{
          console.log(error.message)
        })

    }

    useEffect( ()=>{
        loadCaptchaEnginge(6);
    })

    const validateHandle =(e)=>{

        const user_captcha_value = e.target.value;
        

        if(validateCaptcha(user_captcha_value)){
            setDisable(false)
        }
        

    }
    return (
     <>
      <Helmet>
                <title>Bistro Boss | Login</title>
         </Helmet>
         <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={loginformHandle} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
               
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input type="text" onBlur={validateHandle} name="captcha" placeholder="type the captcha" className="input input-bordered" required />
                <button  className='btn btn-outline '>validate</button>
              </div>
              <div className="form-control mt-6">
                <input type='submit' value='submit' disabled={disabled}  className="btn btn-primary"/>
                <p>Do not an Account please ? <Link className='text-blue-600' to='/signup'>Register</Link></p>

                <SocailLogin></SocailLogin>
              </div>
            </form>
          </div>
        </div>
      </div>
     </>
    );
};

export default Login;