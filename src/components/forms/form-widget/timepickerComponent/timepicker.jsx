import React, { Fragment } from 'react';
import Breadcrumb from '../../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody, Form } from 'reactstrap'
import TimePickerTwo from './timepicker-two';
import TimePickerOne from './timepicker-one';
import TimePickerThree from './timepicker-three';
import { Default, TimePickerDarkTheme, SetMultipleTimepicker } from "../../../../constant";

const Timepicker = () => {
  return (
    <Fragment>
      <Breadcrumb parent="Forms" title="Time Picker" />
      <Container fluid={true} className="timepicker-form">
        <Row>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h5>{Default}:</h5>
              </CardHeader>
              <CardBody>
                <Form className="theme-form">
                  <div className="mb-0">
                    <TimePickerOne />
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h5>{TimePickerDarkTheme}</h5>
              </CardHeader>
              <CardBody>
                <Form className="theme-form">
                  <div className="mb-0">
                    <TimePickerTwo />
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6 xl-100">
            <Card>
              <CardHeader>
                <h5>{SetMultipleTimepicker}</h5>
              </CardHeader>
              <CardBody>
                <div className="clearfix">
                  <Form className="theme-form">
                    <div className="mb-0">
                      <TimePickerThree />
                    </div>
                  </Form>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Timepicker;