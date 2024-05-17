import { useQuery } from "react-query";
import { authLogin } from "../api/api";

const useAuth = () => {
  const { data, isLoading, isError } = useQuery("authLogIn", authLogin, {
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useAuth;
