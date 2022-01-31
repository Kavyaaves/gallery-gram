import React, { useEffect, useState } from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import useFirestore from "./hooks/useFirestore";
function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    if (selectedImg && selectedImg?.length > 1) open();
    else close()
  }, [selectedImg])
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const { docs } = useFirestore("images");
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {modalOpen && (
        <Modal
          close={close}
          modalOpen={modalOpen} selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
          docs={docs}
        />
      )}
    </div>
  );
}

export default App;
