// src/components/CallToAction.jsx
import React from "react";
import Button from "../ui/Button";

const CallToAction = () => {
  return (
    <section className="bg-green-50 py-24 px-6 md:px-0">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
          Let’s Explore the Beauty World <br /> with Fun Trends
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          We have got so many adventures for you
        </p>
        <Button variant="primary" size="lg" className="px-8 py-3">
          Sign Up
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
