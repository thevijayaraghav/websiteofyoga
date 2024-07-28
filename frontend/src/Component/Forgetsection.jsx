import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import '../Component/CssFile/ForgetPassword.css'

function ForgetPassword() {
    const [email, setEmail] = useState('');
    const [changePassword, setChangePassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [alert, setAlert] = useState({ message: '', type: '' });

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setChangePassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();

        if (!email) {
            setAlert({ message: 'Email is mandatory', type: 'error' });
        } else if (!changePassword) {
            setAlert({ message: 'Enter your new password', type: 'error' });
        } else if (!confirmPassword) {
            setAlert({ message: 'Enter your confirm password', type: 'error' });
        } else if (changePassword !== confirmPassword) {
            setAlert({ message: 'Password mismatch', type: 'error' });
        } else {
            const newPassword = { email, changePassword };

            axios.post('http://localhost:3002/forgetpassword', newPassword)
                .then((response) => {
                    setAlert({ message: 'Password changed successfully', type: 'success' });
                    console.log(response.data);
                })
                .catch((err) => {
                    setAlert({ message: err.response.data.msg || 'An error occurred', type: 'error' });
                    console.log(err.response.data);
                });
        }
    }

    return (
        <Container className="centered-container">
            <Row>
                <Col>
                    <Form onSubmit={submit} className="shadowed-form">
                        {alert.message && (
                            <div className={`alert ${alert.type}`}>
                                {alert.message}
                            </div>
                        )}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleChangeEmail} className={alert.type === 'error' ? 'error' : ''} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>New Password:</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={changePassword} onChange={handlePasswordChange} className={alert.type === 'error' ? 'error' : ''} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password:</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={confirmPassword} onChange={handleConfirmPassword} className={alert.type === 'error' ? 'error' : ''} />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="d-flex justify-content-center button-signin mt-5">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ForgetPassword;
