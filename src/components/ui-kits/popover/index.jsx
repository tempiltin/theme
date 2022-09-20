import React, { Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import { MultiPopoverBasic, MultiPopoverDirection, MultiPopoverHtmlContent, MultiPopoverOffset } from './popoverComponent'
import { BasicExamples, Direction, HTMLContent, OffsetToTooltip } from '../../../constant'

const Popovers = (props) => {
  return (
    <Fragment>
      <Breadcrumb parent="Ui Kits" title="Popover" />
      <Container fluid={true}>
        <Row className="popover-main">
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{BasicExamples}</h5><span>{"lorem ipsum dolor sit amet, consectetur adipisicing elit"}</span>
              </CardHeader>
              <CardBody>
                <div  className="btn-showcase">
                  <MultiPopoverBasic />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{Direction}</h5><span>{"lorem ipsum dolor sit amet, consectetur adipisicing elit"}</span>
              </CardHeader>
              <CardBody>
                <div  className="btn-showcase">
                  <MultiPopoverDirection />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{HTMLContent}</h5><span>{"lorem ipsum dolor sit amet, consectetur adipisicing elit"}</span>
              </CardHeader>
              <CardBody>
                <div  className="btn-showcase">
                  <MultiPopoverHtmlContent />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{OffsetToTooltip}</h5><span>{"lorem ipsum dolor sit amet, consectetur adipisicing elit"}</span>
              </CardHeader>
              <CardBody>
                <div  className="btn-showcase">
                  <MultiPopoverOffset />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
export default Popovers;