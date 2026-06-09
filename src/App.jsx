import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import ServicesSection from './components/ServicesSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      {/* Sweeping background curve from Figma */}
      <motion.svg 
        className="bg-curve"
        viewBox="0 0 1000 2000" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '400px',
          left: 0,
          width: '100%',
          height: '2500px',
          zIndex: 0,
          pointerEvents: 'none'
        }}
        preserveAspectRatio="none"
      >
        <motion.path 
          d="M 1000 0 C 400 300, 1100 800, 200 1200 C -500 1600, 800 1800, 500 2000" 
          stroke="#ff7575" 
          strokeWidth="3" 
          fill="none" 
        />
      </motion.svg>

      <Navbar />
      <HeroSection />
      
      {/* Feature Section 1 */}
      <FeatureSection 
        title="Tomorrow should<br/>be better than today"
        highlightWords={['better', 'today']}
        highlightColors={['highlight-pink', 'highlight-green']}
        subtitle="We are a team of strategists, designers, and tech pros. Together, we define the progress and support when you return real results."
        linkText="Read more"
        imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        imageShape="shape-circle"
        reverse={false}
        decorativeElements={
          <>
            <div className="decor-square" style={{ top: '-10%', right: '0' }}></div>
          </>
        }
      />

      {/* Feature Section 2 */}
      <FeatureSection 
        title="See how we can<br/>help you progress"
        highlightWords={['progress']}
        highlightColors={['highlight-orange']}
        subtitle="We are a team of strategists, designers, and tech pros. Together, we define the progress and support when you return real results."
        linkText="Read more"
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        imageShape="shape-semi-circle"
        reverse={true}
        decorativeElements={
          <>
            <div className="decor-triangle" style={{ top: '10%', left: '-10%' }}></div>
            <div className="decor-triangle" style={{ bottom: '-10%', right: '10%', transform: 'rotate(180deg)' }}></div>
          </>
        }
      />

      <ServicesSection />
      
      <TestimonialSection />

      <Footer />
    </div>
  );
}

export default App;
