import React from 'react';
import Image from 'react-bootstrap/Image';
import HomeImage from '../../Images/jobs-animation-image.jpg';
import styles from './Career.module.css';

function Career() {
  return (
    <div>
      <div className={styles['image-container']}>
        <Image className={styles['career-image']} src={HomeImage} alt="About image" />
        <div className={styles['content-overlay']}>
          <h3>Careers</h3>
          <p>Coming soon...</p>
          
        </div>
      </div>
    </div>
  );
}

export default Career;