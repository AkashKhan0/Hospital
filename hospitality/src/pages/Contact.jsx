import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhone, FaMessage } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaUser,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const [buttonState, setButtonState] = useState({
    text: "Submit",
    color: "text-black",
  });

  const resetForm = () => {
    form.current.reset(); // Reset the form fields
    setButtonState({ text: "Submit", color: "text-black" }); // Reset the button state
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonState({ text: "Please Wait...", color: "text-yellow-500" });

    emailjs
      .sendForm("service_1rd77mj", "template_ng75r78", form.current, {
        publicKey: "Xtr-qQB9tG3kVUKtC",
      })
      .then(
        () => {
          setButtonState({ text: "Success", color: "text-green-500" });
          setTimeout(resetForm, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setButtonState({ text: "FAILED...", color: "text-red-500" }); // Error state
          setTimeout(
            () => setButtonState({ text: "Submit", color: "text-black" }),
            5000
          );
        }
      );
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-full h-fit my-10 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-black uppercase font-semibold relative w-fit m-auto">
          contact
          <span className="w-full h-1 bg-emerald-400 absolute left-0 -bottom-3 rounded-full"></span>
        </h1>
      </div>
      <div className="contact flex flex-col sm:flex-col md:flex-row gap-5 text-black">
        <div className="flex-1 py-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase font-semibold relative w-fit">
            get in touch
            <span className="w-1/2 h-1 bg-emerald-400 absolute left-0 -bottom-3 rounded-full"></span>
          </h1>
          <p className="font-light text-base mt-8">
            Your Questions, Feedback, and Inquiries Matter – Reach Out Anytime
            for Support or Collaboration!
          </p>

          <div className="my-8">
            <div className="flex items-center gap-5">
              <FaPhone className="c-icon" />
              <div className="ttl__data">
                <h1>phone</h1>
                <a href="tel:+8801850219432">
                  <p>+8801850219432</p>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-5 my-5">
              <IoMdMail className="c-icon" />
              <div className="ttl__data">
                <h1>email</h1>
                <a href="mailto:aplusadvertisinglimited@gmail.com?subject=Inquiry&body=Hi, I have a question about...">
                  <p>aplusadvertisinglimited@gmail.com</p>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <IoLocationSharp className="c-icon" />
              <div className="ttl__data">
                <h1>location</h1>
                <a
                  href="https://www.google.com/maps?q=Your+Address"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>214, Tejgaon Ind.Area, Tejgaon, Dhaka-1208</p>
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start gap-5 flex-wrap mt-10">
            <FaFacebookF className="fc-icon" />
            <FaInstagram className="fc-icon" />
            <FaLinkedinIn className="fc-icon" />
            <a
              href="https://wa.me/8801850219432?text=Hi!%20I%20need%20assistance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="fc-icon" />
            </a>
          </div>
        </div>
        <div className="flex-1 py-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase font-semibold relative w-fit">
            message us
            <span className="w-1/2 h-1 bg-emerald-400 absolute left-0 -bottom-3 rounded-full"></span>
          </h1>
          <div className="my-8">
            <form ref={form} onSubmit={sendEmail}>
              <div className="inp_box">
                <FaUser className="inp_i" />
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter you name ..."
                  required
                />
              </div>
              <div className="inp_box my-5">
                <IoMdMail className="text-lg inp_i" />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter you gmail ..."
                  required
                />
              </div>
              <div className="inp_box">
                <FaMessage className="inp_i" />
                <textarea
                  type="text"
                  name="message"
                  placeholder="Enter you message ..."
                  required
                />
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className={`text-xl font-normal uppercase bg-emerald-400 px-10 py-2 rounded-lg cursor-pointer duration-200 text-black hover:text-white ${buttonState.color}`}
                >
                  {buttonState.text}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
