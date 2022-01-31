import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Modal.css";

const Modal = ({ docs, selectedImg, setSelectedImg, modalOpen, modalClose }) => {
  function getIndex(selectedImg) {
    return docs.findIndex((img) => img.url === selectedImg);
  }
  var slideIndex = getIndex(selectedImg);
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  const handlePrev = (e) => {
    if (slideIndex - 1 > -1) {
      setSelectedImg(docs[slideIndex - 1].url);
    } else {
      setSelectedImg(null);
    }
  };

  const handleNext = (e) => {
    if (slideIndex + 1 < docs.length) {
      setSelectedImg(docs[slideIndex + 1].url);
    } else {
      setSelectedImg(null);
    }
  };
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img
        className="mySlides"
        src={selectedImg}
        alt="enlarged pic"
        initial={{ y: "100vh" }}
        animate={{ y: "100vh" }}
      />
      <a
        className={`${slideIndex - 1 ? "block" : "none"} ${slideIndex === 0 ? "" : "prev"
          }`}
        onClick={handlePrev}
      >
        &#10094;
      </a>
      <a
        className={`${slideIndex + 1 ? "block" : "none"} ${slideIndex === docs.length - 1 ? "" : "next"
          }`}
        onClick={handleNext}
      >
        &#10095;
      </a>
    </motion.div>
  );
};

export default Modal;
