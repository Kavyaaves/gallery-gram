import React from "react";
import { motion } from "framer-motion";
import "./Modal.css";

const Modal = ({ docs, selectedImg, setSelectedImg }) => {
  function getIndex(selectedImg) {
    return docs.findIndex((img) => img.url === selectedImg);
  }
  var slideIndex = getIndex(selectedImg);
  console.log(slideIndex);
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
  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img
        src={selectedImg}
        alt="enlarged pic"
        initial={{ y: "100vh" }}
        animate={{ y: "100vh" }}
      />
      <a
        className={`${slideIndex - 1 ? "block" : "none"} ${
          slideIndex === 0 ? "" : "prev"
        }`}
        onClick={handlePrev}
      >
        &#10094;
      </a>
      <a
        className={`${slideIndex + 1 ? "block" : "none"} ${
          slideIndex === docs.length - 1 ? "" : "next"
        }`}
        onClick={handleNext}
      >
        &#10095;
      </a>
    </motion.div>
  );
};

export default Modal;
