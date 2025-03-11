import React from 'react';
import Image from 'react-bootstrap/Image';
import SecondImage from '../../Images/home_image.png';
import FirstImage from '../../Images/jobs-animation-image.jpg'
import styles from './Home.module.css';
import Carousel from 'react-bootstrap/Carousel';
import ServiceCards from './ServiceCards';
import ServiceImage from '../../Images/service-02.png'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Home() {
  let services = [{ title: "Service 1", text: "Some quick example text to build on the card title and make up the bulk of the card's content", Image: ServiceImage },
  { title: "Service 2", text: "Some quick example text to build on the card title and make up the bulk of the card's content", Image: ServiceImage },
  { title: "Service 3", text: "Some quick example text to build on the card title and make up the bulk of the card's content", Image: ServiceImage },
  { title: "Service 3", text: "Some quick example text to build on the card title and make up the bulk of the card's content", Image: ServiceImage }
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
      <div className={styles['home-main-content']}>
      <div >
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