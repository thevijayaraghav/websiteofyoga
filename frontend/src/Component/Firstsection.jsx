import Container from 'react-bootstrap/Container';
import './CssFile/FirstSection.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Firstsection() {
const navigate = useNavigate()
    const joinasnow=()=>{
        navigate('/login')
    }
    return (
        <>
            <Container fluid className='full'>
                <Container className='container'>
                    <Row className='row centeronrow'>
                        <Col lg={4} className='emailsec'>
                            <div className='backgrounds'>
                                <HiOutlineMailOpen className='emaillogo' />
                                <a className='aligns no-dec'  href="mailto:example@gmail.com" >info@webdomus.net</a>
                            </div>
                        </Col>

                        <Col lg={4} className='logo'></Col>

                        <Col lg={4} className='call'>
                            <div className='backgrounds'>
                                <MdCall className='emaillogo' />
                            </div>
                            <div className='contactnum'>
                                <a  className='nums no-dec' href="tel:+39.0874.484661" style={{ textDecoration: 'none', color: 'white' }}>+39.0874.484661</a>
                            </div>
                        </Col>
                    </Row>
                    <div className='newline'></div>
                    <Row className='textinformation'>
                        <div>
                            <p className='quotes'>Be peaceful in mind and healthy in Body!</p>
                        </div>
                        <div>
                            <p className='quotes_2'>At solmen va esser necessi fa uniform grammatica, pronunciation plu sommun paroles.</p>
                        </div>
                        <div className='d-flex justify-content-center mt-3'>
                            <button className='btn01' onClick={joinasnow}>Join Us Now</button>
                        </div>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default Firstsection;
