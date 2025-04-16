import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import '../Style/Hero.css'; // Assuming Hero-specific styles

const Hero = ({ isSummarized, onSummarizeClick }) => {
  const [currentText, setCurrentText] = useState("Summarize any website");
  const textArray = [
    "Summarize any website...",
    "Summarize any paragraph...",
    "Summarize any document..."
  ];

  const [showDocumentText, setShowDocumentText] = useState(false);

  useEffect(() => {
    if (isSummarized) {
      setShowDocumentText(true); // Show document text after button click
    }
  }, [isSummarized]);

  useEffect(() => {
    if (!isSummarized) {
      const interval = setInterval(() => {
        setCurrentText((prev) => {
          const currentIndex = textArray.indexOf(prev);
          const nextIndex = (currentIndex + 1) % textArray.length;
          return textArray[nextIndex];
        });
      }, 3000); // Change text every 3 seconds

      return () => clearInterval(interval); // Clean up interval
    }
  }, [isSummarized]);

  return (
    <section className="hero-section">
      <motion.div
        className="hero-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          key={currentText}
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentText}
        </motion.h1>

        {/* TLDR Text */}
        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          TLDR: This helps you summarize any piece of text into concise, easy to digest content so you can free yourself from information overload.
        </motion.p>

        {/* Button */}
        <motion.button
          className="btn-summarize"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          onClick={onSummarizeClick}
        >
          SUMMARIZE NOW - IT'S FREE
        </motion.button>
      </motion.div>

      {/* Show document text on click */}
      {/* {showDocumentText && (
        // <motion.div
        //   className="document-text"
        //   initial={{ opacity: 0 }}
        //   animate={{ opacity: 1 }}
        //   transition={{ duration: 1 }}
        // >
        //   <h2>Summarize any document</h2>
        // </motion.div>
      )}  */}
    </section>
  );
};

export default Hero;
