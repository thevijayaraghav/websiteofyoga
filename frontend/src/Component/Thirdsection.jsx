import './CssFile/Thirdsection.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillThunderbolt } from "react-icons/ai";

function Thirdsection(){
    return(
    <>
     <Container fluid className='contaier'>
      <Row >
        <Col className='col2 d-flex justify-content-end ' xxl={6} xl={6} md={6} sm={12} lg={6}>
        <Col  xl={3}  className='sprit'></Col>
        <Col md={10} xl={9} className='sprit'>
        <h3 className='bstcls'>The Best Class for your Yoga Center</h3>

        <p className='para'>At solmen li esser necessi uniform grammatica, pronunciation sommun paroles, quande li coalingue simplic regulari quam coalescent lingues.</p>
        <li><AiFillThunderbolt className='thuder' />Vivamus semper odio in nibh ultricies</li>
        <li><AiFillThunderbolt className='thuder'/>Duis rhoncus lectus at velit hendrerit quis</li>
        <li><AiFillThunderbolt className='thuder'/>Nam gravida magna vitae ante dignissim</li>
        
        <p className='para2'>Necessi uniform grammatica, pronunciation sommun paroles, quande li coalingue simplic regulari coalescent lingues.</p>
        </Col>
        </Col>  

        <Col className='imagesection' xxl={6}  xl={6} md={6} sm={12} lg={6}></Col>
      
      </Row>
    </Container>
    
    </>
    )
}
export default Thirdsection;