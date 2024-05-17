import { useQuery } from "react-query";
import { getCharges } from "../api/api";

const useCharges = () => {
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