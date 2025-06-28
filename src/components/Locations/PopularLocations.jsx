// src/components/PopularLocations.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const destinations = [
  {
    title: "The Maldives",
    location: "Indian Subcontinent of Asia",
    image: "src/assets/maldives.jpg",
    slug: "the-maldives",
  },
  {
    title: "Noosa Fairy Rock Pools",
    location: "Isle of Skye, Scotland",
    image: "src/assets/rockpool1.jpg",
    slug: "noosa-fairy-rock-pools-1",
  },
  {
    title: "Noosa Fairy Rock Pools",
    location: "Isle of Skye, Scotland",
    image: "src/assets/rockpool2.jpg",
    slug: "noosa-fairy-rock-pools-2",
  },
  {
    title: "Machu Picchu",
    location: "Peru",
    image: "src/assets/machu.jpg",
    slug: "machu-picchu",
  },
    {
        title: "Santorini",
        location: "Greece",
        image: "src/assets/santorini.jpg",
        slug: "santorini",
    },
    {
        title: "Grand Canyon",
        location: "Arizona, USA",
        image: "src/assets/grand-canyon.jpg",
        slug: "grand-canyon",
    },
    {
        title: "Great Barrier Reef",
        location: "Australia",
        image: "src/assets/great-barrier-reef.jpeg",
        slug: "great-barrier-reef",
    },
    {
        title: "Eiffel Tower",
        location: "Paris, France",
        image: "src/assets/eiffel-tower.jpg",
        slug: "eiffel-tower",
    },
];

const PopularLocations = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className=" py-12 px-6 md:px-12">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Popular Locations</h2>
          <p className="text-gray-500 text-sm">Checkout most trending places to visit</p>
        </div>
        <div className="space-x-2 hidden md:flex">
          <button onClick={scrollLeft} className="w-8 h-8 bg-gray-200 rounded-full text-lg font-bold">‹</button>
          <button onClick={scrollRight} className="w-8 h-8 bg-primary text-white rounded-full text-lg font-bold">›</button>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {destinations.map((item, index) => (
          <Link
            key={index}
            to={`/location/${item.slug}`}
            className="min-w-[240px] sm:min-w-[280px] max-w-[280px] flex-shrink-0"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[250px] object-cover rounded-xl shadow"
            />
            <h3 className="text-lg font-semibold mt-2 text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.location}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularLocations;
