import React from "react";
import BgImg from "../components/login/bgImg/BgImg";
import ContactForm from "../components/contact/form/ContactForm";
import ContactDetails from "../components/contact/details/ContactDetails";
import Weoffer from "../components/Home/weoffer/Weoffer";
import contactPhoto from "../assets/contact.jpg";
import contactUsImg from "../assets/contact-us.avif";
import Banner from "../components/utils/banner/Banner";
import OfferCard from "../components/utils/offerCard/OfferCard";
import { useTranslation } from "react-i18next";
const Contact = ({ phone , 
  email, address ,  weoffer, socialMedia }) => {
  const { t } = useTranslation();
  return (
    <div className="py-4 pt-md-0 mt-4 mt-md-0 overflow-x-hidden">
      <Banner alt="contact-us" img={contactUsImg} />
      <div className="main-section mb-5 py-3">
        <div className="container">
          <p className="fs-3 m-0 p-0 font-bolder  red-color text-center mb-4">
            {t("get")}
          </p>
          <div className="row  align-items-center">
            <div className="col-12 col-md-6 mb-5 mb-md-0">
              <ContactForm />
            </div>
            <div className="col-12 col-md-6">
              <ContactDetails phone = {phone}
email = {email} socialMedia={socialMedia} address = {address} />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          {weoffer.map((item, index) => (
            <div key={index} className="col-12  col-md-4 mb-3 mb-lg-0">
              <div className="offer-card">
                <OfferCard data={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
