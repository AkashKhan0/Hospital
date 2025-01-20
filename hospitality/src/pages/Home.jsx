import React, { useEffect, useState } from "react";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import {
  FaAmbulance,
  FaDiagnoses,
  FaHospital,
  FaList,
  FaMicroscope,
  FaPhone,
} from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import branch from "../assets/branch.jpg";

const Home = () => {
  const slides = [
    {
      image: slide1,
      title: "Welcome to Our Website",
      description: "Discover amazing features and opportunities with us.",
      buttonLink: "#learn-more-1",
    },
    {
      image: slide2,
      title: "Grow Your Business",
      description: "We help you reach new heights with innovative solutions.",
      buttonLink: "#learn-more-2",
    },
    {
      image: slide3,
      title: "Join Our Community",
      description: "Connect with like-minded individuals to achieve more.",
      buttonLink: "#learn-more-3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 2 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div className="w-full">
        <div className="relative w-full h-screen overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full h-screen flex-shrink-0 relative"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-6">{slide.description}</p>
                  <a
                    href={slide.buttonLink}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-evenly flex-wrap">
          <div className="box flex items-center gap-3 cursor-pointer">
            <FaPhone /> <p>call for appoinment</p>
          </div>
          <div className="box flex items-center gap-3 cursor-pointer">
            <FaUserDoctor /> <p>find a doctor</p>
          </div>
          <div className="box flex items-center gap-3 cursor-pointer">
            <FaPhone /> <p>test service charges</p>
          </div>
          <div className="box flex items-center gap-3 cursor-pointer">
            <FaList /> <p>health packages</p>
          </div>
        </div>
      </div>
      <div className="my-20 flex gap-10">
        <div className="w-1/2">
          <h1 className="text-2xl font-semibold">
            Our <b>Services</b>
          </h1>
          <p className="my-5">
            We are committed to provide affordable services, without any
            compromise on the quality of service – so that you are able to
            remain happy.
          </p>
          <p className="flex items-center text-emerald-600 gap-2 text-xl font-bold">
            <FaMicroscope />
            Imaging
          </p>
          <p className="my-5">
            Popular Diagnostic Centre Ltd. is an advanced Centre providing the
            diagnostic imaging services in an elevated ambience, completed by
            service and report efficiency.
          </p>
          <a
            href="*"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600"
          >
            Learn more
          </a>
          <p className="flex items-center text-emerald-600 gap-2 text-xl font-bold mt-5">
            <FaDiagnoses />
            Pathology
          </p>
          <p className="my-5">
            Our Pathology division offers a comprehensive range of laboratory
            tests for diagnosis, management and prevention of a wide variety of
            diseases.
          </p>
          <a
            href="*"
            target="_blank"
            rel="noopener noreferrer"
            className="my-5 text-emerald-600"
          >
            Learn more
          </a>
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl font-semibold">
            Important <b>Notices</b>
          </h1>
          <p className="flex items-start gap-2 text-lg font-normal mt-5">
            <img
              src={branch}
              alt=""
              className="w-20 rounded-md border p-1 cursor-pointer"
            />
            <p>
              <span className=" text-emerald-600 cursor-pointer">
                ICT for Chikungunya IgG/IgM
              </span>
              <br /> <br /> A new pathological test 'ICT for Chikungunya
              IgG/IgM'. Disease symptoms are very similar to Dengue Fever. No
              preparation is required. Report will be delivered on the same day
              of specimen collection. Feb 09 , 2019
            </p>
          </p>

          <div className="flex items-center gap-10 mt-10">
            <div className="box_2 flex items-center gap-5">
              <FaAmbulance className="text-6xl" /> <p>call for ambulance</p>
            </div>

            <div className="box_2 flex items-center gap-5">
              <FaHospital className="text-5xl" /> <p>our branches</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
