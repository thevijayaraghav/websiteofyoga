import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { removeFromCart, increment, decrement } from './Redux/Actions';
import { LuIndianRupee } from 'react-icons/lu';
import '../Component/CssFile/Cartpage.css';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleRemoveCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(increment(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrement(id));
  };

  const handlecheckouts =()=>{
    alert(`Payment successful! Total amount: ₹${subtotal}`);
  }

  return (
    <Container>
      <h1 className='cartpagesheds'>Cart <span className='pageheas'>Page</span></h1>
      <Row>
        <Col md={8}>
          {cartItems.map((item) => (
            <div key={item.id} className='cart-border'>
              <Row>
                <Col md={3}>
                  <img src={item.image} alt={item.title} className='cart-image' />
                </Col>
                <Col md={9}>
                  <div className='cart-details'>
                    <p className='cart-title'>{item.title}</p>
                    <p className='cart-text'>Li Europan lingues membres del sam familie.</p>
                    <h2 className='cart-price'>
                      <span><LuIndianRupee className='price-symbol' /></span>{item.price}
                    </h2>
                    <div className='quantity-controls'>
                      <Button variant="secondary" className="quantity-btn" onClick={() => handleDecrement(item.id)}>-</Button>
                      <span className="quantity">{item.quantity}</span>
                      <Button variant="secondary" className="quantity-btn" onClick={() => handleIncrement(item.id)}>+</Button>
                    </div>
                    <Button variant="primary" className="remove-btn" onClick={() => handleRemoveCart(item.id)}>Remove</Button>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </Col>
        <Col md={4}>
          <div className='subtotal-column'>
            <h3 className='subtotal'>Subtotal: <LuIndianRupee className='price-symbol' />{subtotal}</h3>
            <Button className='checkout-btn' onClick={handlecheckouts}>Checkout</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
