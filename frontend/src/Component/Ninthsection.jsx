import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { FaOpencart } from "react-icons/fa6";
import '../Component/CssFile/Ninthsection.css';
import { useNavigate } from 'react-router-dom';

function Ninthsection() {
    const navigate = useNavigate();
   
    const handleNavigation = (path) => {
        sessionStorage.setItem('redirectAfterLogin', path);
        navigate('/login');
    };

    return (
        <div className="full-height">
            <Container fluid>
                <Row className='sociallink m-5'>
                    <Col className='text-end col-6'>
                        <p className='cpy'>© 2024 All Rights Reserved. <span>Created by Web Domus Italia</span></p>
                    </Col>
                    <Col className='text-center col-6'>
                        <FaFacebookF className='socaillinkes' />
                        <FaTwitter className='socaillinkes' />
                        <FaGooglePlusG className='socaillinkes' />
                        <FaLinkedinIn className='socaillinkes' />
                        <GrGallery className='socaillinkes' onClick={() => handleNavigation('/gallery')} />
                        <FaOpencart className='socaillinkes' title="Add to Cart" onClick={() => handleNavigation('/addcart')} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Ninthsection;
