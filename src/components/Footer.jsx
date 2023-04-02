import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';

const Footer = ({footer}) => {
    return (
            <div>
              <h5 className='footer'>
                {footer} <Badge bg="primary">Siguenos y danos tu Like!</Badge>
              </h5>
            </div>
          );
        }

export default Footer; 