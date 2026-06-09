import React from 'react';
import { motion } from 'framer-motion';
import './TestimonialSection.css';

const avatars = [
  { id: 1, src: 'https://i.pravatar.cc/150?img=21', top: '20%', left: '15%' },
  { id: 2, src: 'https://i.pravatar.cc/150?img=22', top: '10%', right: '20%' },
  { id: 3, src: 'https://i.pravatar.cc/150?img=23', bottom: '25%', left: '10%' },
  { id: 4, src: 'https://i.pravatar.cc/150?img=24', bottom: '15%', right: '15%' },
  { id: 5, src: 'https://i.pravatar.cc/150?img=25', top: '50%', left: '5%' },
  { id: 6, src: 'https://i.pravatar.cc/150?img=26', top: '40%', right: '5%' },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section container">
      <motion.h2 
        className="testimonial-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="highlight-green">What</span> our customer<br />
        says <span className="highlight-orange">About Us</span>
      </motion.h2>

      <div className="testimonial-content">
        <motion.div 
          className="quote-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="quote-mark left">“</span>
          <p>
            Elementsum delivered the site web into timeline as they requested. More text, the client founder 50% increase in traffic with 3 days soon in the web. They also had an impressive ability to use technologies that the company hadn't used, which have also proved to be easy to use which attests.
          </p>
          <span className="quote-mark right">”</span>
        </motion.div>

        <div className="testimonial-avatars">
          {avatars.map((avatar, index) => (
            <motion.img
              key={avatar.id}
              src={avatar.src}
              alt="Customer Avatar"
              className="testimonial-avatar-img"
              style={{
                top: avatar.top,
                left: avatar.left,
                right: avatar.right,
                bottom: avatar.bottom,
              }}
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: 0.4 + (index * 0.1), 
                type: "spring", 
                stiffness: 100 
              }}
              whileHover={{ scale: 1.15, zIndex: 10 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
