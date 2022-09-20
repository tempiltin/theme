import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody, Form } from 'reactstrap'
import { DatePickers, SelectDateWithTime, CustomDateFormat, TodayButton, DisableDaysOfWeek, SpecificDateRange, MinDate, MaxDate, DateRange, InlineVersion, DisableDatepicker, SelectTimeOnly, Default } from "../../../constant";

import DatePicker from "react-datepicker";
const Datepicker = (props) => {
  const [startDate, setstartDate] = useState(new Date())
  const endDate = new Date()

  const handleChange = date => {
    setstartDate(date);
  };

  const addDays = date => {
    setstartDate(date, 4);
  };


  return (
    <Fragment>
      <Breadcrumb parent="Forms" title="Date Picker" />
      <Container fluid={true}>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <h5>{DatePickers}</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="12">
                    <div className="date-picker">
                      <Form className="theme-form">
                        <Row className="mb-3 g-3">
                          <label className="col-sm-3 col-form-label text-end">{Default}</label>
                          <div className="col-xl-5 col-sm-9">
                            <div className="input-group">
                              <DatePicker className="form-control digits" selected={startDate} onChange={handleChange} />
                            </div>
                          </div>
                        </Row>
                        <Row className="mb-3 g-3">
                          <label className="col-sm-3 col-form-label text-end">{SelectDateWithTime}</label>
                          <div className="col-xl-5 col-sm-9">
                            <DatePicker className="form-control digits" showPopperArrow={false} selected={startDate} showTimeSelect dateFormat="Pp" />
                          </div>
                        </Row>
                        <Row className="mb-3 g-3">
                          <label className="col-sm-3 col-form-label text-end">{SelectTimeOnly}</label>
                          <div className="col-xl-5 col-sm-9">
                            <DatePicker className="form-control digits" selected={startDate} onChange={handleChange} showTimeSelect
                              showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />
                          </div>
                        </Row>
                        <Row className="mb-3 g-3">
                          <label className="col-sm-3 col-form-label text-end">{CustomDateFormat}</label>
                          <div className="col-xl-5 col-sm-9">
                            <DatePicker className="form-control digits" dateFormat="yyyy/MM/dd" selected={startDate} onChange={handleChange} />
                          </div>
                        </Row>
                        <Row className="mb-3 g-3">
                          <label className="col-sm-3 col-form-label text-end">{TodayButton}</label>
                          <div className="col-xl-5 col-sm-9">
                            <DatePicker className="form-control digits" todayButton="Vandaag" selected={startDate} onChange={handleChange} />
                          </div>
                        </Row>
                        <Row className="mb-3 g-3">
                          <label className="col-sm-3 col-form-label text-end">{DisableDaysOfWeek}</label>
                          <div className="col-xl-5 col-sm-9">
                            <DatePicker className="form-control digits" placeholderText="Click to select a date" />
                          </div>
                        </Row>
                        <Row className="mb-3 g-3">
                          <label className="col-sm-3 col-form-label text-end">{SpecificDateRange}</label>
                          <div className="col-xl-5 col-sm-9">
                            <Row className="min-date">
                              <div className="col-md-12 mb-2">
                                <DatePicker className="form-control digits"
                                  selected={startDate}
                                  onChange={handleChange}
                                  minDate={new Date()}
                                  maxDate={addDays}
                                  placeholderText="Select a date between today and 5 days in the future"
                                />
                              </div>
                              <div className="col-md-12 mb-2">
                                <label className="col-sm-3 col-form-label text-start">{MinDate}</label>
                                <DatePicker className="form-control digits"
                                  selected={startDate}
                                  onChange={handleChange}
                                  minDate={new Date()}
                                  placeholderText="Select a date after 5 days ago"
                                />
                              </div>
                              <div className="col-md-12 mb-2">
                                <label className="col-sm-3 col-form-label text-start">{MaxDate}</label>
                                <DatePicker className="form-control digits"
                                  selected={startDate}
                                  onChange={handleChange}
                                  maxDate={new Date()}
                                  placeholderText="Select a date after 5 days ago"
                                />
                              </div>
                              <div className="col-md-12 date-range">
                                <label className="col-sm-3 col-form-label text-start">{DateRange}</label>
                                <DatePicker className="form-control digits"
                                  selected={startDate}
                                  onChange={handleChange}
                                  selectsStart
                                  startDate={startDate}
                                  endDate={endDate}
                                />
                                <DatePicker className="form-control digits mt-2"
                                  selected={endDate}
                                  onChange={handleChange}
                                  selectsEnd
                                  endDate={endDate}
                                  minDate={startDate}
                                />
                              </div>
                            </Row>
                          </div>
                        </Row>
                        <Row className="mb-3 g-3">
                          <label className="col-sm-3 col-form-label text-end">{DisableDatepicker}</label>
                          <div className="col-sm-3">
                            <div className="datepicker-here" data-language="en">
                              <DatePicker className="form-control digits"
                                selected={startDate}
                                onChange={handleChange}
                                disabled
                                placeholderText="This is disabled"
                              />
                            </div>
                          </div>
                        </Row>
                        <Row className="mb-0">
                          <label className="col-sm-3 col-form-label text-end">{InlineVersion}</label>
                          <div className="col-sm-3">
                            <div className="datepicker-here" data-language="en">
                              <DatePicker className="form-control digits"
                                selected={startDate}
                                onChange={handleChange}
                                inline
                              />
                            </div>
                          </div>
                        </Row>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Datepicker;