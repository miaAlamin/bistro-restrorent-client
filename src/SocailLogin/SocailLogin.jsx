import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { authContex } from "../Provider/AuthProvider";
import useAxiosPiblic from "../Hooks/useAxiosPiblic";
import { useNavigate } from "react-router-dom";

const SocailLogin = () => {

    const {googleLogin} = useContext(authContex)
    const useSecureAxiosPiblic  = useAxiosPiblic()
    const navigate = useNavigate()


    const googleLoginHandle = ()=>{
        googleLogin()
        .then(res=>{
            console.log(res.user)
            const userInfo = {

                email: res.user?.eamil,
                name: res.user?.displayName

            }

            useSecureAxiosPiblic.post('/user', userInfo)
            .then(res=>{
                console.log(res.data)
                navigate('/')
            })
        })

    }
    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={googleLoginHandle} className="btn">
            <FcGoogle />
            Button
            
            </button>
        </div>
    );
};

export default SocailLogin;