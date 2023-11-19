import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  width: 100%;
  text-decoration: none;
  text-align: center;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  transition: all 0.2s ease-in-out !important;
  background: linear-gradient(225deg, #d198c5, #957186);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    filter: brightness(1.1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

const Contact = () => {
  const form = useRef();
  const [contactData, setContactData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, name, subject, message } = contactData;

    if (
      contactData.email &&
      contactData.name &&
      contactData.subject &&
      contactData.message
    ) {
      await fetch(
        "https://contact-b6ff6-default-rtdb.firebaseio.com/Contact.json",
        {
          method: "POST",
          headers: {
            ContentType: "application/json",
          },
          body: JSON.stringify({
            email,
            name,
            subject,
            message,
          }),
        }
      );
      setContactData({
        email: "",
        name: "",
        subject: "",
        message: "",
      });
      toast.success("Message sent successfully!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Please fill out all fields!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          I welcome inquiries and opportunities—please feel free to contact me!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Contact Me 🚀</ContactTitle>
          <ContactInput
            placeholder="Your Email"
            name="email"
            value={contactData.email}
            onChange={handleChange}
            autoComplete="off"
          />
          <ContactInput
            placeholder="Your Name"
            name="name"
            value={contactData.name}
            onChange={handleChange}
            autoComplete="off"
          />
          <ContactInput
            placeholder="Subject"
            name="subject"
            value={contactData.subject}
            onChange={handleChange}
            autoComplete="off"
          />
          <ContactInputMessage
            placeholder="Message"
            rows="4"
            name="message"
            value={contactData.message}
            onChange={handleChange}
          />
          <ContactButton type="submit" value="Send" onClick={handleSubmit} />
        </ContactForm>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
