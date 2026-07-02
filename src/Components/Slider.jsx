import { useState, useEffect } from "react";

import img1 from "../assets/all-product.png";
import img3 from "../assets/Super-501-3-1.jpg";
import img4 from "../assets/SD501_banner3.jpg";
import img2 from "../assets/Platinum-3.jpg"; 
import img5 from "../assets/K8.jpg";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";


const images = [img1, img2, img3, img4, img5];

export default function Slider() {
  const [showMore, setShowMore] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="slider" className="pt-16 sm:pt-20 overflow-x-hidden md:overflow-x-visible">
      <div className="relative min-h-[520px] sm:min-h-[560px] md:min-h-[80vh] lg:min-h-screen overflow-hidden bg-black">

        {/* Image */}
        <img
          src={images[current]}
          alt="Slider"
          className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25 md:from-black/80 md:via-black/50 md:to-black/20" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12">

            <div className="w-full max-w-[288px] min-[375px]:max-w-xs sm:max-w-md md:max-w-2xl px-0 md:!px-15">

              <h1 className="font-extrabold leading-tight text-white
              text-2xl
              min-[375px]:text-3xl
              sm:text-4xl
              md:text-3xl
              lg:text-4xl 
              ">

                Healthy Water
                <br />
                Healthy Life

              </h1>

              <p className="!mt-4 md:!mt-6 text-gray-200
              text-sm
              leading-relaxed
              min-[375px]:text-base
              sm:text-lg
              md:text-xl">

                Discover Japan's No.1 Water Ionizer Technology.
                Experience pure, healthy, and alkaline water for a
                better lifestyle.

              </p>

              <div className="!mt-4 sm:!mt-6 md:!mt-8 flex flex-col items-start gap-4">
                <div className="flex flex-col min-[390px]:flex-row gap-3 sm:gap-4">

                  <Link to="/productcard/" className="bg-red-600 hover:bg-red-700 transition !px-5 !py-2 md:!px-8 md:!py-3 rounded-full text-sm md:text-base font-semibold text-white">
                    Explore Products
                  </Link>

                  <button
                    type="button"
                    onClick={() => setShowMore(!showMore)}
                    className="flex items-center justify-center gap-2 border border-white hover:bg-white hover:text-black transition-all duration-300 !px-5 !py-2 md:!px-8 md:!py-3 rounded-full text-sm md:text-base font-semibold text-white shadow-lg"
                  >
                    {showMore ? "Show Less" : "Learn More"}

                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        showMore ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                <div
                  className={`w-full overflow-hidden transition-all duration-700 ease-in-out ${
                    showMore ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-xl !px-4 !py-3 sm:!px-6 sm:!py-4">

                    <h2 className="text-white text-base sm:text-lg font-semibold">
                      Why Choose Enagic?
                    </h2>

                    <p className="!mt-2 text-gray-200 leading-6 sm:leading-7 text-sm sm:text-base">
                      Enagic water ionizers are built with advanced Japanese technology to
                      produce clean, antioxidant-rich alkaline water. These machines help
                      support better hydration, healthy living, and long-term wellness.
                      Trusted in over 150 countries, Enagic products are known for their
                      durability, premium quality, and innovative design.
                    </p>

                  </div>
                </div>

                

              </div>

            </div>

          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 sm:gap-3">

          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 sm:h-3 rounded-full transition ${
                current === index ? "bg-red-600 w-7 sm:w-8" : "bg-white/70 w-2.5 sm:w-3"
              }`}
            />
          ))}

        </div>

      </div>
    </section>
  );
}
