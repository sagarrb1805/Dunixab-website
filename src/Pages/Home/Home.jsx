import React from 'react';
import Image from 'react-bootstrap/Image';
import SecondImage from '../../Images/home_image.png';
import FirstImage from '../../Images/jobs-animation-image.jpg'
import HomeImage3 from '../../Images/homeImage3.jpg'
import styles from './Home.module.css';
import Carousel from 'react-bootstrap/Carousel';
import ServiceCards from './ServiceCards';
import ServiceImage from '../../Images/service-02.png'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Home() {
  let services = [{ title: "2D & 3D Animation", text: "We create high-quality 2D and 3D animations that bring ideas to life. From character animations to product demos, we craft engaging visuals that captivate audiences.", Image: ServiceImage },
  { title: "Motion Graphics", text: "Enhance your videos with dynamic motion graphics. We specialize in kinetic typography, animated logos, and visual effects to make your content stand out.", Image: ServiceImage },
  { title: "Sound Designing & Recording", text: "From voiceovers to sound effects, we offer professional sound design and audio recording services that enhance storytelling and engagement.", Image: ServiceImage },
  { title: "Graphic Designing & Video Editing", text: "Our expert designers and editors craft visually stunning graphics and videos, ensuring polished and impactful media for branding, advertising, and content creation.", Image: ServiceImage }
  ]
  return (
    <>
      <Carousel>
        <Carousel.Item interval={2000}>
          <Image className={styles['full-width-image']} src={SecondImage} alt='Home image' />
          <Carousel.Caption>
            <h3 className={styles['carousel-header']}>Unleashing Creativity</h3>
            <p className={styles['carousel-text']}>Where imagination meets animation—crafting worlds beyond reality.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Image className={styles['full-width-image']} src={HomeImage3} alt='Home image' />
          <Carousel.Caption>
            <h3 className={styles['carousel-header']}>Innovative Animation</h3>
            <p className={styles['carousel-text']}>Pushing the boundaries of technology to bring your stories to life.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Image className={styles['full-width-image']} src={FirstImage} alt='Home image' />
          <Carousel.Caption>
            <h3 className={styles['carousel-header']}>Mastering the Art of Storytelling</h3>
            <p className={styles['carousel-text']}>
              We weave emotions into frames, creating unforgettable experiences.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className={styles['home-main-content']}>
      <div className={styles['service-header-div']}>
        <p>Our services</p>
        <h3>THE <span>SERVICES</span> WE’RE OFFERING</h3>
      </div>
      <div className={`${styles["card-container"]} container `}>
        {services.map((service, index) => (
          <ServiceCards key={index} Image={service.Image} title={service.title} text={service.text} />
        ))}
      </div>
      </div>

    </>
  );
}

export default Home;