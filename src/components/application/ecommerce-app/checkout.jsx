import React, { Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { getCartTotal } from "../../../services/ecommerce.service";
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { BillingDetails, FirstName, LastName, Phone, EmailAddress, Country, CountryMenu, Address, TownCity, StateCountry, PostalCode, Product, Total, Subtotal, Shipping, Option1, Option2, PlaceOrder, CheckMeOut, CheckPayments, CashOnDelivery, PayPal, ContinueShopping } from '../../../constant';
import { classes } from '../../../data/layouts';

const Checkout = (props) => {
  const defaultLayoutObj = classes.find(item => Object.values(item).pop(1) === 'compact-wrapper');
  const layout = localStorage.getItem('layout') || Object.keys(defaultLayoutObj).pop();
  const history = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = data => {
    if (data !== '') {
      alert('You submitted the form and stuff!');
      history(`${process.env.PUBLIC_URL}/app/ecommerce/invoice/${layout}`)
    } else {
      errors.showMessages();
    }
  }

  const cart = useSelector(content => content.Cartdata.cart);
  const symbol = useSelector(content => content.data.symbol);

  return (
    <Fragment>
      <Breadcrumb parent="Ecommerce" title="Checkout" />
      <Container fluid={true}>
        <Row>
          <Col>
            <Card className="checkout">
              <CardHeader>
                <h5>{BillingDetails}</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xl="6" sm="12">
                    <Form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
                      <Row>

                        <FormGroup className="col-sm-6">
                          <Label>{FirstName}</Label>
                          <input className='form-control' type="text" name="firstName" {...register('firstName', { required: true })} />
                          <span style={{ color: '#ff5370' }}>{errors.firstName && 'First name is required'}</span>
                        </FormGroup>
                        <FormGroup className="col-sm-6">
                          <Label>{LastName}</Label>
                          <input className='form-control' type="text" name="lastName" {...register('lastName', { required: true })} />
                          <span style={{ color: '#ff5370' }}>{errors.lastName && 'Last name is required'}</span>
                        </FormGroup>
                      </Row>
                      <Row>
                        <FormGroup className="col-sm-6">
                          <Label>{Phone}</Label>
                          <input className='form-control' type="text" name="phone" {...register('phone', { pattern: /\d+/ })} />
                          <span style={{ color: '#ff5370' }}>{errors.phone && 'Please enter number for phone.'}</span>
                        </FormGroup>
                        <FormGroup className="col-sm-6">
                          <Label>{EmailAddress}</Label>
                          <input className='form-control' type="text" name="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                          <span style={{ color: '#ff5370' }}>{errors.email && 'Please enter proper email address .'}</span>
                        </FormGroup>
                      </Row>
                      <FormGroup>
                        <Label>{Country}</Label>
                        <Input className='form-control' type="select" name="selectMulti">
                          {CountryMenu.map((items, i) =>
                            <option key={i}>{items}</option>
                          )}
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="inputAddress5">{Address}</Label>
                        <input className='form-control' type="text" name="address" {...register('address', { required: true, min: 20, max: 120 })} />
                        <span style={{ color: '#ff5370' }}>{errors.address && 'Please right your address .'}</span>
                      </FormGroup>
                      <FormGroup>
                        <Label for="inputCity">{TownCity}</Label>
                        <input className='form-control' type="text" name="city" {...register('city', { required: true })} />
                        <span style={{ color: '#ff5370' }}>{errors.city && 'select one city'}</span>
                      </FormGroup>
                      <FormGroup>
                        <Label for="inputAddress2">{StateCountry}</Label>
                        <input className='form-control' type="text" name="state" {...register('state', { required: true })} />
                        <span style={{ color: '#ff5370' }}>{errors.state && 'select one state'}</span>
                      </FormGroup>
                      <FormGroup>
                        <Label for="inputAddress6">{PostalCode}</Label>
                        <input className='form-control' type="number" name="pincode" {...register('pincode', { pattern: /\d+/ })} />
                        <span style={{ color: '#ff5370' }}>{errors.pincode && 'Required integer'}</span>
                      </FormGroup>
                      <FormGroup>
                        <Input type="checkbox" className="checkbox_animated" />
                        <Label>{CheckMeOut}</Label>
                      </FormGroup>

                      <Button color="primary" type="submit" className="mt-1 pull-right">{PlaceOrder}</Button>

                    </Form>
                  </Col>
                  <Col xl="6" sm="12">
                    <div className="checkout-details">
                      <div className="order-box">
                        <div className="title-box">
                          <div className="checkbox-title">
                            <h4>{Product} </h4><span>{Total}</span>
                          </div>
                        </div>
                        <ul className="qty">
                          {cart.map((item, index) => {
                            return <li key={index}>{item.name} × {item.qty} <span>{symbol} {item.sum}</span></li>
                          })
                          }
                        </ul>
                        <ul className="sub-total">
                          <li>{Subtotal} <span className="count">{symbol}{getCartTotal(cart)}</span></li>
                          <li className="shipping-class">{Shipping}
                            <div className="shopping-checkout-option">
                              <Label className="d-block">
                                <Input className="checkbox_animated" type="checkbox" />{Option1}
                              </Label>
                              <Label className="d-block">
                                <Input className="checkbox_animated" type="checkbox" defaultChecked />{Option2}
                              </Label>
                            </div>
                          </li>
                        </ul>
                        <ul className="sub-total total">
                          <li>{Total} <span className="count">{symbol} {getCartTotal(cart)}</span></li>
                        </ul>
                        <div className="animate-chk">
                          <Row>
                            <Col>
                              <Label className="d-block">
                                <Input className="radio_animated" type="radio" name="rdo-ani" />{CheckPayments}
                              </Label>
                              <Label className="d-block">
                                <Input className="radio_animated" type="radio" name="rdo-ani" />{CashOnDelivery}
                              </Label>
                              <Label className="d-flex align-items-center">
                                <Input className="radio_animated" type="radio" name="rdo-ani" defaultChecked />{PayPal}
                                <img className="img-paypal" src={require("../../../assets/images/checkout/paypal.png")} alt="" />
                              </Label>
                            </Col>
                          </Row>
                        </div>
                        <div className="text-end mt-3">
                          <Link
                            to={`${process.env.PUBLIC_URL}/app/ecommerce/product/${layout}`}
                          >
                            <Button
                              color="primary"
                              className="cart-btn-transform"
                            >
                              {ContinueShopping}
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row >
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Checkout;