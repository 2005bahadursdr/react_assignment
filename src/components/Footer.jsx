import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="newsletter-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="newsletter-title">Subscribe to<br />our newsletter</h2>
        <p className="newsletter-subtitle">For more pick of the best and latest news for better update</p>
        <motion.button
          className="btn btn-black newsletter-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Subscribe Now
        </motion.button>

        {/* Squiggly lines on the left side */}
        <motion.svg
          className="footer-shape-squiggle"
          width="60" height="40" viewBox="0 0 60 40" fill="none"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <path d="M 0 10 C 15 -5, 25 25, 40 10 C 50 0, 55 15, 60 10" stroke="#ff7575" strokeWidth="2" />
          <path d="M 0 20 C 15 5, 25 35, 40 20 C 50 10, 55 25, 60 20" stroke="#ff7575" strokeWidth="2" />
          <path d="M 0 30 C 15 15, 25 45, 40 30 C 50 20, 55 35, 60 30" stroke="#ff7575" strokeWidth="2" />
        </motion.svg>
        <motion.div
          className="footer-shape-purple"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        ></motion.div>
      </motion.div>

      <div className="footer-links-section container">
        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="footer-heading">Company</h4>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
        </motion.div>

        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="footer-heading">Terms & Policies</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Condition</a>
          <a href="#">Pricing</a>
          <a href="#">Accessibility</a>
        </motion.div>

        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="footer-heading">Follow Us</h4>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Youtube</a>
          <a href="#">Twitter</a>
        </motion.div>

        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4 className="footer-heading">Terms & Policies</h4>
          <p>1498w Fluton ste , STE<br />2D Chicgo , IL 63867.</p>
          <p>(123) 456789000</p>
          <p>info@elementsum.com</p>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p> ©2026 Elementum. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
