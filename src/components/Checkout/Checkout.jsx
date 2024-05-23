import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Checkout.css'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { serverTimestamp } from 'firebase/database';
import { createOrder } from '../../firebase/db';



const Checkout = () =>{

    const { cart, total} = useContext(CartContext)
    const [idOperacion, setIdOperacion] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault()
        const [name,mail,phone] = e.target
        console.log(name.value,mail.value,phone.value);

        const order ={
            buyer:{
                name:name.value,
                email: mail.value,
                phone: phone.value
            },
            total:total,
            items:cart,
            date: serverTimestamp()
        }
    
        createOrder(order).then(id=>{
            setIdOperacion(id)
        })
    }


  return (
    <div className='checkout'>
      
        <article className="CardItemCheckout">
                <header className="HeaderCheckout">
                    <p>Checkout idOperacion</p>
                </header>

                <Form className='formularioCompleto' onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Alan Grant" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="mail">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="email" placeholder="dinosaurio@gmail.com" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" placeholder="56789992" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="check">
                        <Form.Check type="checkbox" label="Acepto que si un dinosaurio me come, no es responsabilidad de la empresa." />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='pagar'>
                        Pagar
                    </Button>
                </Form>
        </article>

    </div>
  );
}

export default Checkout;