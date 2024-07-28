import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './Redux/Actions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from 'react-icons/fa';
import { LuIndianRupee } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { products } from '../Component/Prodect.js';
import '../Component/CssFile/Carddesign.css';

const Cardesign = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.cartItems);
  const cartCount = cartItems.length;
  const dispatch = useDispatch();

  const [clickedItems, setClickedItems] = useState([]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setClickedItems([...clickedItems, product.id]);
  };

  return (
    <Container fluid>
      <Navbar className="bg-body-tertiary carnavbar">
        <Container>
          <Col>
            <Navbar.Brand className='brandname'>
              Yoga <span className='brandname-center'>Center</span>
            </Navbar.Brand>
          </Col>
          <Col className='cart-icon' style={{ position: 'relative' }}>
            <FaShoppingCart size='30px' color='#fe86d4' onClick={() => navigate('/cart')} />
            {cartCount > 0 && (
              <div className="cart-count">{cartCount}</div>
            )}
          </Col>
        </Container>
      </Navbar>
      <Container fluid>
      <Row>
        {products.map((product) => (
          <Col key={product.id} className='mt-5'>
            <Card style={{ width: '18rem' }} className='cart-border'>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  Li Europan lingues membres del sam familie.
                </Card.Text>
                <h2>
                  <span><LuIndianRupee className='price-symbol' /></span>{product.price}
                </h2>
                <Row>
                  <Col><Button className='buy-now-btn btn-lg'>Buy now</Button></Col>
                  <Col>
                    <Button
                      variant="primary"
                      className="add-btn btn-lg btnad"
                      onClick={() => handleAddToCart(product)}
                      disabled={clickedItems.includes(product.id)}
                    >
                      {clickedItems.includes(product.id) ? 'Added to Cart' : 'Add to Cart'}
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>
    </Container>
  );
};

export default Cardesign;
