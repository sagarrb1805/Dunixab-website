import React from 'react';
import styles from './Footer.module.css';
import ContactInfo from './contactInfo/ContactInfo';
import Copyright from './copyright/Copyright';

function Footer() {
  return (
    <div className={`${styles['footer-div']}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8'>
            <div className={styles["contact-form-card"]}>
              <h4 className="contact-title">Send a message</h4>
              <form action="https://api.staticforms.xyz/submit" method="post">
                <input type="hidden" name="accessKey" value="84777863-7faa-4941-b4d5-f1c9b5b3ff8b" />
                <div className="form-group mb-3">
                  <input className={`${styles['form-input']} form-control`} type="text" placeholder="Name *" required name="name" />
                </div>
                <div className="form-group mb-3">
                  <input className={`${styles['form-input']} form-control`} type="email" placeholder="Email *" required name="email" />
                </div>
                {/* <div className="form-group mb-3">
                  <input className={`${styles['form-input']} form-control`} type="tel" placeholder="Contact *" required name="contact" />
                </div> */}
                <div className="form-group mb-3">
                  <textarea className={`${styles['form-input']} form-control`} placeholder="Message *" rows="7" required name="message"></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className={`${styles['form-input']} ${styles['btn-submit']} form-control btn btn-primary`}>Send Message</button>
                </div>
                <input type="hidden" name="redirectTo" value={window.location.origin}/>
              </form>
            </div>
          </div>
          <div className='col-md-4'>
            <ContactInfo></ContactInfo>
          </div>
        </div>
        <div className='row'>
          <Copyright></Copyright>
        </div>
      </div>
    </div>
  );
}

export default Footer;
