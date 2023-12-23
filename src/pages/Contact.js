import React from "react";
import BgImg from "../components/login/bgImg/BgImg";
import ContactForm from "../components/contact/ContactForm";
const Contact = () => {
  return (
    <div className="py-4 mt-4 mt-md-0 overflow-x-hidden">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <BgImg />
        </div>
        <div className="col-12 col-md-6 mb-3">
          <div className="container">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
