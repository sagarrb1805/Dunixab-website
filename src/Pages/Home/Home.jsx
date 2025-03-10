import React from 'react';
import Image from 'react-bootstrap/Image';
import SecondImage from '../../Images/home_image.png';
import FirstImage from '../../Images/jobs-animation-image.jpg'
import styles from './Home.module.css';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Home() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
      <Image className={styles['full-width-image']} src={SecondImage} alt='Home image' />
        <Carousel.Caption>
          <h3 className={styles['carousel-header']}>Unleashing Creativity</h3>
          <p className={styles['carousel-text']}>Where imagination meets animation—crafting worlds beyond reality.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}> 
      <Image className={styles['full-width-image']} src={FirstImage} alt='Home image' />
        <Carousel.Caption>
          <h3 className={styles['carousel-header']}>Innovative Animation</h3>
          <p className={styles['carousel-text']}>Pushing the boundaries of technology to bring your stories to life.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <Image className={styles['full-width-image']} src={SecondImage} alt='Home image' />
        <Carousel.Caption>
          <h3 className={styles['carousel-header']}>Mastering the Art of Storytelling</h3>
          <p className={styles['carousel-text']}>
          We weave emotions into frames, creating unforgettable experiences.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;