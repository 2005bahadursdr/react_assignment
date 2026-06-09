import React from 'react';
import { motion } from 'framer-motion';
import './FeatureSection.css';

const FeatureSection = ({ 
  title, 
  highlightWords = [], 
  highlightColors = [],
  subtitle, 
  linkText, 
  imageSrc, 
  imageShape, 
  reverse = false,
  decorativeElements = null
}) => {
  
  // Function to wrap highlighted words
  const renderTitle = () => {
    let newTitle = title;
    highlightWords.forEach((word, index) => {
      const colorClass = highlightColors[index] || 'highlight-pink';
      // simple replacement, assumes exact word match
      newTitle = newTitle.replace(
        new RegExp(`(${word})`, 'gi'), 
        `<span class="${colorClass}">$1</span>`
      );
    });
    return <h2 className="feature-title" dangerouslySetInnerHTML={{ __html: newTitle }} />;
  };

  return (
    <section className={`feature-section container ${reverse ? 'reverse' : ''}`}>
      <motion.div 
        className="feature-text"
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {renderTitle()}
        <p className="feature-subtitle">{subtitle}</p>
        <a href="#" className="feature-link">
          {linkText} <span className="line"></span>
        </a>
      </motion.div>
      <motion.div 
        className="feature-image-wrapper"
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <div className={`feature-image-container ${imageShape}`}>
          <motion.img 
            src={imageSrc} 
            alt="Feature" 
            className="feature-img"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        {decorativeElements}
      </motion.div>
    </section>
  );
};

export default FeatureSection;
