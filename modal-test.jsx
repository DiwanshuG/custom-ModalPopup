import { useState } from "react";
import Modal from "./modal";
import "./modal.css";
export default function ModalTest() {
  const [showModalpopUp, setShowModalPopup] = useState(false);
  function handleToggleModalPopup() {
    setShowModalPopup(!showModalpopUp);
  }

  function onClose() {
    setShowModalPopup(false);
  }
  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Model PopUp</button>
      {showModalpopUp && (
        <Modal onClose={onClose} body={<div>Customized body</div>} />
      )}
    </div>
  );
}
