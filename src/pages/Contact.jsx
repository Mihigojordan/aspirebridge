import React from "react";
import Header from "../components/Header";
import image from '../assets/image.avif'
import ContactCards from "../components/ContactCards";
import ContactForm from "../components/ContactForm";
import GetInvolved from "../components/GetInvolved";
import { useEffect } from "react";
function Contact() {
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Header 
        title="Contact Us" 
        linkTitle="Contact" 
        linkHref="/contact" 
        backgroundImage={image}
      />
      <ContactCards />
      <ContactForm />
      <GetInvolved />
    </div>
  );
}

export default Contact;