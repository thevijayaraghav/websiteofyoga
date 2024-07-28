import React, { useState } from "react";
import '../Component/CssFile/Fullreg.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import axios from "axios";

function Fullregister() {
    const [name, setName] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formdata = {
            name,
            mobilenumber,
            email,
            password,
        };

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name) {
            alert("Name is mandatory!");
        } else if (!mobilenumber) {
            alert("Mobile number is mandatory!");
        } else if (!email || !emailPattern.test(email)) {
            alert("Please enter a valid email format (e.g., example@gmail.com)!");
        } else if (!password) {
            alert("Password is mandatory!");
        } else if (password !== confirmPassword) {
            alert("Passwords do not match!");
        } else {
            axios.post('http://localhost:3002/register', formdata)
                .then((response) => {
                    if (response.data) {
                        alert("Successfully registered!");
                        console.log(response.data);
                    } else {
                        alert("Registration successful, but no data returned.");
                    }
                })
                .catch((error) => {
                    console.error("There was an error registering!", error);
                    const errorMsg = error.response?.data?.msg || "Registration failed!";
                    alert(errorMsg);
                });
        }
    };

    return (
        <>
            <Container className='back'>
                <h2 className='text-center'>Register Form!</h2>
                <div className="mb-3 forms d-flex justify-content-center" lg={4} xl={3} xxl={3}>
                    <Form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mobilenumber" className="form-label">Mobile Number</label>
                            <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Mobile Number" onChange={(e) => setMobilenumber(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput3" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleFormControlInput5" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="exampleFormControlInput4" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                </div>
            </Container>
        </>
    );
}

export default Fullregister;
