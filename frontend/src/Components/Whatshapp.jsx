import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon from react-icons

function Whatshap() {
  // Function to handle WhatsApp chat link
  const openWhatsApp = () => {
    const phoneNumber = "9335920991";
    const message = "Hello!"; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank"); 
  };

  return (
    <div
      onClick={openWhatsApp}
      style={{
        position: "fixed",
        bottom: "200px", 
        right: "40px", 
        cursor: "pointer",
        zIndex: 1000,
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Adding transition for animation
      }}
      className="whatsapp-icon" // Adding class for hover effect
    >
      <FaWhatsapp size={60} color="#25D366" /> {/* WhatsApp icon with green color */}
    </div>
  );
}

export default Whatshap;
