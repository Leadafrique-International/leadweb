import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import emailjs from "emailjs-com";

function Contacts() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      try {
        await emailjs.sendForm(
          "YOUR_EMAILJS_SERVICE_ID",
          "YOUR_EMAILJS_TEMPLATE_ID",
          formRef.current,
          "YOUR_EMAILJS_USER_ID"
        );
        alert("Form submitted successfully!");
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
  };
  return (
    <div>
      <div className="relative">
        <Image
          className="w-[100%] h-[70vh] object-cover -z-50 blur-image"
          priority
          width={800}
          height={800}
          src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626867/contact_upyzqg.webp"
          alt=""
        />
      </div>
      <div className="max-w-7xl mx-auto xl:px-20 2xl:px-0">
        <h1 className="text-white xl:text-[60px] text-[40px] m-5 p-5 font-font font-bold shadow-sm shadow-black absolute xl:top-[40%] top-[30%] ">
          We would love to work with you.
        </h1>
      </div>

      <div className="  font-font xl:flex justify-center items-center max-w-7xl mx-auto lg:gap-5 xl:px-20 2xl:px-0">
        <div className="bg-purple-500 w-[100%] z-[9999]">
          <h1 className=" px-12 pt-6 pb-8 mb-2 text-white md:text-xl">
            Book a one on one with us below
          </h1>
          <form
            className="max-w-md mx-auto mt-8"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
                required
              />
              <input
                type="date"
                name="date"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
                required
              />
              <input
                type="time"
                name="time"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
                required
              />
            </div>
            <button
              type="submit"
              className="mt-6 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="bg-[#2E2E2E] w-[100%] h-[474px] flex flex-col items-center justify-center z-[9999]">
          <p className="text-[15px] text-purple-500 text-center">
            LeadAfrique International
          </p>
          <p className="text-[15px] text-white text-center">
            Greatness House, #432
          </p>
          <p className="text-[15px] text-white text-center">
            Lame Dwaahe Street, SHC Estates, Adenta
          </p>
          <p className="text-[15px] text-white text-center">
            Housing Down, Accra, Ghana
          </p>
          <p className="text-[15px] text-center text-white pt-7">
            +233 302 540387 | +233 574 368 092
          </p>
          <p className="text-[15px] text-center text-white ">
            ask@leadafrique.org
          </p>
          <div className="text-white flex mt-5 gap-2 text-3xl ">
            <Link
              href="https://facebook.com/leadafriqueinternational"
              target="_blank"
            >
              {" "}
              <FiFacebook className="cursor-pointer hover:text-purple-500" />
            </Link>
            <Link href="https://www.instagram.com/leadafrique/" target="_blank">
              {" "}
              <AiOutlineInstagram className="cursor-pointer hover:text-purple-500" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/leadafrique-internatonal/"
              target="_blank"
            >
              <AiOutlineLinkedin className="cursor-pointer hover:text-purple-500" />
            </Link>
            <Link href="https://twitter.com/LeadAfrique">
              {" "}
              <AiOutlineTwitter className="cursor-pointer hover:text-purple-500" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container max-w-7xl mx-auto mb-36 md:mb-5 xl:px-20 2xl:px-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4580.031134258044!2d-0.15797834929503896!3d5.705980195844037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d36f6d8f56f%3A0xaa69443fc55723c!2sLeadAfrique%20International!5e1!3m2!1sen!2sus!4v1678178980421!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contacts;
