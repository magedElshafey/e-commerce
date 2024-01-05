import React from "react";
import BgImg from "../components/login/bgImg/BgImg";
import ContactForm from "../components/contact/form/ContactForm";
import ContactDetails from "../components/contact/details/ContactDetails";
import ContactServices from "../components/contact/services/ContactServices";
const Contact = ({ contactDetails, contactServices }) => {
  return (
    <div className="py-4 mt-4 mt-md-0 overflow-x-hidden">
      <div className="container">
        <div className="row mb-5">
          {contactDetails.map((item, index) => (
            <div key={index} className="col-12 col-md-4 mb-3 mb-md-0">
              <ContactDetails data={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="row justify-content-center align-items-center mb-5">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <BgImg />
        </div>
        <div className="col-12 col-md-6 mb-3">
          <div className="container">
            <ContactForm />
          </div>
        </div>
      </div>
      <ContactServices data={contactServices} />
    </div>
  );
};

export default Contact;
