import React, { useState } from "react";
import { contactInfo } from "../../common/content";
import contact from "../../images/contactBanner.png";
import { ContactStyled } from "./Contact.styled";
import { UserInfoForm } from "../../common/Form";
import { MessageField } from "../../common/Form";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const ContactForm = ({ formData, handleChange, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <UserInfoForm formData={formData} handleChange={handleChange} />
      <MessageField value={formData.message} onChange={handleChange} />
      <button type="submit">Send</button>
    </form>
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappNumber = "04706616049"; // Your WhatsApp number in international format without the plus sign
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <ContactStyled>
      <div className="contact-banner">
        <img src={contact} alt="Contact MJP Food Products" />
      </div>
      <section className="contact-info">
        <h1>Get in Touch</h1>
        <p>
          We'd love to hear from you! Whether you have a question about our
          products, feedback, or just want to say hello, feel free to reach out
          to us.
        </p>
      </section>
      <section className="contact-details">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <ContactForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            includeAddressField={false} // No address needed for Contact form
            includePickupDeliveryField={false}
            includePhoneField={false}
          />
        </div>
        <div className="contact-info-details">
          <h2>Reach Out</h2>
          <p>
            <strong>Phone:</strong> {contactInfo.contactDetails.phone}
          </p>
          <p>
            <strong>Email:</strong> {contactInfo.contactDetails.email}
          </p>
          <div className="social-media">
            {contactInfo.contactDetails.socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={social.iconClass}></i>
              </a>
            ))}
          </div>
          <div className="map">
            <iframe src={contactInfo.contactDetails.mapUrl}></iframe>
          </div>
        </div>
      </section>
    </ContactStyled>
  );
}

export default Contact;
