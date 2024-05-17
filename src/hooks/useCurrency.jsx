import React, { useContext, useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { getCurrencies } from "../api/api";

const useCurrency = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: "allCurrencies",
    queryFn: () => getCurrencies(),
    onSuccess: (data) => {
      staleTime: 30000;
    },
  });

  return { data, isError, isLoading };
};

export default useCurrency;
