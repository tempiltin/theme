import React, { useState, Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb';
import { Range, getTrackBackground } from "react-range";
import { Container, Row, Col, Card, CardHeader, CardBody, Label, Form } from 'reactstrap';
import { Default, BasicSlider, NegativeValues, FormatedLabel, Disabled } from '../../constant';

const RangeSlider = () => {
  const STEP = 1;
  const MIN = 0;
  const MAX = 20;
  const [values, setValues] = useState([5, 10]);

  const [values1, setValues1] = useState([10]);
  const [values2, setValues2] = useState([-10]);
  const [values3, setValues3] = useState([10]);
  const [values4, setValues4] = useState([10.00]);
  const [values5, setValues5] = useState([10]);

  return (
    <Fragment>
      <Breadcrumb parent="Bouns Ui" title="Range Slider" />
      <Container fluid={true}>
        <Row>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <h5>{BasicSlider}</h5>
              </CardHeader>
              <CardBody>
                <Form className="theme-form form-label-align-right range-slider">
                  <Row className="mb-0">
                    <Col md="1">
                      <Label>{Default}</Label>
                    </Col>
                    <Col md="11">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexWrap: "wrap",
                          margin: "1em"
                        }}
                      >
                        <Range
                          values={values1}
                          step={1}
                          min={0}
                          max={20}
                          onChange={(values1) => setValues1(values1)}
                          renderTrack={({ props, children }) => (
                            <div
                              onMouseDown={props.onMouseDown}
                              onTouchStart={props.onTouchStart}
                              style={{
                                ...props.style,
                                height: "36px",
                                display: "flex",
                                width: "100%"
                              }}
                            >
                              <output style={{ marginTop: "12px" }}>
                                0
                              </output>
                              <div
                                ref={props.ref}
                                style={{
                                  height: "5px",
                                  width: "100%",
                                  borderRadius: "30px",
                                  background: getTrackBackground({
                                    values: values1,
                                    colors: ["#7366ff", "#ccc"],
                                    min: 0,
                                    max: 20
                                  }),
                                  alignSelf: "center"
                                }}
                              >

                                {children}
                              </div>
                              <output style={{ marginTop: "12px" }}>
                                20
                              </output>
                            </div>
                          )}
                          renderThumb={({ props, isDragged }) => (
                            <div
                              {...props}
                              style={{
                                ...props.style,
                                height: "35px",
                                width: "35px",
                                borderRadius: "30px",
                                backgroundColor: "#FFF",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "0px 2px 6px #AAA"
                              }}
                            >
                              <div
                                style={{
                                  height: "16px",
                                  width: "5px",
                                  backgroundColor: isDragged ? "#7366ff" : "#CCC"
                                }}
                              />
                            </div>
                          )}
                        />
                        <output style={{ marginTop: "12px" }} id="output">
                          {values1[0]}
                        </output>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>

          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <h5>{NegativeValues}</h5>
              </CardHeader>
              <CardBody>
                <Form className="theme-form form-label-align-right range-slider">
                  <Row className="mb-0">
                    <Col md="1">
                      <Label>{Default}</Label>
                    </Col>
                    <Col md="11">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexWrap: "wrap",
                          margin: "1em"
                        }}
                      >
                        <Range
                          values={values2}
                          step={-1}
                          min={-20}
                          max={0}
                          onChange={(values2) => setValues2(values2)}
                          renderTrack={({ props, children }) => (
                            <div
                              onMouseDown={props.onMouseDown}
                              onTouchStart={props.onTouchStart}
                              style={{
                                ...props.style,
                                height: "36px",
                                display: "flex",
                                width: "100%"
                              }}
                            >
                              <output style={{ marginTop: "12px" }}>
                                0
                              </output>
                              <div
                                ref={props.ref}
                                style={{
                                  height: "5px",
                                  width: "100%",
                                  borderRadius: "4px",
                                  background: getTrackBackground({
                                    values: values2,
                                    colors: ["#7366ff", "#ccc"],
                                    min: -20,
                                    max: -0
                                  }),
                                  alignSelf: "center"
                                }}
                              >

                                {children}
                              </div>
                              <output style={{ marginTop: "12px" }}>
                                -20
                              </output>
                            </div>
                          )}
                          renderThumb={({ props, isDragged }) => (
                            <div
                              {...props}
                              style={{
                                ...props.style,
                                height: "35px",
                                width: "35px",
                                borderRadius: "30px",
                                backgroundColor: "#FFF",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "0px 2px 6px #AAA"
                              }}
                            >
                              <div
                                style={{
                                  height: "16px",
                                  width: "5px",
                                  backgroundColor: isDragged ? "#7366ff" : "#CCC"
                                }}
                              />
                            </div>
                          )}
                        />
                        <output style={{ marginTop: "12px" }} id="output">
                          {values2[0]}
                        </output>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>

          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{Disabled}</h5>
              </CardHeader>
              <CardBody>
                <Form className="theme-form form-label-align-right range-slider">
                  <Row className="mb-0">
                    <Col md="1">
                      <Label>{Default}</Label>
                    </Col>
                    <Col md="11">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexWrap: "wrap",
                          margin: "1em"
                        }}
                      >
                        <Range
                          values={values3}
                          step={1}
                          min={0}
                          max={20}
                          onChange={(values3) => setValues3(values3)}
                          disabled={true}
                          renderTrack={({ props, children }) => (
                            <div
                              onMouseDown={props.onMouseDown}
                              onTouchStart={props.onTouchStart}
                              style={{
                                ...props.style,
                                height: "36px",
                                display: "flex",
                                width: "100%"
                              }}
                            >
                              <output style={{ marginTop: "12px" }}>
                                0
                              </output>
                              <div
                                ref={props.ref}
                                style={{
                                  height: "5px",
                                  width: "100%",
                                  borderRadius: "4px",
                                  background: getTrackBackground({
                                    values: values3,
                                    colors: ["#ccc", "#ccc"],
                                    min: 0,
                                    max: 20
                                  }),
                                  alignSelf: "center"
                                }}
                              >

                                {children}
                              </div>
                              <output style={{ marginTop: "12px" }}>
                                20
                              </output>
                            </div>
                          )}
                          renderThumb={({ props, isDragged }) => (
                            <div
                              {...props}
                              style={{
                                ...props.style,
                                height: "35px",
                                width: "35px",
                                borderRadius: "30px",
                                backgroundColor: "#FFF",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "0px 2px 6px #AAA"
                              }}
                            >
                              <div
                                style={{
                                  height: "16px",
                                  width: "5px",
                                  backgroundColor: isDragged ? "#ccc" : "#CCC"
                                }}
                              />
                            </div>
                          )}
                        />
                        <output style={{ marginTop: "12px" }} id="output">
                          {values3[0]}
                        </output>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>

          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{FormatedLabel}</h5>
              </CardHeader>
              <CardBody>
                <Form className="theme-form form-label-align-right range-slider">
                  <Row className="mb-0">
                    <Col md="1">
                      <Label>{Default}</Label>
                    </Col>
                    <Col md="11">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexWrap: "wrap",
                          margin: "1em"
                        }}
                      >
                        <Range
                          values={values4}
                          step={1.00}
                          min={0.00}
                          max={20.00}
                          onChange={(values4) => setValues4(values4)}
                          renderTrack={({ props, children }) => (
                            <div
                              onMouseDown={props.onMouseDown}
                              onTouchStart={props.onTouchStart}
                              style={{
                                ...props.style,
                                height: "36px",
                                display: "flex",
                                width: "100%"
                              }}
                            >
                              <output style={{ marginTop: "12px" }}>
                                0.00
                              </output>
                              <div
                                ref={props.ref}
                                style={{
                                  height: "5px",
                                  width: "100%",
                                  borderRadius: "4px",
                                  background: getTrackBackground({
                                    values: values4,
                                    colors: ["#7366ff", "#ccc"],
                                    min: 0,
                                    max: 20
                                  }),
                                  alignSelf: "center"
                                }}
                              >

                                {children}
                              </div>
                              <output style={{ marginTop: "12px" }}>
                                20.00
                              </output>
                            </div>
                          )}
                          renderThumb={({ props, isDragged }) => (
                            <div
                              {...props}
                              style={{
                                ...props.style,
                                height: "35px",
                                width: "35px",
                                borderRadius: "30px",
                                backgroundColor: "#FFF",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "0px 2px 6px #AAA"
                              }}
                            >
                              <div
                                style={{
                                  height: "16px",
                                  width: "5px",
                                  backgroundColor: isDragged ? "#7366ff" : "#CCC"
                                }}
                              />
                            </div>
                          )}
                        />
                        <output style={{ marginTop: "12px" }} id="output">
                          {values4[0]}.00
                        </output>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>

          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{FormatedLabel}</h5>
              </CardHeader>
              <CardBody>
                <Form className="theme-form form-label-align-right range-slider">
                  <Row className="mb-0">
                    <Col md="1">
                      <Label>{Default}</Label>
                    </Col>
                    <Col md="11">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexWrap: "wrap",
                          margin: "1em"
                        }}
                      >
                        <Range
                          values={values5}
                          step={1.00}
                          min={0.00}
                          max={20.00}
                          onChange={(values5) => setValues5(values5)}
                          renderTrack={({ props, children }) => (
                            <div
                              onMouseDown={props.onMouseDown}
                              onTouchStart={props.onTouchStart}
                              style={{
                                ...props.style,
                                height: "36px",
                                display: "flex",
                                width: "100%"
                              }}
                            >
                              <output style={{ marginTop: "12px" }}>
                                0 kg
                              </output>
                              <div
                                ref={props.ref}
                                style={{
                                  height: "5px",
                                  width: "100%",
                                  borderRadius: "4px",
                                  background: getTrackBackground({
                                    values: values5,
                                    colors: ["#7366ff", "#ccc"],
                                    min: 0,
                                    max: 20
                                  }),
                                  alignSelf: "center"
                                }}
                              >

                                {children}
                              </div>
                              <output style={{ marginTop: "12px" }}>
                                20 kg
                              </output>
                            </div>
                          )}
                          renderThumb={({ props, isDragged }) => (
                            <div
                              {...props}
                              style={{
                                ...props.style,
                                height: "35px",
                                width: "35px",
                                borderRadius: "30px",
                                backgroundColor: "#FFF",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "0px 2px 6px #AAA"
                              }}
                            >
                              <div
                                style={{
                                  height: "16px",
                                  width: "5px",
                                  backgroundColor: isDragged ? "#7366ff" : "#CCC"
                                }}
                              />
                            </div>
                          )}
                        />
                        <output style={{ marginTop: "12px" }} id="output">
                          {values5[0]} kg
                        </output>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>

          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{FormatedLabel}</h5>
              </CardHeader>
              <CardBody>
                <Form className="theme-form form-label-align-right range-slider">
                  <Row className="mb-0">
                    <Col md="1">
                      <Label>{Default}</Label>
                    </Col>
                    <Col md="11">
                      <Range
                        values={values}
                        step={STEP}
                        min={MIN}
                        max={MAX}
                        onChange={values => {
                          setValues(values);
                        }}
                        renderTrack={({ props, children }) => (
                          <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                              ...props.style,
                              height: "36px",
                              display: "flex",
                              width: "100%"
                            }}
                          >
                            <output style={{ marginTop: "12px" }}>
                              {values[0]}
                            </output>
                            <div
                              ref={props.ref}
                              style={{
                                height: "5px",
                                width: "100%",
                                borderRadius: "4px",
                                background: getTrackBackground({
                                  values,
                                  colors: ["#ccc", "#7366ff", "#ccc"],
                                  min: MIN,
                                  max: MAX
                                }),
                                alignSelf: "center"
                              }}
                            >
                              {children}
                            </div>
                            <output style={{ marginTop: "12px" }}>
                              {values[1]}
                            </output>
                          </div>
                        )}
                        renderThumb={({ props, isDragged }) => (
                          <div
                            {...props}
                            style={{
                              ...props.style,
                              height: "35px",
                              width: "35px",
                              borderRadius: "30px",
                              backgroundColor: "#FFF",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              boxShadow: "0px 2px 6px #AAA"
                            }}
                          >
                            <div
                              style={{
                                height: "16px",
                                width: "5px",
                                backgroundColor: isDragged ? "#7366ff" : "#CCC"
                              }}
                            />
                          </div>

                        )}
                      />
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default RangeSlider;