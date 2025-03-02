import React from "react";
import "./Services.css";
import { FaGamepad, FaCode, FaMobileAlt, FaGlobe } from "react-icons/fa";

// Define type for service items
interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Array of service offerings
const services: ServiceItem[] = [
  {
    icon: <FaGamepad className="service-icon" />,
    title: "Game Development",
    description:
      "I create Hyper-Casual, Casual, and Open-World games for PC & Android using Unity.",
  },
  {
    icon: <FaMobileAlt className="service-icon" />,
    title: "Android Game Development",
    description:
      "Optimized mobile games with smooth mechanics, engaging UI, and solid performance.",
  },
  {
    icon: <FaCode className="service-icon" />,
    title: "Game Programming",
    description:
      "Proficient in C++, C#, and Python to build interactive gameplay systems with Unity and Console Games.",
  },
  {
    icon: <FaGlobe className="service-icon" />,
    title: "Web Development",
    description:
      "I create responsive and dynamic web applications with html, Css, Javascript and React",
  },
];

const Services: React.FC = () => {
  return (
    <section className="services" id="services-section">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="intro-text">
          In addition to my passion for game and web development, I also offer{" "}
          <strong>freelancing services</strong> to bring ideas to life. Whether
          you need a unique game, a web application, or a seamless user
          experience, I'm here to help!
        </p>

        <div className="service-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              {service.icon}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
