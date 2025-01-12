import { useContext } from "react";
import { authContex } from "../Provider/AuthProvider";


const UserHome = () => {
    const {user} = useContext(authContex)
    return (
        <div>
            <h1 className="text-3xl font-bold">
                <span>Hi Welcome</span>
                {
                    user?.displayName ? user?.displayName : 'Back'
                }
            </h1>
        </div>
    );
};

export default UserHome;