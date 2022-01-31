import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import {
  projectStorage,
  projectFirestore,
  timeStamp,
} from "../firebase/config";
import "./ImageGrid.css";

const ImageGrid = ({ setSelectedImg }) => {
  const [all, setAll] = React.useState([])
  const { docs } = useFirestore("images");

  const handleDelete = (doc) => {
    var fileRef = projectStorage.refFromURL(doc.url);
    fileRef.delete().then(() => {
      projectFirestore.collection("images").doc(doc.id).delete().then(() => {
        alert("Image successfully deleted!");
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });
  };
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
          >
            <motion.img
              src={doc.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={() => setSelectedImg(doc.url)}
            />
            <motion.a
              className="remove-image"
              href=""
              style={{ display: "inline" }}
              onClick={(e) => {
                e.preventDefault();
                handleDelete(doc);
              }}
            >
              &#215;
            </motion.a>
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
