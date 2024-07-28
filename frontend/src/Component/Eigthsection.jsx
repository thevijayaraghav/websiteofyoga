import '../Component/CssFile/Eigthsection.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';


function Eigthsection(){
const navi=useNavigate()


   const joinasnow =()=>{
    navi('/login')
   }

    return(
    <>
    
    <Container  className='flu mt-4'>
      <Row>
        <Col className='col-12 text-center'>
        <h2 className='quiresss'>For any Queries and Free Class</h2>
        <p className='quiressomeobj'>At solmen li esser necessi uniform grammatica, pronunciation</p>
        </Col>
      </Row>

      <Row>
        <Col className='col-12 d-flex justify-content-center'><button className='mmm' onClick={joinasnow}>JOIN US NOW</button></Col>
        <Col className='col-12 text-center mt-2'><p className='quiressomeobj'>or Call : +39.0874.484661</p></Col>
      </Row>
    </Container>


    
   
    </>
    )
}
export default Eigthsection;