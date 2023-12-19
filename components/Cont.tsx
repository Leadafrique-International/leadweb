import React, { ChangeEvent, useRef, useState, useEffect } from "react";
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
    meridiem: "AM", // Default value for AM/PM selector
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMeridiemChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      try {
        await emailjs.sendForm(
          "service_f8k9nj6",
          "template_s6kw3va",
          formRef.current,
          "BGTXMYt4RECLIOUjF"
        );
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
        formRef.current.reset();
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
  };

  return (
    <div className="">
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
      <div className="max-w-7xl mx-auto ">
        <h1 className="text-white xl:text-[60px] text-[40px] m-5 p-5 font-font font-bold shadow-sm shadow-black absolute xl:top-[40%] top-[30%] ">
          We would love to work with you.
        </h1>
      </div>

      <div className=" bg-purple-500 w-[100%] ">
        <div className=" font-font max-w-7xl mx-auto lg:gap-5 xl:px-20 2xl:px-0">
          <h1 className=" px-12 pt-6 pb-8 mb-2 text-center text-white md:text-xl">
            Book a one on one with us below
          </h1>
          <form
            className="max-w-md px-10 lg:px-0 mx-auto mt-8"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <div className="space-y-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                name="phone_number"
                placeholder="Your Phone Number"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
                required
              />
              <input
                type="date"
                name="Date"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
                required
              />

              <div className="flex items-center mt-4">
                <input
                  type="time"
                  placeholder="Time"
                  name="time"
                  className="w-1/2 p-3 border border-gray-300 rounded mr-2 focus:outline-none focus:border-blue-500"
                  onChange={handleTimeChange}
                  required
                />
                <select
                  name="meridiem"
                  className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  onChange={handleMeridiemChange}
                  required
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>

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
              className="mt-6 px-6 py-3 mb-5 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
            >
              Book Meeting
            </button>
            {formSubmitted && (
              <div className="mt-4 p-2 mb-5 bg-green-200 text-green-800 rounded">
                Form submitted! We will get back to you soon.
              </div>
            )}
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
      <div className=" mb-36 md:mb-5 xl:px-20 2xl:px-0">
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
