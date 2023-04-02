import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cardcomponents = ({url, title, info, button}) => {
    return (
    <div class="cards-container">
        <Card class="card" style={{ width: '18rem'}}>
            <Card.Img variant="top" src={url}/>
            <Card.Body>
                <Card.Title class="titulo">{title}</Card.Title>
                <Card.Text>
                    {info}
                </Card.Text>
                <Button variant="primary">{button}</Button>
            </Card.Body>
        </Card>
    </div>
    )
}

export default Cardcomponents; 