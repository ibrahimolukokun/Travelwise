import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import worldMap from "../../assets/world-map.png"; 
import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import avatar3 from '../../assets/avatar3.jpg';
import avatar4 from '../../assets/avatar4.jpg';
import avatar5 from '../../assets/avatar5.jpg';

const testimonials = [
  {
    name: "Ibrahim Olukokun",
    message:
      "Travelwise is the best trip app I have ever used to plan my travels. Booking is swift and easy!",
    stars: 5,
  },
  {
    name: "Amara Okeke",
    message:
      "I discovered amazing places using Travelwise and their support is top notch. Highly recommend!",
    stars: 4,
  },
  {
    name: "John M.",
    message:
      "The user experience is great, and I love how smooth it is to book and explore new destinations.",
    stars: 5,
  },
];

const TestimonialMap = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-12 px-6 sm:px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Testimonial */}
        <div className="relative">

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            What our customers have to say?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            <div className="transition-all duration-500 ease-in-out">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                “{testimonials[currentIndex].message}”
              </p>
              <h4 className="font-semibold text-gray-800">
                {testimonials[currentIndex].name}
              </h4>
              <div className="flex mt-1 text-orange-400">
                {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <div className=" flex items-center gap-4 ">
              <button
                onClick={handlePrev}
                className="bg-gray-200 text-sm p-2 rounded-full hover:bg-gray-300"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={handleNext}
                className="bg-primary text-white text-sm p-2 rounded-full hover:bg-green-600"
              >
                <FaChevronRight />
              </button>
            </div>
            </div>

        </div>

        {/* Right: Map + Avatars */}
        <div className="relative w-full max-w-2xl mx-auto animate-fadeIn">
          <img
            src={worldMap}
            alt="world map"
            className="w-full h-auto rounded-xl"
          />

          {[
            { top: "15%", left: "25%", name: "Jessica", img: avatar1 },
            { top: "20%", right: "20%", name: "Carlos", img: avatar2 },
            { bottom: "20%", left: "15%", name: "Amara", img: avatar3 },
            { bottom: "15%", left: "45%", name: "Yuki", img: avatar4 },
            { bottom: "18%", right: "15%", name: "Mohammed", img: avatar5 },
          ].map((marker, index) => (
            <div
              key={index}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-md absolute hover:scale-110 hover:z-10 transition duration-300"
              style={{
                top: marker.top,
                left: marker.left,
                bottom: marker.bottom,
                right: marker.right,
              }}
              title={marker.name}
            >
              <img
                src={marker.img}
                alt={marker.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialMap;
