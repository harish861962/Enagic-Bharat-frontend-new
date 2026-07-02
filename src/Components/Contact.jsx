// Conatct page change as  Demo Page 

import React, { useState } from "react";
import { toast } from 'react-toastify';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
const [timeSlot, setTimeSlot] = useState("");
const [pincode, setPincode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      city,
      message,
      pincode,
      timeSlot
    };

    try {
      setIsSubmitting(true);

      const res = await fetch("https://enagic-bharat.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Demo booking is Successfully");
        setName("");
        setEmail("");
        setPhone("");
        setCity("");
        setMessage("");
        setPincode("");
        setTimeSlot("");
      } else {
        toast.warn("Something went wrong");
      }
    } catch (error) {
      console.error("Contact form submission failed:", error);
      toast.error("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <>
    <Navbar/>
    <section id="contact" className="bg-gradient-to-br from-red-50 via-white to-red-100 min-h-screen">

      {/* Hero */}

      <div className="bg-gradient-to-r from-red-700 to-red-500 text-white mt-24 py-10">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-2xl md:text-6xl font-bold">
           Book a Free Demo
          </h1>

          <p className="mt-5 text-lg max-w-2xl mx-auto">
            Experience the power of Kangen Water firsthand. Get in touch with our Enagic experts to schedule your personalized live demo or get instant product support.
          </p>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left */}

          <div className="space-y-6">

            <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-5">

              <div className="bg-red-100 h-14 w-14 rounded-full flex items-center justify-center">

                <FaPhoneAlt className="text-red-600 text-xl" />

              </div>

              <div>

                <h3 className="font-bold text-xl">
                  Call Us
                </h3>

                <a href="tel:+91 7023320977"> +91 7023320977</a>


              </div>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-5">

              <div className="bg-red-100 h-14 w-14 rounded-full flex items-center justify-center">

                <FaEnvelope className="text-red-600 text-xl" />

              </div>

              <div>

                <h3 className="font-bold text-xl">
                  Email
                </h3>

                <a href="mailto:info@localpintu.com"> info@localpintu.com</a>
              </div>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-5">

              <div className="bg-red-100 h-14 w-14 rounded-full flex items-center justify-center">

                <FaMapMarkerAlt className="text-red-600 text-xl" />

              </div>

              <div>

                <h3 className="font-bold text-xl">
                  Office
                </h3>

                <p className="text-gray-600 mt-2">
                  Aamor by Aashish Group, Kasli <br />  Rd, Patrakar  Colony Extension ,<br /> Mansarovar, Jaipur, Rajasthan <br /> 302020
                </p>

              </div>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-5">

              <div className="bg-red-100 h-14 w-14 rounded-full flex items-center justify-center">

                <FaClock className="text-red-600 text-xl" />

              </div>

              <div>

                <h3 className="font-bold text-xl">
                  Working Hours
                </h3>

                <p className="text-gray-600 mt-2">
                  Mon - Sat
                  <br />
                  9:00 AM - 7:00 PM
                </p>

              </div>

            </div>

          </div>

          {/* Form */}

          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-4">

            <h2 className="text-3xl font-bold text-center ">
              Book A Free Demo
            </h2>

            <p className="text-gray-500 my-4 mb-8 text-center">
              Fill the form and Book A free Demo.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border rounded-xl px-5 py-4 focus:outline-none focus:border-red-500"
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border rounded-xl px-5 py-4 focus:outline-none focus:border-red-500"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="border rounded-xl px-5 py-4 focus:outline-none focus:border-red-500"
                />
               

                <input
                  type="text"
                  placeholder="Full Address"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className="border rounded-xl px-5 py-4 focus:outline-none focus:border-red-500"
                />

                 <input
                  type="tel"
                  placeholder="Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  required
                  className="border rounded-xl px-5 py-4 focus:outline-none focus:border-red-500"
                />

                 <select
  value={timeSlot}
  onChange={(e) => setTimeSlot(e.target.value)}
  required
  className="border rounded-xl px-5 py-4 focus:outline-none focus:border-red-500 bg-white"
>
  <option value="">Select Time Slot</option>
  <option value="08:00 AM - 10:00 AM">08:00 AM - 10:00 AM</option>
  <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
  <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
  <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
  <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
  <option value="06:00 PM - 08:00 PM">06:00 PM - 08:00 PM</option>
  <option value="08:00 PM - 10:00 PM">08:00 PM - 10:00 PM</option>
</select>

              </div>

              <textarea
                rows="6"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:border-red-500"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-red-600 hover:bg-black transition  text-white px-10 py-4 rounded-xl font-semibold"
              >
                {isSubmitting ? "Booking..." : "Book Demo"}
              </button>

            </form>

          </div>

        </div>

        {/* Map */}

        <div className="mt-20 bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb="
            className="w-full h-[450px]"
            loading="lazy"
          ></iframe> */}

          {/* <iframe 
  title="map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14232.046399151525!2d75.7872709!3d26.9124336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db61232b4b5bf%3A0x40f7601940c8240!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1719920000000!5m2!1sen!2sin" 
  className="w-full h-[450px]" 
  loading="lazy">
</iframe> */}

        </div>

        {/* Social */}

        <div className=" text-center">

          <h2 className="text-3xl font-bold">
            Follow Us
          </h2>

          <div className="flex justify-center gap-6 mt-8">

            <a
            href="https://www.facebook.com/pintuattends" target="_blank"
              className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/pintuattends/" target="_blank"
              className="h-14 w-14 rounded-full bg-pink-500 text-white flex items-center justify-center hover:scale-110 duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/918619627463" target="_blank"
              className="h-14 w-14 rounded-full bg-green-500 text-white flex items-center justify-center hover:scale-110 duration-300"
            >
              <FaWhatsapp />
            </a>

            <a
              href="#"
              className="h-14 w-14 rounded-full bg-red-700 text-white flex items-center justify-center hover:scale-110 duration-300"
            >
              <FaYoutube />
            </a>

          </div>

        </div>

      </div>

    </section>
    {/* <Footer/> */}
    </>
  );
}
