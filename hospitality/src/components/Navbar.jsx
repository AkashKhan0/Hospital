import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineAccessTime, MdEmail } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full bg-slate-800 text-white">
        <div className="w-full px-5 sm:px-10 max-w-screen-xl m-auto">
          {/* nab top */}
          <div className="flex items-center justify-between py-2">
            <div className="moving_text flex items-center gap-5">
              <div className="marquee-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  odio laborum accusamus! Ex, quaerat. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Vitae odio laborum
                  accusamus! Ex, quaerat.
                </p>
                <p className="mx-5">|</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos voluptatum aspernatur nostrum nemo, eaque minus
                  molestiae? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Dignissimos voluptatum aspernatur nostrum nemo, eaque
                  minus molestiae?
                </p>
              </div>
            </div>
            <div className="teinkle">
              <p className="p1 text-gray-500"> ⭐Sample Collection from Home</p>
              <p className="p2 text-red-600">
                ⭐Video Consultancy Doctor Appointment
              </p>
              <p className="p3 text-lime-500">
                ⭐Sample Collection Complain Submission
              </p>
            </div>
            <div className="social_top flex items-center justify-end gap-5">
              <FaFacebook className="duration-200 hover:text-cyan-500 cursor-pointer" />
              <FaInstagram className="duration-200 hover:text-amber-500 cursor-pointer" />
              <FaYoutube className="duration-200 hover:text-red-600 cursor-pointer" />
              <FaLinkedin className="duration-200 hover:text-teal-500 cursor-pointer" />
            </div>
          </div>
          {/* nav_mid */}
          <div className="flex items-center gap-10 py-5">
            <div className="logo cursor-pointer">
              <img
                src={logo}
                alt="logo"
                className="w-16"
                onClick={() => navigate("")}
              />
            </div>
            <div className="hotline flex flex-col items-start gap-2">
              <p className="text-emerald-500 flex items-center gap-2 text-lg font-normal">
                <FaWhatsapp className="text-2xl" />
                Hotline (Dhanmondi)
              </p>
              <p className="text-white text-lg font-medium">10636</p>
            </div>
            <div className="work_hour flex flex-col items-start gap-2">
              <p className="text-emerald-500 flex items-center gap-2 text-lg font-normal">
                <MdOutlineAccessTime className="text-2xl" />
                Working Hour
              </p>
              <p className="text-white text-lg font-medium">
                We are open 24/7 (Only Dhanmondi)
              </p>
            </div>
            <div className="email">
              <p className="text-emerald-500 flex items-center gap-2 text-lg font-normal">
                <MdEmail className="text-2xl" />
                Email Us
              </p>
              <p className="text-white text-lg font-medium">
                example@gmail.com
              </p>
            </div>
            <div className="portal_btn">
              <div
                className="btn1 bg-emerald-600 text-white"
                onClick={() => navigate("/portal")}
              >
                <p>patient portal</p>
                <p>(download report)</p>
              </div>
              <div
                className="btn2 bg-emerald-400 text-white mt-2"
                onClick={() => navigate("/appointment")}
              >
                <p>online doctor appointment</p>
              </div>
            </div>
          </div>
          {/* navbar */}
          <div className="flex items-center w-full">
            <div className="menu">
              <ul>
                <Link to="">
                  <li>home</li>
                </Link>
                <Link to="/about">
                  <li className="abt">
                    about us
                    <div className="sub_about">
                      <p> Goal & Objectives </p>
                      <p> Message From Chairman </p>
                      <p> Message From Managing Director </p>
                      <p> Management Team </p>
                    </div>
                  </li>
                </Link>
                <Link to="/services">
                  <li className="ser">
                    our services
                    <div className="sub_ser">
                      <p> Imaging </p>
                      <p> Pathology </p>
                      <p> Pharmacy </p>
                      <p> Test and Service Charges </p>
                      <p> Health Packages </p>
                    </div>
                  </li>
                </Link>
                <Link to="/doctors">
                  <li>doctors</li>
                </Link>
                <Link to="/branches">
                  <li className="brnc">
                    branches
                    <div className="sub_branch flex justify-between">
                      <div className="flex flex-col">
                        <h1>dhaka</h1>
                        <p>DHAKA</p>
                        <p>DHANMONDI</p>
                        <p>ENGLISH ROAD</p>
                        <p>SHANTINAGAR (U-1)</p>
                        <p>SHANTINAGAR (U-2)</p>
                        <p>NARAYANGONJ</p>
                      </div>
                      <div className="flex flex-col">
                        <h1>CHATTOGRAM</h1>
                        <p>NOAKHALI</p>
                        <p>CHATTOGRAM</p>
                      </div>
                      <div className="flex flex-col">
                        <h1>RAJSHAHI</h1>
                        <p>RAJSHAHI (UNIT 2)</p>
                        <p>RAJSHAHI (UNIT 1)</p>
                      </div>
                      <div className="flex flex-col">
                        <h1>RANGPUR</h1>
                        <p>RANGPUR (U-1)</p>
                        <p>RANGPUR (U-2)</p>
                        <p>DINAJPUR</p>
                      </div>
                    </div>
                  </li>
                </Link>
                <Link to="/gallery">
                  <li>gallery</li>
                </Link>
                <Link to="/news">
                  <li className="news">
                    news & media
                    <div className="sub_news">
                      <p> News & Notices </p>
                      <p> Events </p>
                      <p> Blogs </p>
                      <p> Corporate Videos </p>
                    </div>
                  </li>
                </Link>
                <Link to="/career">
                  <li>career</li>
                </Link>
                <Link to="/contact">
                  <li>contact</li>
                </Link>
              </ul>
            </div>
            <div className="search flex items-center justify-center">
              <div className="src_box flex items-center justify-between">
                <input type="text" placeholder="Search" className="src_input" />
                <button className="src_btn">
                  <FaSearch className="m-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
