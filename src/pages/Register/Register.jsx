import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { useState } from 'react';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(true);
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo)

        createUser(email, password)
        .then((result) => {
            const createdUser = result.user;
            console.log(createdUser);
          })
          .catch((error) => {
             console.log(error)
             
          });
    }
    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
    return (
        <Container className="mx-auto w-25 mt-5">
        <h3>Please Register</h3>
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name'  placeholder="Your Name" required />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control type="text" name='photo' placeholder="Photo Url" required />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" name='accept'
                onClick={handleAccepted}
                 label={<>Accept<Link to="/terms"> term and condition</Link></>} required />
            </Form.Group>
            <Form.Text className='d-block'>
              have you any account<Link to="/login">Login</Link>
            </Form.Text>
            <Button variant="primary" disabled={!accepted} type="submit">
                Register
            </Button>
            <Form.Text className="  text-success">
                 
            </Form.Text>
            <Form.Text className="  text-danger">
                 
            </Form.Text>
        </Form>

    </Container>
    );
};

export default Register;