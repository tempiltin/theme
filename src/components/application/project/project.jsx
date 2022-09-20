import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, Progress, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import { Target, Info, CheckCircle, PlusCircle } from 'react-feather';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { classes } from "../../../data/layouts";
import { Issues, Resolved, Comment, Done, All, Doing, CreateNewProject } from '../../../constant'

const Project = () => {

  const [activeTab, setActiveTab] = useState("1")
  const allProject = useSelector(content => content.Projectapp.all_Project);
  const doingProject = useSelector(content => content.Projectapp.doing_Project);
  const doneProject = useSelector(content => content.Projectapp.done_Project);
  const defaultLayoutObj = classes.find(item => Object.values(item).pop(1) === 'compact-wrapper');
  const layout = localStorage.getItem('layout') || Object.keys(defaultLayoutObj).pop();

  return (
    <Fragment>
      <Breadcrumb parent="Project" title="Project List" />
      <Container fluid={true}>
        <Row className="project-card">
          <Col md="12" className="project-list">
            <Card>
              <Row>
                <Col md="6">
                  <Nav tabs className="border-tab">
                    <NavItem><NavLink className={activeTab === "1" ? "active" : ''} onClick={() => setActiveTab("1")}><Target />{All}</NavLink></NavItem>
                    <NavItem><NavLink className={activeTab === "2" ? "active" : ''} onClick={() => setActiveTab("2")}><Info />{Doing}</NavLink></NavItem>
                    <NavItem><NavLink className={activeTab === "3" ? "active" : ''} onClick={() => setActiveTab("3")}><CheckCircle />{Done}</NavLink></NavItem>
                  </Nav>
                </Col>
                <Col md="6">
                  <div className="text-end">
                    <Link className="btn btn-primary" style={{ color: 'white' }} to={`${process.env.PUBLIC_URL}/app/project/new-project/${layout}`}> <PlusCircle />{CreateNewProject}</Link>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardBody>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      {allProject.map((item, i) =>
                        <Col xxl="4" lg="6" key={i}>
                          <div className="project-box">
                            <span className={`badge ${item.badge === "Done" ? 'badge-success' : 'bg-primary'}`}>{item.badge}</span>
                            <h6>{item.title}</h6>
                            <div className="media">
                              <img className="img-20 me-1 rounded-circle" src={require(`../../../assets/images/${item.img}`)} alt="" />
                              <div className="media-body">
                                <p>{item.sites}</p>
                              </div>
                            </div>
                            <p>{item.desc}</p>
                            <Row className="details">
                              <Col xs="6"><span>{Issues} </span></Col>
                              <Col xs="6" className={item.badge === "Done" ? 'font-success' : 'font-primary'}>{item.issue}</Col>
                              <Col xs="6"> <span>{Resolved}</span></Col>
                              <Col xs="6" className={item.badge === "Done" ? 'font-success' : 'font-primary'}>{item.resolved}</Col>
                              <Col xs="6"> <span>{Comment}</span></Col>
                              <Col xs="6" className={item.badge === "Done" ? 'font-success' : 'font-primary'}>{item.comment}</Col>
                            </Row>
                            <div className="customers">
                              <ul>
                                <li className="d-inline-block"><img className="img-30 rounded-circle" src={require(`../../../assets/images/${item.customers_img1}`)} alt="" /></li>
                                <li className="d-inline-block"><img className="img-30 rounded-circle" src={require(`../../../assets/images/${item.customers_img2}`)} alt="" /></li>
                                <li className="d-inline-block"><img className="img-30 rounded-circle" src={require(`../../../assets/images/${item.customers_img3}`)} alt="" /></li>
                                <li className="d-inline-block ms-2">
                                  <p className="f-12">{`+${item.like} More`}</p>
                                </li>
                              </ul>
                            </div>
                            <div className="project-status mt-4">
                              <div className="media mb-0">
                                <p>{item.progress}% </p>
                                <div className="media-body text-end"><span>{Done}</span></div>
                              </div>
                              {item.progress === "100" ?
                                <Progress className="sm-progress-bar" color="success" value={item.progress} style={{ height: "5px" }} />
                                :
                                <Progress className="sm-progress-bar" striped color="primary" value={item.progress} style={{ height: "5px" }} />
                              }
                            </div>
                          </div>
                        </Col>
                      )}
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      {doingProject.map((item, i) =>
                        <Col xxl="4" lg="6" key={i}>
                          <div className="project-box">
                            <span className="badge bg-primary">{item.badge}</span>
                            <h6 className="f-w-600">{item.title}</h6>
                            <div className="media">
                              <img className="img-20 me-1 rounded-circle" src={require(`../../../assets/images/${item.img}`)} alt="" />
                              <div className="media-body">
                                <p>{item.sites}</p>
                              </div>
                            </div>
                            <p>{item.desc}</p>
                            <Row className="details">
                              <Col xs="6"><span>{Issues} </span></Col>
                              <Col xs="6" className="font-primary">{item.issue}</Col>
                              <Col xs="6"> <span>{Resolved}</span></Col>
                              <Col xs="6" className="font-primary">{item.resolved}</Col>
                              <Col xs="6"> <span>{Comment}</span></Col>
                              <Col xs="6" className="font-primary">{item.comment}</Col>
                            </Row>
                            <div className="customers">
                              <ul>
                                <li className="d-inline-block"><img className="img-30 rounded-circle" src={require(`../../../assets/images/${item.customers_img1}`)} alt="" /></li>
                                <li className="d-inline-block"><img className="img-30 rounded-circle" src={require(`../../../assets/images/${item.customers_img2}`)} alt="" /></li>
                                <li className="d-inline-block"><img className="img-30 rounded-circle" src={require(`../../../assets/images/${item.customers_img3}`)} alt="" /></li>
                                <li className="d-inline-block ms-2">
                                  <p className="f-12">{item.like}</p>
                                </li>
                              </ul>
                            </div>
                            <div className="project-status mt-4">
                              <div className="media mb-0">
                                <p>{item.progress}% </p>
                                <div className="media-body text-end"><span>{Done}</span></div>
                              </div>
                              {item.progress === "100" ?
                                <Progress className="sm-progress-bar" color="primary" value={item.progress} style={{ height: "5px" }} />
                                :
                                <Progress className="sm-progress-bar" striped color="primary" value={item.progress} style={{ height: "5px" }} />
                              }
                            </div>
                          </div>
                        </Col>
                      )}
                    </Row>
                  </TabPane>
                  <TabPane tabId="3">
                    <Row>
                      {doneProject.map((item, i) =>
                        <Col xxl="4" lg="6" key={i}>
                          <div className="project-box">
                            <span className="badge badge-success">{item.badge}</span>
                            <h6 className="f-w-600">{item.title}</h6>
                            <div className="media">
                              <img className="img-20 me-1 rounded-circle" src={require(`../../../assets/images/${item.img}`)} alt="" />
                              <div className="media-body">
                                <p>{item.sites}</p>
                              </div>
                            </div>
                            <p>{item.desc}</p>
                            <Row className="details">
                              <Col xs="6"><span>{Issues} </span></Col>
                              <Col xs="6" className="font-success">{item.issue}</Col>
                              <Col xs="6"> <span>{Resolved}</span></Col>
                              <Col xs="6" className="font-success">{item.resolved}</Col>
                              <Col xs="6"> <span>{Comment}</span></Col>
                              <Col xs="6" className="font-success">{item.comment}</Col>
                            </Row>
                            <div className="customers">
                              <ul>
                                <li className="d-inline-block"><img className="img-30 rounded-circle" src={require(`../../../assets/images/${item.customers_img1}`)} alt="" /></li>
                                <li className="d-inline-block"><img className="img-30 rounded-circle" src={require(`../../../assets/images/${item.customers_img2}`)} alt="" /></li>
                                <li className="d-inline-block"><img className="img-30 rounded-circle" src={require(`../../../assets/images/${item.customers_img3}`)} alt="" /></li>
                                <li className="d-inline-block ms-2">
                                  <p className="f-12">{item.like}</p>
                                </li>
                              </ul>
                            </div>
                            <div className="project-status mt-4">
                              <div className="media mb-0">
                                <p>{item.progress}% </p>
                                <div className="media-body text-end"><span>{Done}</span></div>
                              </div>
                              {item.progress === "100" ?
                                <Progress className="sm-progress-bar" color="success" value={item.progress} style={{ height: "5px" }} />
                                :
                                <Progress className="sm-progress-bar" striped color="success" value={item.progress} style={{ height: "5px" }} />
                              }
                            </div>
                          </div>
                        </Col>
                      )}
                    </Row>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Project;