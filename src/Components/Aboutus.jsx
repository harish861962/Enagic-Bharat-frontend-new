import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "../assets/all-product.png";
import img2 from "../assets/Platinum-3.jpg"; 
import img4 from "../assets/SD501_banner3.jpg";




export default function Aboutus() {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-50">

      {/* Hero */}
      <section className="relative h-[70vh] bg-gradient-to-r from-blue-900 mt-24 via-sky-700 to-cyan-500 flex items-center justify-center text-white">

        <div className="absolute inset-0 bg-black/40 "></div>

        <div className="relative z-10 text-center  px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            About Enagic Bharat
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 leading-9">
            Delivering Premium Japanese Water Ionization Technology
            for a Healthier India.
          </p>

          <Link
            to="/productcard/"
            className="inline-block mt-10 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-semibold transition duration-300 hover:scale-105"
          >
            Explore Products
          </Link>
        </div>

      </section>

      {/* Story */}

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        <img
          alt=""
          src={img4}
          className="rounded-3xl shadow-2xl"
        />

        <div>

          <h2 className="text-4xl font-bold mb-6">
            Our Story
          </h2>

          <p className="text-gray-600 leading-8 text-lg">
            Enagic Bharat brings world-class Japanese water ionizer
            technology to Indian families. We believe that clean,
            healthy, and antioxidant-rich water is the foundation of
            better living.

            Our mission is to educate people about the importance of
            hydration while providing premium-quality water systems
            trusted worldwide.
          </p>

        </div>

      </section>

      {/* Mission Vision */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">

          <div className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-700 text-white p-10 shadow-xl hover:-translate-y-2 duration-300">

            <h3 className="text-3xl font-bold mb-5">
              Our Mission
            </h3>

            <p className="leading-8">
              To empower every family with premium alkaline water
              solutions that support healthy living and long-term wellness.
            </p>

          </div>

          <div className="rounded-3xl bg-gradient-to-br from-red-500 to-orange-500 text-white p-10 shadow-xl hover:-translate-y-2 duration-300">

            <h3 className="text-3xl font-bold mb-5">
              Our Vision
            </h3>

            <p className="leading-8">
              To become India's most trusted destination for
              advanced water ionization technology and wellness.
            </p>

          </div>

        </div>

      </section>

      {/* Why Choose */}

      <section className="max-w-7xl mx-auto py-24 px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold mb-4">
            Why Choose Enagic Bharat
          </h2>

          <p className="text-gray-600 mb-16">
            Premium Quality • Japanese Technology • Trusted Worldwide
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              title: "Japanese Technology",
              icon: "🇯🇵",
            },
            {
              title: "Premium Quality",
              icon: "⭐",
            },
            {
              title: "Lifetime Support",
              icon: "🤝",
            },
            {
              title: "Trusted Worldwide",
              icon: "🌍",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 text-center"
            >
              <div className="text-5xl mb-5">{item.icon}</div>

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* Stats */}

      <section className="bg-gradient-to-r from-sky-600 to-blue-900 text-white py-24">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <h2 className="text-5xl font-bold">50+</h2>
            <p className="mt-3">Years Experience</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">150+</h2>
            <p className="mt-3">Countries</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">1M+</h2>
            <p className="mt-3">Happy Customers</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">100%</h2>
            <p className="mt-3">Quality Products</p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 px-6 text-center">

        <h2 className="text-5xl font-bold mb-6">
          Ready to Transform Your Health?
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-8">
          Discover premium Enagic water ionizers and experience the
          difference of Japanese innovation.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-10 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-semibold transition hover:scale-105"
        >
          Contact Us
        </Link>

      </section>

    </div>
    {/* <Footer/> */}
    </>
  );
}
