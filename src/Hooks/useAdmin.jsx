import { useContext } from "react";
import { authContex } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const { user } = useContext(authContex); // Get user from context
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery(
        {
            queryKey: ["isAdmin", user?.email], // Use a stable key that doesn’t depend on `isAdmin`
            queryFn: async () => {
                if (!user?.email) return false; // Avoid unnecessary requests
                const res = await axiosSecure.get(`/allusers/admin/${user?.email}`);
                return res.data?.admin; // Return the admin status
            },
            enabled: !!user?.email, // Only run query if user email exists
        }
    );
    console.log(isAdmin)

    return [isAdmin, isAdminLoading];
};

export default useAdmin;
