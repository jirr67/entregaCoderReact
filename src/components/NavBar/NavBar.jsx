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
const imageWidth=30;
const imageHeight=30;
const tab01 = <>&nbsp;</>;
const tab04 = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
const NavBar = ()=>{

return(<nav>

<Navbar bg="dark" data-bs-theme="dark">
    
    
    <Container>    
 
    <img src={logo}  width={imageWidth} height={imageHeight} alt="logo-dinosaurio" /> {tab04}
    <Navbar.Brand href="#home">Jurassic Shop</Navbar.Brand>
    <Nav className="me-auto">
        <Button href="#tiranosaurios" variant="outline-warning">Tiranosaurios</Button>{' '}{tab01}
        <Button href="#velociraptores" variant="outline-warning">Velociraptores</Button>{' '}{tab01}
        <Button href="#triceratops" variant="outline-warning">Tricératops</Button>{' '}
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
    </Form></Container>      

</Navbar>
          
</nav>);
}

export default NavBar