import React from 'react';
import './FloatingWhatsApp.css';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const phoneNumber = "917020730419";
  const defaultMessage = "Hi! I want to know more about the batches at Scholar's Biology House.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="Chat on WhatsApp">
      <MessageCircle size={28} />
      <div className="whatsapp-tooltip">Chat with us!</div>
    </a>
  );
};

export default FloatingWhatsApp;
