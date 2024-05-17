import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div id="about-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className=" c-left">
          <span className="primaryText flexColCenter">Who is MoozaCash</span>

          <div className="flexColStart">
            <span
              className="secondaryText"
              style={{ color: "#000", fontSize: 15,fontWeight: 300 ,marginBottom:12}}
            >
              Moozacash is a financial digital platform that provides unmatched
              customer experience for its clients. As we grow MoozaCash Africa,
              it is has been refined to penetrate the financial services market
              to the “last veins of toes”.
            </span>
            <span
              className="secondaryText"
              style={{ color: "#000", fontSize: 15,fontWeight: 300 ,marginBottom:12 }}
            >
              MoozaCash Africa eliminates risk by taking the money to the
              client’s doorstep.
            </span>

            <span
              className="secondaryText"
              style={{ color: "#000", fontSize: 15,fontWeight: 300 ,marginBottom:12 }}
            >
              Over time, we have learnt that money transfer is a personal
              experience that creates bonds that go beyond the financial
              transaction. This is why MoozaCash Africa now provides services
              that are more than just money that include Groceries, Tombstone
              Installation, House Improvements.
            </span>

            <span
              className="secondaryText"
              style={{ color: "#000", fontSize: 15,fontWeight: 300 ,marginBottom:12 }}
            >
            We have products that Customers have always wished for from your trusted money sender.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
