import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/category/0';
    const {signIn} = useContext(AuthContext);
    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <Container className="mx-auto w-25 mt-5">
            <h3>Please Login</h3>
            <Form onSubmit={handleLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                 
                <Form.Text className='d-block'>
                Don't have any account<Link to="/register">Register</Link>
                </Form.Text>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="  text-success">
                     
                </Form.Text>
                <Form.Text className="  text-danger">
                     
                </Form.Text>
            </Form>

        </Container>
    );
};

export default Login;