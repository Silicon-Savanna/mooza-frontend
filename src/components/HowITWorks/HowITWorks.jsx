import React, { useState } from "react";
import "./HowITWorks.css";

const HowITWorks = () => {
  return (
    <section id="how-it-works" className="v-wrapper">
      <div className="paddings2  flexCenter how-v-container">
        {/* left side */}

        {/* right */}
        <div
          className="how-v-right"
          style={{
            paddingLeft: 30,
            marginRight: 30,
            borderRadius: 20,
          }}
        >
          <div style={{ textAlign: "start", marginBottom: 15 }}>
            <span className="primaryText">
            How to send money
            </span>
          </div>

          <div className="step active">
            <div className="content">
              <span className="content-title">1. Create your Order</span>{" "}
              Contact the WhatsApp number and request for transaction.
            </div>
          </div>

          <div className="step active">
            <div className="content">
              <span className="content-title">2. Send your money</span>{" "}
              Deposit the money you want to send into our  account and send the proof of payment.
            </div>
          </div>

          <div className="step active">
            <div className="content">
              <span className="content-title">3. Provide recipient details</span>{" "}
              Give information about where your recipient is  based and how they want to receive money.
            </div>
          </div>

          <div className="step active">
            <div className="content">
              <span className="content-title">4. Sit back and relax</span>{" "}
              MoozaCash will deliver the money to your recipient.
            </div>
          </div>

       
        </div>

        <div className="how-v-left flexEnd" >
          <div className="how-image-container">
            <img src="./sending.jpg" alt="" />
          </div>
        </div>
      </div>

   
    </section>
  );
};

export default HowITWorks;
