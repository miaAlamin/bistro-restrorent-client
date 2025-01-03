import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { authContex } from "../Provider/AuthProvider";

const UseCarts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(authContex);

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    enabled: !!user?.email, // Only run query if user email exists
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default UseCarts;
