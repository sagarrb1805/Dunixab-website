import React from 'react';
import Image from 'react-bootstrap/Image';
import HomeImage from '../../Images/home_image.png';
import styles from './About.module.css';

function About() {
  return (
    <div>
      <div className={styles['image-container']}>
        <Image className={styles['about-image']} src={HomeImage} alt="About image" />
        <div className={styles['content-overlay']}>
          <h3>About Us</h3>
          <p>Coming soon...</p>
          {/* Add other content here */}
        </div>
      </div>
      {/* <div className={styles['below-image-content']}> */}
        {/* <p>This is content below the image.</p>
        <p>Another paragraph of content.</p> */}
        {/* Add more content here */}
      {/* </div> */}
    </div>
  );
}

export default About;