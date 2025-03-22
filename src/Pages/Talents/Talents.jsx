import React from 'react'
import styles from './Talents.module.css'
import Image from 'react-bootstrap/Image'
import HomeImage from '../../Images/homeImage3.jpg'


function Talents() {
  return (
    <div className={styles['image-container']}>
      <Image className={styles['talent-image']} src={HomeImage} alt="Talent image" />
      <div className={styles['content-overlay']}>
      <h3>Talents</h3>
      <p>Coming soon...</p>
      </div>
      
    </div>


  )
}

export default Talents