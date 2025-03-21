import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Home.module.css'

function ServiceCards({Image, title, text}) {
  return (
    <Card className={styles['card-element']} >
      <Card.Img variant="top" src={Image}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default ServiceCards;