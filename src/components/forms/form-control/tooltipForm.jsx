import React, { useState, Fragment } from 'react';
import { useForm } from 'react-hook-form'
import { Col, Button, Form, Label, Input, FormGroup, InputGroup, InputGroupText, Row } from 'reactstrap'
import { FirstName, LastName, Username, State, City, Zip, SubmitForm } from '../../../constant'


const TooltipForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [validateClass, setValidateClass] = useState(false);
  const onSubmit = (e, data) => {
    e.preventDefault();
    if (data !== '') {
      alert('You submitted the form and stuff!');
    } else {
      errors.showMessages();
    }
  };


  return (
    <Fragment>
      <Form className={`needs-validation tooltip-validation ${validateClass ? 'validateClass' : ''}`} noValidate="" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md="4 mb-3">
            <Label>{FirstName}</Label>
            <input className="form-control" name="firstName" type="text" placeholder="First name" {...register('firstName', { required: true })} />
            <span>{errors.firstName && 'First name is required'}</span>
            <div className="valid-feedback">{"Looks good!"}</div>
          </Col>
          <Col md="4 mb-3">
            <Label>{LastName}</Label>
            <input className="form-control" name="lastName" type="text" placeholder="Last name" {...register('lastName', { required: true })} />
            <span>{errors.lastName && 'Last name is required'}</span>
            <div className="valid-feedback">{"Looks good!"}</div>
          </Col>
          <Col md="4 mb-3">
            <Label>{Username}</Label>
            <InputGroup>
              <InputGroupText >{"@"}</InputGroupText>
              <input className="form-control" name="userName" type="text" placeholder="Username" aria-describedby="inputGroupPrepend" {...register('userName', { required: true })} />
              <span>{errors.lastName && 'User name is required'}</span>
              <div className="invalid-feedback">{"Please choose a username."}</div>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md="6 mb-3">
            <Label>{City}</Label>
            <input className="form-control" name="city" type="text" placeholder="City" {...register('city', { required: true })} />
            <span>{errors.city && 'Please provide a valid city'}</span>
            <div className="invalid-feedback">{"Please provide a valid city."}</div>
          </Col>
          <Col md="3 mb-3">
            <Label>{State}</Label>
            <input className="form-control" name="state" type="text" placeholder="State" {...register('state', { required: true })} />
            <span>{errors.state && 'Please provide a valid state.'}</span>
            <div className="invalid-feedback">{"Please provide a valid state."}</div>
          </Col>
          <Col md="3 mb-3">
            <Label>{Zip}</Label>
            <input className="form-control" name="zip" type="text" placeholder="Zip" {...register('zip', { required: true })} />
            <span>{errors.zip && 'Please provide a valid zip.'}</span>
            <div className="invalid-feedback">{"Please provide a valid zip."}</div>
          </Col>
        </Row>
        <FormGroup>
          <div className="form-check">
            <div className="checkbox p-0">
              <Input className="form-check-input" id="invalidCheck3" type="checkbox" />
              <Label className="form-check-label" htmlFor="invalidCheck3">{"Agree to terms and conditions"}</Label>
            </div>
          </div>
        </FormGroup>
        <Button color="primary" type="submit" onClick={() => setValidateClass(!validateClass)}>{SubmitForm}</Button>
      </Form>
    </Fragment>
  );
};

export default TooltipForm;