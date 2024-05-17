import React from "react";
import "./ServiceCard.css";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const ServiceCards = ({ card }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="r-card">
        <div className="flexColCenter">
          <Avatar sx={{ width: 76, height: 76 }}>{card.avater}</Avatar>
          <p style={{ margin: 7 }}>{card.title}</p>
          <span className="serviceHeading">{card.heading}</span>
          <span className="serviceText">
          {card.detail}
          </span>
        </div>
        <div className="flexColCenter">
          <button className="button8" onClick={() => redirectToLink(card.link)}>
          {card.textBtn}
          </button>
        </div>
      </div>
    </>
  );
};

export default ServiceCards;

const redirectToLink = (link) => {
  window.open(link, '_blank');
};
