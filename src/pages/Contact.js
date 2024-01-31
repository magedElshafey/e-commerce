import React from "react";
import BgImg from "../components/login/bgImg/BgImg";
import ContactForm from "../components/contact/form/ContactForm";
import ContactDetails from "../components/contact/details/ContactDetails";
import Weoffer from "../components/Home/weoffer/Weoffer";
import contactPhoto from "../assets/contact.jpg";
const Contact = ({ contactDetails, weoffer }) => {
  return (
    <div className="py-4 mt-4 mt-md-0 overflow-x-hidden">
      <div className="container">
        <ContactDetails data={contactDetails} />
      </div>
      <div className="row justify-content-center align-items-center mb-5">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <BgImg img={contactPhoto} />
        </div>
        <div className="col-12 col-md-6 mb-3">
          <div className="container">
            <ContactForm />
          </div>
        </div>
      </div>
      <Weoffer data={weoffer} />
    </div>
  );
};

export default Contact;
