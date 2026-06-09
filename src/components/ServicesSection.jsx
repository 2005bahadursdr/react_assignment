import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './ServicesSection.css';

const servicesLeft = [
  "Office of multiple annual content",
  "The longer UI/UX force digital experimental",
  "Shift front content, social, digital"
];

const servicesRight = [
  "Collaborative & partnership",
  "We talk about our weight", 
  "Piloting digital confidence"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const ServicesSection = () => {
  return (
    <section className="services-section container">
      <div className="services-header">
        <motion.h2 
          className="services-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          What we <span className="highlight-green">can</span><br />
          <span className="highlight-orange">offer</span> you!
        </motion.h2>
      </div>

      <div className="services-list-container">
        <motion.div 
          className="services-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicesLeft.map((service, index) => (
            <motion.div key={`left-${index}`} className="service-item left-item" variants={itemVariants}>
              <p>{service}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="services-list main-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicesRight.map((service, index) => (
            <motion.div 
              key={`right-${index}`} 
              className="service-item right-item" 
              variants={itemVariants}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
            >
              <h3>{service}</h3>
              <FiArrowRight className="service-icon" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
