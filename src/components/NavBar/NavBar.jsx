import CartWidget from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './assets/logo.ico'
import { Link, NavLink } from "react-router-dom";
import './NavBar.css'

const imageWidth=30;
const imageHeight=30;
const tab01 = <>&nbsp;</>;
const tab04 = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
const NavBar = ()=>{

return(<nav>

<Navbar bg="dark" data-bs-theme="dark">
    
    
    <Container>    
    <Link to='/'>
    <img src={logo}  width={imageWidth} height={imageHeight} alt="logo-dinosaurio" /> {tab04}
    <Navbar.Brand >Jurassic Shop</Navbar.Brand>
    </Link>

    
    <Nav className="me-auto">
            <Button as={NavLink} to={`/category/carnivoros`} variant="outline-warning" className={({isActive}) => isActive? 'ActiveOption':'Option'}>Carnívoros</Button>{' '}{tab01}
            <Button as={NavLink} to={`/category/herbivoros`} variant="outline-warning" className={({isActive}) => isActive? 'ActiveOption':'Option'}>Herbívoros</Button>{' '}{tab01}

     </Nav>
                                 
    <Form inline>
        <Row>
          <Col xs="auto">
          <CartWidget/> 
          </Col>
          <Col xs="auto">
          <InputGroup.Text id="basic-addon1">0</InputGroup.Text>
          </Col>
        </Row>
    </Form>
    </Container>      

</Navbar>
          
</nav>);
}

export default NavBar