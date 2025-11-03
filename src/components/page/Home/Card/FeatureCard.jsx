import React from "react";
import { motion } from "framer-motion";
import { FaShippingFast, FaShoppingCart, FaClock, FaHeadset } from "react-icons/fa";

const FeatureCard = () => {
  const features = [
    {
      id: 1,
      title: "Fast Delivery",
      description: "Lightning-fast delivery service to get your products delivered within 24 hours",
      icon: FaShippingFast,
    },
    {
      id: 2,
      title: "Easy Shopping",
      description: "Simple and intuitive shopping experience with user-friendly interface",
      icon: FaShoppingCart,
    },
    {
      id: 3,
      title: "24/7 Service",
      description: "Round-the-clock customer service support for all your queries and needs",
      icon: FaClock,
    },
    {
      id: 4,
      title: "Customer Support",
      description: "Dedicated customer support team ready to help you with any issues",
      icon: FaHeadset,
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose EasyShop?</h2>
          <p className="text-gray-600 text-lg">
            Experience the best online shopping with our premium services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer border border-gray-100 hover:border-green-200"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="flex justify-center mb-4 p-3 bg-green-50 rounded-full"
                >
                  <Icon className="text-4xl text-green-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                <div className="mt-4">
                  <div className="w-12 h-1 bg-green-600 mx-auto rounded-full"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
