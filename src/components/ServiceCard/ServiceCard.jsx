import React from "react";
import "./ServiceCard.css";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";


const ServiceCard = ({ card }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="r-card" style={{color: "#fff",background: "#2949c6"}}>
        <div className="flexColCenter">
          <Avatar sx={{ width: 76, height: 76 }}>{card.avater}</Avatar>
          <span className="serviceHeading">
            {card.heading}
          </span>
          <span className="serviceText fleCenter">
          {card.detail}
          </span>
        </div>
        <div className="flexColStart">
          <button className="button4">view more</button>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;