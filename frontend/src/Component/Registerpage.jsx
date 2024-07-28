import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registerpage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
   
    const navigate = useNavigate();
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            setErrorMessage("Email format is incorrect. Example: example@gmail.com");
        } else if (!email || !password) {
            setErrorMessage('Both email and password are required.');
        } else {
            const loginData = { email, password };

            axios.post('http://localhost:3002/login', loginData)
                .then((response) => {
                    setErrorMessage('');
                    alert("Successfully logged in");
                    const redirectPath = sessionStorage.getItem('redirectAfterLogin') || '/';
                    sessionStorage.removeItem('redirectAfterLogin');
                    navigate(redirectPath);
                })
                .catch((error) => {
                    console.error("Error logging in:", error);
                    setErrorMessage('Login failed. Please try again.');
                });
        }
    };

    return (
        <Container className='registerpagecomp'>
            <Row className='row justify-content-center' lg={3} xl={3} xxl={3}>
                <Form onSubmit={handleSubmit}>
                    <h2 className='text-center loginheader mt-4'>Login page!</h2>
                    {errorMessage && <p className='error-message'>{errorMessage}</p>}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            className='textboxcolor'
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            className='textboxcolor'
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </Form.Group>
                    <p onClick={() => navigate('/register')} className='link'>New Users?</p>
                    <p onClick={() => navigate('/forgetpassword')} className='link'>Forget Password?</p>
                    <Button variant="primary" type="submit" className='d-flex justify-content-center buttonsignin mt-5'>
                        Submit
                    </Button>
                </Form>
            </Row>
        </Container>
    );
}

export default Registerpage;
