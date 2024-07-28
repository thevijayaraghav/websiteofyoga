import '../Component/CssFile/Sixthsection.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import axios from 'axios';

function Sixthsection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    date: '',
    section: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3002/createappointment', formData);
      alert('Appointment booked successfully!');
      // Optionally, clear form fields after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        date: '',
        section: '',
        phoneNumber: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error creating appointment:', error);
      alert('Failed to book appointment');
    }
  };


  return (
    <>
      <Container fluid className='co mt-5 mb-5'>
        <Row>
          <Col className='text-center col-12'>
            <h2 className='ftschedule'>FORM & TIME SCHEDULE</h2>
            <p className='timedefnition'>At solmen li esser necessi uniform grammatica, pronunciation</p>
          </Col>
        </Row>

        <Container>
          <Row>
            <Col lg={6} className='text-center'>
              <div className='appointmentformsss'>
                <h2 className='makeanappo'>Make An Appointment</h2>
                <p className='timedefnition'>At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.</p>

                <form action='#' className='appointment-form' onSubmit={handleSubmit} >
                  <Row className='mb-2 mb-lg-0'>
                    <Col lg={6}><input type="text" placeholder='First Name'  name='firstName' className='form-control'  value={formData.firstName}
          onChange={handleInputChange} /></Col>
                    <Col lg={6}><input type="text" placeholder='Last Name' className='form-control' name='lastName' value={formData.lastName} onChange={handleInputChange}/></Col>
                  </Row>

                  <Row className='mt-4'>
                    <Col lg={6}><input type="date" className='form-control'  name='date' value={formData.date} onChange={handleInputChange} /></Col>
                    <Col lg={6}>
                      <select name="section" id="class" className='form-control'  value={formData.section} onChange={handleInputChange}>
                        <option value="">Choose the section</option>
                        <option value="EarlyMorning">EarlyMorning</option>
                        <option value="Morning">Morning</option>
                        <option value="Evening">Evening</option>
                      </select>
                    </Col>
                  </Row>

                  <Row className='mt-4'>
                    <Col lg={6}><input type="text" placeholder='Phone Number' className='form-control'  name='phoneNumber' value={formData.phoneNumber} onChange={handleInputChange}/></Col>
                    <Col lg={6}><input type="email" placeholder='Email' className='form-control'  name='email' value={formData.email} onChange={handleInputChange} /></Col>
                  </Row>

                  <Row className='mt-4 px-3'>
                    <Col lg={12}>
                      <textarea
                        rows={3}
                        placeholder='Enter your message (optional)'
                        className='form-control'
                        style={{ width: '100%', height: '100%' }}
                        name='message' value={formData.message} onChange={handleInputChange}
                      />
                    </Col>
                  </Row>

                  <Row className='mt-4 px-3'>
                    <Col lg={12}>
                      <button type='submit' className='btn btn-primary'>BOOK AN APPOINTMENT</button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>

            <Col lg={6} className=' text-center'>
              <div className='weekendss '>
                <h3 className='weekends'>Weekends</h3>
                <p className='time'>06.00 AM - 07.00 AM</p>
                <p className='beginers'>kundalini meditation beginners for Yoga</p>
                <p className='time'>07.00 AM - 08.30 AM</p>
                <p className='beginers'>Surya Namaskar & Advanced Meditation</p>
                <div className='weekdays'>
                  <h3 className='weekends'>Weekdays</h3>
                  <p className='time'>05.00 AM - 07.00 AM</p>
                  <p className='beginers'>Weekly Practice with children Yoga</p>
                  <p className='time'>08.00 AM - 10.00 AM</p>
                  <p className='beginers'>Advanced Meditation & Healthy Recipes</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Sixthsection;
