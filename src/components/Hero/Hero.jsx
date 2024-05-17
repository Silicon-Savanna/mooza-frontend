import React, { useState } from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import classes from "./ContainedInput.module.css";
import useCurrency from "../../hooks/useCurrency";
import { PuffLoader } from "react-spinners";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const currencies = [
  {
    value: "Cash USD",
    label: "Cash USD",
  },
];

const Hero = () => {
  const { data, isError, isLoading } = useCurrency();
  const [code, setCode] = useState("");
  const [code2, setCode2] = useState("");
  const [amountPay, setAmountPay] = useState("");
  const [currencyPay, setCurrencyPay] = useState("");
  const [currencyReceived, setCurrencyReceived] = useState("");

  const handleChangeCurrencyPay = (event) => {
    setCurrencyPay(event.target.value);
    setCode(event.target.value);
  };

  const handleChangeCurrencyReceive = (event) => {
    setCurrencyReceived(event.target.value);
    setCode2(event.target.value);
  };

  const handleChangeAmountPay = (event) => {
    setAmountPay(event.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(code);
    console.log(code2);
    console.log(amountPay)
};

  return (
    <section className="hero-wrapper">
      <div className="paddings  flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            {/* <div className="orange-circle" /> */}
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Reliable,
              <br />
              Safe and Affordable
              <br />
              Financial Services.
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span style={{ color: "#fff" }}>
              Moozacash is a financial digital platform that provides unmatched
              customer experience for its clients.
            </span>
            <span style={{ color: "#fff" }}>
              As we grow MoozaCash Africa, it is has been refined to penetrate
              the financial services market to the “last veins of toes”.
            </span>
          </div>
          <button
            style={{ width: "50%" }}
            onClick={() => redirectToLink("https://wa.me/+263712887872")}
            className="button"
          >
            Send Money Now <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </div>

        <div className="flexCenter hero-right" style={{ marginTop: "30px" }}>
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="hero-image-container"
          >
            <div className="hero-exchangeRate">
              <div className="hero-exchangeRateTitle flexCenter">
                Exchange Rate
              </div>
              <h2 className="hero-exchangeRateTitle flexCenter">
                13.06 ZIG = 1 USD
              </h2>
            </div>
            <div className="hero-exchangeRateForm">
              <form   onSubmit={handleSubmit}>
                {isLoading ? (
                  <div
                    className="wrapper flexCenter"
                    style={{ height: "60vh" }}
                  >
                    <PuffLoader
                      height="80"
                      width="80"
                      radius={1}
                      color="#4066ff"
                      aria-label="puff-loading"
                    />
                  </div>
                ) : (
                  <>
                    {isError ? (
                      <></>
                    ) : (
                      <>
                        <FormControl
                          sx={{ m: 0, width: "18ch" }}
                          variant="standard"
                          style={{ marginTop: 30 }}
                          color="primary"
                          focused
                        >
                          <InputLabel htmlFor="standard-adornment-amount">
                            You Pay
                          </InputLabel>
                          <Input
                            required
                            id="standard-adornment-amount"
                            margin="normal"
                            placeholder="Enter amount"
                            onChange={handleChangeAmountPay}
                            endAdornment={
                              <InputAdornment position="end">
                                {code}
                              </InputAdornment>
                            }
                            startAdornment={
                              <InputAdornment position="start">
                                $
                              </InputAdornment>
                            }
                          />
                        </FormControl>

                        <FormControl
                          sx={{ m: 1, width: "7ch" }}
                          variant="standard"
                          style={{ marginTop: 46 }}
                          color="primary"
                          focused
                        >
                          <Select
                            required
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={currencyPay}
                            onChange={handleChangeCurrencyPay}
                          >
                            {data.map((item) => {
                              return (
                                <MenuItem value={item.code}>
                                  {item.country}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>

                        <FormControl
                          sx={{ m: 1, width: "5ch" }}
                          variant="standard"
                          style={{ marginTop: 45 }}
                          color="primary"
                          focused
                        >
                          <Avatar
                            sx={{ width: "5ch" }}
                            src="./R.png"
                            variant="square"
                          ></Avatar>
                        </FormControl>

                        <FormControl
                          sx={{ m: 0, width: "18ch" }}
                          variant="standard"
                          style={{ marginTop: 40 }}
                          color="primary"
                          focused
                        >
                          <InputLabel htmlFor="standard-adornment-amount">
                            They Receive
                          </InputLabel>
                          <Input
                            placeholder="Enter amount"
                            id="standard-adornment-amount"
                            margin="normal"
                            endAdornment={
                              <InputAdornment position="end">
                                {code2}
                              </InputAdornment>
                            }
                            startAdornment={
                              <InputAdornment position="start">
                                $
                              </InputAdornment>
                            }
                          />
                        </FormControl>

                        <FormControl
                          sx={{ m: 1, width: "7ch" }}
                          variant="standard"
                          style={{ marginTop: 56 }}
                          color="primary"
                          focused
                        >
                          <Select
                            required
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={currencyReceived}
                            onChange={handleChangeCurrencyReceive}
                          >
                            {data.map((item) => {
                              return (
                                <MenuItem value={item.code}>
                                  {item.country}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>

                        <FormControl
                          sx={{ m: 1, width: "5ch" }}
                          variant="standard"
                          style={{ marginTop: 55 }}
                          color="primary"
                          focused
                        >
                          <Avatar
                            sx={{ width: "5ch" }}
                            src="./R.png"
                            variant="square"
                          ></Avatar>
                        </FormControl>

                        <TextField
                          focused
                          color="primary"
                          style={{ marginTop: 40 }}
                          id="standard-select-currency-native"
                          select
                          label="Receive method"
                          defaultValue="USD"
                          SelectProps={{
                            native: true,
                          }}
                          helperText="Please select your currency"
                          variant="standard"
                        >
                          {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </TextField>

                        <button
                          className="button_"
                          type="submit"
                          style={{ marginTop: 20 }}
                        >
                          Calculate <i className="fa fa-user"></i>
                        </button>
                      </>
                    )}
                  </>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const redirectToLink = (link) => {
  window.open(link, "_blank");
};
