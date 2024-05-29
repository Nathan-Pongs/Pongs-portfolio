// src/ContactForm.js
import React, { useState } from 'react';
import contactImg from '../img/contact.png'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data submitted:', formData);
  };

  return (
    <div className='relative grid grid-cols-1 gap-4 place-items-center md:flex footer'>
        <div data-aos="fade-right" data-aos-duration="3000" data-aos-once="true" className="max-w-md mx-auto bg-white p-8 px-10 rounded-lg border-4 border-[#121212] shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-black">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
              />
              <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
              />
              <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
              />
              <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
              />
              <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
              >
              Submit
              </button>
          </form>
        </div>
        <div data-aos="fade-left" data-aos-duration="3000" data-aos-once="true" className='max-w-md relative left-14 justify-center'>
            <img src={contactImg} alt='#'/>
        </div>
    </div>  
  );
};

export default Footer;
