import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "https://moozacash.com/api/v1",
});

export const authLogin = async () => {
  try {
    const response = await api.post(`/token/fetch`, {
      username: "timothy",
      password: "timothy",
    });
    return response.data;
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};

export const getCurrencies = async () => {
  try {
    const response = await api.get(
      `/currency/`,
      {
        timeout: 10 * 1000,
      },
      {
        headers: {
          "X-CSRFToken":
            "27NfuuY4o7y4p5S0DqLDQIarKQYYap1kBYYjHhsaSzjiGF4pZmBULAHax3LQt9LH",
          accept: "application/json",
        },
      }
    );

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    // toast.error("Something went wrong, Please try again");
    throw error;
  }
};

export const getCharges = async (data) => {
  console.log(data)
  try {
    const response = await api.post(
      `/conversions/`,
      data,
      {
        headers: {
          "X-CSRFToken":
            "27NfuuY4o7y4p5S0DqLDQIarKQYYap1kBYYjHhsaSzjiGF4pZmBULAHax3LQt9LH",
          accept: "application/json",
        },
      }
    );
    console.log(response)
    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Exchanging currency not allowed");
    throw error;
  }
};
