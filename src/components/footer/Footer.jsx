import React from 'react';
import { footerData as data } from './Footerdata';

const Footer = () => (
  <footer className="bg-blue-900 text-white py-4">
    <div className="container mx-auto flex justify-center items-center flex-col">
      <div className="text-center">
        <h2 className="text-lg font-semibold">Contact Information</h2>
      </div>
      <div className="mt-2 text-center">
        <a href={data.LinkedinURL} className="text-white hover:text-blue-400" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href={`https://www.instagram.com/${data.InstaURL}`} className="text-white hover:text-blue-400" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <ul className="mt-2 text-center">
        <li>Phone: {data.Phone}</li>
        <li>Email: {data.Email}</li>
      </ul>
      <p className="text-lg font-semibold mt-4 text-center">{data.Name}</p>
    </div>
  </footer>
);

export default Footer;
