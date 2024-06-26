// src/components/ContactForm.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.section`
  padding: 2rem 0;

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 0.5rem;
    }

    input, textarea {
      margin-bottom: 1rem;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 5px;
      background: #000;
      color: #fff;
      cursor: pointer;

      &:hover {
        background: #333;
      }
    }
  }
`;

const ContactForm = () => {
  return (
    <ContactContainer id="contact">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h2>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send</button>
      </motion.form>
    </ContactContainer>
  );
};

export default ContactForm;
