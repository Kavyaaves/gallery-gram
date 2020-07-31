import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import DeleteIcon from "@material-ui/icons/Delete";
import "./ImageGrid.css";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
      <DeleteIcon className="delete" />
    </div>
  );
};

export default ImageGrid;
