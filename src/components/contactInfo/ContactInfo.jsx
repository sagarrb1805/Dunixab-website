import React from 'react';
import styles from './ContactInfo.module.css';
import { TfiMobile } from "react-icons/tfi";
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";

function ContactInfo() {
  return (
    <div className={styles['contact-info-card']}>
      <h4 className="contact-title">Get in touch</h4>
      
      <div className={`${styles['row-div']} row mb-2`}>
        <div className="col-1 pt-1 mr-1">
            <TfiMobile className={`${styles['icon-md']}`}></TfiMobile>
        </div>
        <div className="col-10">
          <h6 className={styles['d-inline']}>
            Phone : <br /> 
            <span className={`${styles['text-muted']}`}>+ (91) 9633 6542 96</span>
          </h6>
        </div>
      </div>

      <div className={`${styles['row-div']} row mb-2`}>
        <div className="col-1 pt-1 mr-1">
            <GrMapLocation className={`${styles['icon-md']}`}></GrMapLocation>
        </div>
        <div className="col-10">
          <h6 className={styles['d-inline']}>
            Location : <br /> 
            <span className={`${styles['text-muted']}`}>Thiruvananthapuram, Kerala, India.</span>
          </h6>
        </div>
      </div>

      <div className={`${styles['row-div']} row mb-2`}>
        <div className="col-1 pt-1 mr-1">
        <MdOutlineAttachEmail className={`${styles['icon-md']}`}></MdOutlineAttachEmail>
        </div>
        <div className="col-10">
          <h6 className={styles['d-inline']}>
            Email : <br /> 
            <span className={`${styles['text-muted']}`}>contact@dunixab.com</span>
          </h6>
        </div>
      </div>

      <ul className={`${styles['social-icons']} pt-4`}>
        
        <li className={styles['social-item']}>
          <a className={`${styles['social-link']}`} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/dunixabstudio/">
            <FaLinkedin></FaLinkedin>
          </a>
        </li>
        <li className={styles['social-item']}>
          <a className={`${styles['social-link']}`} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/dunixab">
            <FaSquareInstagram/>
          </a>
        </li>
        <li className={styles['social-item']}>
          <a className={`${styles['social-link']}`} target="_blank" rel="noopener noreferrer" href="https://x.com/dunixab">
           <FaSquareXTwitter />
          </a>
        </li>
        <li className={styles['social-item']}>
          <a className={`${styles['social-link']}`} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/dunixab">
           <FaFacebook/> 
          </a>
        </li>
        <li className={styles['social-item']}>
          <a className={`${styles['social-link']}`} target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@dunixabstudio">
           <FaSquareYoutube />
          </a>
        </li>
        {/* <li className="social-item">
          <a className="social-link text-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/sagarrb1805">
            <i className="ti-github" aria-hidden="true"></i>
          </a>
        </li> */}
      </ul>
    </div>
  );
}

export default ContactInfo;
