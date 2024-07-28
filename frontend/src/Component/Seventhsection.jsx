import '../Component/CssFile/Seventhsection.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import nelson from '../img/fig-nelson.jpg';
import jason from '../img/jason-response.jpg';
import eric from '../img/eric-widget.jpg';
import lance from '../img/lance-begrol.jpg';
function Seventsection(){
    return(
    <>
    <Container fluid className='wholecont'>
            <Row className='text-center'>
                <Col>
                    <h2 className='headingssss'>Expert Trainers</h2>
                    <p className='at'>At solmen li esser necessi uniform grammatica, pronunciation</p>
                </Col>
            </Row>

            <Row className='imgsec'>
                <Col className='d-flex justify-content-center'>
                    <div className='flex-container '>
                        <div className='kundalini' >
                            <img src={nelson} alt="Kundalini Yoga" className='img img-fluid' />
                            <h4 className='text-center heads'>Fig Nelson</h4>
                            <p className='p'>Trainer</p>
                        </div>
                        <div className='basic'>
                            <img src={jason} alt="Basic Yoga" className='img img-fluid' />
                            <h4 className='text-center heads'>Jason Response</h4>
                            <p className='p'>Yoga Basic</p>
                        </div>
                        <div className='iyengar'>
                            <img src={eric} alt="Iyengar Yoga" className='img img-fluid' />
                            <h4 className='text-center heads'>Eric Widget</h4>
                            <p className='p'>Kundalm</p>
                        </div>
                        <div className='advanced'>
                            <img src={lance} alt="Advanced Yoga" className='img img-fluid' />
                            <h4 className='text-center heads'>Lance Bogrol</h4>
                            <p className='p'>Healthy Recipes</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>

    )  
}
export default Seventsection