import React from 'react';
import { footerData as data } from './Footerdata';
import Linked from "../../assets/linkedin.svg";
import Insta from "../../assets/insta.svg";

const Footer = () => (
  <footer className="bg-green-theme text-neon-green py-4">
    <div className="container mx-auto flex justify-center items-center flex-col">
      <div className="text-center">
        <h2 className="text-lg font-semibold">Contact Information</h2>
      </div>
      <p className="text-lg font-semibold mt-4 text-center">{data.Name}</p>
     <div className='flex justify-center'>
       <div className="mt-2 text-center">
        <a href={data.LinkedinURL} className="text-white w-12 h-12 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
          <img src={Linked} alt="LinkedIn" className='w-12 h-12' />
        </a>
      </div>
      <div className="mt-2 text-center">
        <a href={`https://www.instagram.com/${data.InstaURL}`} className="text-white w-12 h-12 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
          <img src={Insta} alt="Instagram"  className='w-12 h-12' />
        </a>
        </div>
      </div>
      <ul className="mt-2 text-center">
        <li>Phone: {data.Phone}</li>
        <li>Email: {data.Email}</li>
      </ul>
    </div>
  </footer>
);

export default Footer;
