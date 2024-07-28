import React from 'react'; 
import '../Component/CssFile/Fourthsection.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mind from '../img/mind-soul.png'
import { GrYoga } from "react-icons/gr";
import { GiMeditation } from "react-icons/gi";
import { GiEmbrassedEnergy } from "react-icons/gi";
import { MdOutlineSportsGymnastics } from "react-icons/md";

function Fourthsection(){
  return(
  <>
  <Container fluid >
<Row className='text-center'>
<h2 className='headings mt-5'> Advantages of Yoga</h2>
<p className='para'>At solmen li esser necessi uniform grammatica, pronunciation</p>
</Row>

<Row className='advantageofyoga'>
<Col className='col' lg={5} md={12} sm={12} xl={5} xs={12} xxs={12}>
<Row className='ms'>
    <Col className='endalign text-end'>
     <div className='mindandsoul'>
        <img src={mind} alt="" />
     <h6 className='headings'>Mind and soul</h6>
     <p className='advantageofms lh-1g para'>A un Angleso semblar un simplificat Angles, quam un skepticbridge.</p>
     </div>
    </Col>
</Row>


<Row className='ms'>
    <Col className='centeralign text-end '>
<div className='mindandsoul'>
     {/* <img src={mind} alt="" /> */} <MdOutlineSportsGymnastics className='iconz'/>
     <h6 className='headings'>Good for health</h6>
     <p className='advantageofms lh-1g para'>A un Angleso semblar un simplificat Angles, quam un skepticbridge.</p>
</div>
    </Col>
</Row>


<Row className='ms'>
    <Col className='startalign text-end'>
    <div className='mindandsoul'>
        {/* <img src={mind} alt="" /> */}<GiMeditation className='iconz'/>
     <h6 className='headings'>Yoga for real energy</h6>
     <p className='advantageofms lh-1g para'>A un Angleso semblar un simplificat Angles, quam un skepticbridge.</p>
     </div>
    </Col>
</Row>
</Col>



<Col className='col' lg={2} md={0} xl={2}></Col>


<Col className='col' lg={5} md={12} sm={12} xl={5} xs={12} xxs={12} >
<Row className='ms'>
<Col className='startalign'>
<div className='mindandsoul'>
        {/* <img src={mind} alt="" /> */}<GiEmbrassedEnergy className='iconz'/>
     <h6 className='headings'>
     Yoga for real energy</h6>
     <p className='advantageofms lh-1g para'>A un Angleso semblar un simplificat Angles, quam un skepticbridge.</p>
     </div>

</Col>
</Row>

<Row className='ms'>
    <Col className='centeralign'>
<div className='mindandsoul'>
        <img src={mind} alt="" />
     <h6 className='headings'>Renewing your mind</h6>
     <p className='advantageofms lh-1g para'>A un Angleso semblar un simplificat Angles, quam un skepticbridge.</p>
     </div>
</Col>
</Row>

<Row className='ms'>
    <Col className='endalign'>
<div className='mindandsoul'>
        {/* <img src={mind} alt="" /> */}<GrYoga className='iconz'/>
     <h6 className='headings'>Meditation classes</h6>
     <p className='advantageofms lh-1g para'>A un Angleso semblar un simplificat Angles, quam un skepticbridge.</p>
     </div>
</Col>
</Row>
</Col>


</Row>
  </Container>
 


  </>
  )  
}
export default Fourthsection;