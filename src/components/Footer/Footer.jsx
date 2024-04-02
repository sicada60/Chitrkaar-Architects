import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f-right">
    <span className="primaryText">Address</span>
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29938.97593428911!2d85.8759804!3d20.2848641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190b3e1f34dedb%3A0x329f1d80c9f42617!2sChitrkaar%20Media%20%26%20Ent.!5e0!3m2!1sen!2sin!4v1712065232899!5m2!1sen!2sin"
        width="600" 
        height="450" 
        style={{ border: 0 }} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>
</div>

      </div>
    </div>
    
  );
};

export default Footer;
