import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const avatars = [
  { id: 1, src: 'https://i.pravatar.cc/150?img=11', top: '10%', left: '5%' },
  { id: 2, src: 'https://i.pravatar.cc/150?img=12', top: '25%', left: '20%' },
  { id: 3, src: 'https://i.pravatar.cc/150?img=13', top: '5%', right: '15%' },
  { id: 4, src: 'https://i.pravatar.cc/150?img=14', top: '40%', right: '5%' },
  { id: 5, src: 'https://i.pravatar.cc/150?img=15', bottom: '10%', left: '30%' },
  { id: 6, src: 'https://i.pravatar.cc/150?img=16', bottom: '20%', right: '25%' },
];

const HeroSection = () => {
  return (
    <section className="hero container">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="hero-title">
          The thinkers and<br />
          doers were <span className="highlight-pink">changing</span><br />
          the <span className="highlight-green">status</span> Quo with
        </h1>
        <p className="hero-subtitle">
          We are a team of strategists, designers, and tech pros. Together,<br />
          we define the progress and support when you return real results.
        </p>
      </motion.div>

      <div className="hero-avatars">
        {/* Ambient Pulse Glow */}
        <motion.div 
          className="pulse-glow"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        {avatars.map((avatar, index) => (
          <motion.img
            key={avatar.id}
            src={avatar.src}
            alt="Avatar"
            className="avatar-img"
            style={{
              top: avatar.top,
              left: avatar.left,
              right: avatar.right,
              bottom: avatar.bottom,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + (index * 0.1), type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.1, zIndex: 10 }}
          />
        ))}
        {/* Decorative Shapes */}
        <motion.div 
          className="shape shape-purple"
          initial={{ opacity: 0, x: 50, rotate: -45 }}
          animate={{ opacity: 1, x: 0, rotate: -45 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        ></motion.div>
        <motion.svg 
          className="shape shape-squiggle" 
          width="100" height="200" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
        >
          <motion.path 
            d="M50 0 C 100 50, 0 100, 50 150 C 100 200, 0 250, 50 300" 
            stroke="#000" 
            strokeWidth="2" 
            fill="transparent" 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
        </motion.svg>
      </div>
    </section>
  );
};

export default HeroSection;
