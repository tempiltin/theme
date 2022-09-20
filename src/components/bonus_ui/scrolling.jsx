import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { VerticalScrollbar, HorizontalScrollbar, SmoothScrollbar, NoScrollbar } from '../../constant'
import ScrollBar from "react-perfect-scrollbar";
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'

const Scrollable = () => {

  return (
    <Fragment>
      <Breadcrumb title="Scrollable" parent="Bouns Ui" />
      <Container fluid={true}>
        <Row>
          <Col sm="6">
            <Card>
              <CardHeader>
                <h5>{VerticalScrollbar}</h5>
              </CardHeader>
              <CardBody>
                <ScrollBar className="scroll"
                  options={{ suppressScrollX: true }}
                >
                  <div>
                    <img src={require("../../assets/images/banner/3.jpg")} alt="" height="600" />
                  </div>
                </ScrollBar>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardHeader>
                <h5>{HorizontalScrollbar}</h5>
              </CardHeader>
              <CardBody>
                <ScrollBar className="scroll"
                  option={{ suppressScrollY: true }}
                >
                  <div>
                    <img src={require("../../assets/images/banner/3.jpg")} alt="" height="600" />
                  </div>
                </ScrollBar>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardHeader>
                <h5>{SmoothScrollbar}</h5>
              </CardHeader>
              <CardBody>
                <ScrollBar className="scroll" >
                  <div>
                    <img src={require("../../assets/images/banner/3.jpg")} alt="" height="600" />
                  </div>
                </ScrollBar>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardHeader>
                <h5>{NoScrollbar}</h5>
              </CardHeader>
              <CardBody>
                <ScrollBar className="scroll"
                  options={{ suppressScrollX: true, suppressScrollY: true }}
                >
                  <div>
                    <img src={require("../../assets/images/banner/3.jpg")} alt="" height="600" />
                  </div>
                </ScrollBar>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Scrollable;