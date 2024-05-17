import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="g-container">
        <div className="inner-container">
          <div className="flexColStart grad">
            <span className="primaryText" style={{fontSize: 45}}>
            MoozaCash Africa is fast,
            </span>
            
            <span className="primaryText" style={{fontSize: 45}}>
             convenient and reliable.
            </span>
            
            <span className="primaryText" style={{fontSize: 15,marginTop: 20}}>
            MoozaCash Africa we go where you want us to go. Goods and cash can  be delivered right at your doorstep.


            </span>

            <div style={{ paddingLeft: 30 ,paddingTop: 15}}>
              <button className="button5" onClick={() => redirectToLink('https://wa.me/+263712887872')} >
               send money now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

const redirectToLink = (link) => {
  window.open(link, '_blank');
};