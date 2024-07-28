import '../Component/CssFile/Fifthsection.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import kundani from '../img/kundalini-yoga.jpg';
import basic from '../img/basic-yoga.jpg';
import iyengar from '../img/iyengar-yoga.jpg';
import advanced from '../img/advanced-yoga-poses.jpg';

function Fifthsection() {
    return (
        <Container fluid className='wholecont'>
            <Row className='text-center'>
                <Col>
                    <h2 className='headingssss'>Our Yoga Classes</h2>
                    <p className='at'>At solmen li esser necessi uniform grammatica, pronunciation</p>
                </Col>
            </Row>

            <Row className='imgsec'>
                <Col className='d-flex justify-content-center'>
                    <div className='flex-container '>
                        <div className='kundalini' >
                            <img src={kundani} alt="Kundalini Yoga" className='img img-fluid' />
                            <h4 className='text-center heads'>Kundalini Yoga</h4>
                            <p className='p'>Li Europan lingues membres del sam familie.</p>
                        </div>
                        <div className='basic'>
                            <img src={basic} alt="Basic Yoga" className='img img-fluid' />
                            <h4 className='text-center heads'>Basic Yoga</h4>
                            <p className='p'>Li Europan lingues membres del sam familie.</p>
                        </div>
                        <div className='iyengar'>
                            <img src={iyengar} alt="Iyengar Yoga" className='img img-fluid' />
                            <h4 className='text-center heads'>Iyengar Yoga</h4>
                            <p className='p'>Li Europan lingues membres del sam familie.</p>
                        </div>
                        <div className='advanced'>
                            <img src={advanced} alt="Advanced Yoga" className='img img-fluid' />
                            <h4 className='text-center heads'>Advanced Yoga</h4>
                            <p className='p'>Li Europan lingues membres del sam familie.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Fifthsection;
