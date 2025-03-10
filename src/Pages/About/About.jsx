import React from 'react'
import Image from 'react-bootstrap/Image';
import HomeImage from '../../Images/home_image.png'
import styles from './About.module.css';

function About() {
  return (
    <div>
      <Image className={styles['about-image']} src={HomeImage} alt='Home image'></Image>
    </div>
  )
}

export default About