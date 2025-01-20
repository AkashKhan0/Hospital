import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full footer">
        <div className="foot_bg"></div>
        <div className="w-full px-5 sm:px-10 max-w-screen-xl m-auto">
          <div className="flex py-10 justify-between gap-5">
            <div className="foot_box">
              <h1>Contact Us</h1>
              <p>House #16, Road # 2, Dhanmondi R/A, Dhaka-1205, Bangladesh</p>
              <p>Phone : 09666 787801</p>
              <p>E-mail : info@populardiagnostic.com</p>
              <div className="social_foot flex items-center justify-start gap-5 mt-5">
                <FaFacebook className="duration-200 hover:text-cyan-500 cursor-pointer" />
                <FaInstagram className="duration-200 hover:text-amber-500 cursor-pointer" />
                <FaYoutube className="duration-200 hover:text-red-600 cursor-pointer" />
                <FaLinkedin className="duration-200 hover:text-teal-500 cursor-pointer" />
              </div>
            </div>
            <div className="foot_box">
              <h1>Important Links</h1>
              <p>Popular Pharmaceuticals</p>
              <p>Popular Medical College</p>
              <p>Popular Medical College Hospital</p>
              <p>Management Team</p>
              <p>Career</p>
              <p>Refund & Return Policy</p>
            </div>
            <div className="foot_box">
              <h1>Quick Links</h1>
              <p>Our Services</p>
              <p>Our Branches</p>
              <p>Call for Appointments</p>
              <p>Find Doctors</p>
              <p>Gallery</p>
              <p>Sitemap</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
