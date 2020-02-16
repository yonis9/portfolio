import React from 'react';

const ContactForm = ({ onInputChange, onSubmit }) => (
    <form id='send-message' data-aos="zoom-in-up" onSubmit={onSubmit}>
        <input 
        name='name' 
        onChange={onInputChange} 
        type='text' 
        placeholder='Name' 
        required />
        <input 
        name='email' 
        onChange={onInputChange}
        type='email' 
        placeholder='Email' 
        required/>
        <textarea
        name='message'
        onChange={onInputChange}
        rows="10"
        cols="50"
        placeholder='Your Message' required>
        </textarea>
        <button type='submit'>SUBMIT</button>

    </form>
)

export default ContactForm;