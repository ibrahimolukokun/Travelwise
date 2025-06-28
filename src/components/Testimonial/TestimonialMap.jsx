// src/components/TestimonialMap.jsx
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

  // Auto-slide every 8 seconds
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
    <section className="flex flex-row gap-4 py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto mb-10 text-left relative">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
                What our customers have to say ?
            </h2>

            {/* Testimonial Message */}
            <div className="transition-all duration-500 ease-in-out">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-4">
                    “{testimonials[currentIndex].message}”
                </p>
                <h4 className="font-semibold text-gray-800">
                    {testimonials[currentIndex].name}
                </h4>
                <div className="flex justify-start mt-1 text-orange-400">
                    {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                        <span key={i}>★</span>
                    ))}
                </div>
            </div>

            {/* Arrows */}
            <div className="absolute right-0 top-2/4 -translate-y-1/2 flex gap-2">
                <button
                    onClick={handlePrev}
                    className="bg-gray-200 text-sm p-2 rounded-full hover:bg-gray-300"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={handleNext}
                    className="bg-green-500 text-white text-sm p-2 rounded-full hover:bg-green-600"
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>

        {/* World Map */}
        <div className="relative max-w-5xl mx-auto mt-10 animate-fadeIn">
            <img
                src={worldMap}
                alt="world map"
                className="w-full h- rounded-xl"
            />

            {/* Floating Avatars */}
            {[
                { top: "15%", left: "25%", name: "Jessica", img: avatar1 },
                { top: "20%", right: "20%", name: "Carlos", img: avatar2 },
                { bottom: "20%", left: "15%", name: "Amara", img: avatar3 },
                { bottom: "15%", left: "45%", name: "Yuki", img: avatar4 },
                { bottom: "18%", right: "15%", name: "Mohammed", img: avatar5 },
            ].map((marker, index) => (
                <div
                    key={index}
                    className={`w-10 h-10 rounded-full border-2 border-white shadow-md absolute hover:scale-110 hover:z-10 transition duration-300`}
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
    </section>
);
};

export default TestimonialMap;
