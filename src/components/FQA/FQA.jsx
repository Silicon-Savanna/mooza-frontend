import React from "react";
import "./FQA.css";
import { Accordion, Text, Container, Title, Badge } from "@mantine/core";
import { FiCoffee, FiCloudSnow, FiAnchor } from "react-icons/fi";

const FQA = () => {
  return (
    <div id="FQA" className="c-wrapper contactUs">
      <div className="paddings innerWidth flexCenter faq-c-container">
        {/* left side */}
        <div className="flexColCenter faq-c-left">
          {/* <span className="orangeText">Our Contact Us</span> */}
          <span className="primaryText" style={{ color: "#fff" }}>
            We promise to support you at every turn. All the time.
          </span>

          <div className="flexColStart faq-contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter faq-mode">
          
              </div>
            </div>

            {/* second row */}
          </div>

          <div >
          <Container  size="133rem">
            <div style={{ marginBottom: 30}}>
              <Text color="white" className="flexColCenter">
                <Title order={1} style={{ marginTop: 10 }}>
                  Frequently asked questions here
                </Title>
              </Text>
            </div>
            <Accordion className="fqa-accordion"  variant="contained" style={{backgroundColor: "#fff"}}>
              <Accordion.Item value="item1">
                <Accordion.Control
            
                >
                 Where does one get MoozaCash Africa offices in the diaspora?
                </Accordion.Control>
                <Accordion.Panel className="faqPanel">MoozaCash Africa Africa has designated agents in many countries. We have agents in UK, Namibia, South Africa and all Sadc nations. The addresses are given on our website.</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="item2">
                <Accordion.Control
               
                >
                How do I get recourse if my money does not reach its intended destination? 
                </Accordion.Control>
                <Accordion.Panel className="faqPanel">All due and care is exercised to make sure that service reaches its intended beneficiary. However in circumstances that this fails to happen, we have a litigable office in all countries of presence. Our remittance process is a binding contract we will always abide to.</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="item3">
                <Accordion.Control
        
                >
                Can I use my friends MoozaCash Africa account?
                </Accordion.Control>
                <Accordion.Panel className="faqPanel">No. Our security features do not allow one to use someone else’s account. This is to ensure our high standards of security are maintained, we will never allow anyone else to use someone else’s account. To help us maintain the highest security standards, please take a couple of minutes to establish your own MoozaCash Africa account.</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="item4">
                <Accordion.Control
        
                >
                How do I receive my money in Zimbabwe?
                </Accordion.Control>
                <Accordion.Panel className="faqPanel">
                 <span>1. MoozaCash Africa delivers cash to recipient clients anywhere in Zimbabwe.</span>
                 <br/>
                 <br/>
                 <span>2. You can collect cash at any MoozaCash Africa agents and branches across Zimbabwe.</span>
                 </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="item5">
                <Accordion.Control
        
                >
                How do I send money
                </Accordion.Control>
                <Accordion.Panel className="faqPanel">
                 <span>1. You can also use the WhatsApp platform or visit any of our MoozaCash branches and outlets. WhatsApp MoozaCash Africa WhatsApp line+263887872. Send hi Mooza and follow the instructions</span>
                 <br/>
                 <br/>
                 <span>2. Mobile APP. Download Mooza App from Google Play store or iOS App store sign up and send money.</span>
                 <br/>
                 <br/>
                 <span>3.	Speak to Mooza Customer Experience executive. Contact Mooza on +263712887872.</span>
                 </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="item6">
                <Accordion.Control
        
                >
               How long will it take to sign up for a MoozaCash Africa Account? 
                </Accordion.Control>
                <Accordion.Panel className="faqPanel">
                MoozaCash Africa sign up is instant provided you have the correct documentation, namely: proof of ID, proof of income and proof of residency.
                 </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="item7">
                <Accordion.Control
        
                >
                How much money can I send? 
                </Accordion.Control>
                <Accordion.Panel className="faqPanel">
                MoozaCash Africa is a law-abiding organisation. Customers are not allowed to send money beyond thresholds that are allowed in both receiving and sending countries. However for proper, legal purposes, we have no limits for money.
                 </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Container>
          </div>

    
        </div>
      </div>
    </div>
  );
};

export default FQA;
