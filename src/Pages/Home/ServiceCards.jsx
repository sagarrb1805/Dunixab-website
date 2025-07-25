import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Home.module.css'

function ServiceCards({Image, title, text}) {
  return (
    <Card className={styles['card-element']} >
      <Card.Img variant="top" src={Image} className={styles['service-card-image']}/>
      <Card.Body>
        <Card.Title className={styles['card-title']}>{title}</Card.Title>
        <Card.Text className={styles['card-text']}>
          {text}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default ServiceCards;