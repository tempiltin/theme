import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Search, Edit, Globe, BookOpen, FileText, Youtube, MessageCircle, Mail, RotateCcw, DollarSign, Check, Link, Codepen, HelpCircle, Aperture, Settings, MessageSquare } from 'react-feather';
import one from '../../assets/images/faq/1.jpg';
import two from '../../assets/images/faq/2.jpg';
import three from '../../assets/images/faq/3.jpg';
import four from '../../assets/images/faq/4.jpg';
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Card, CardBody, CardHeader, Media, Collapse } from 'reactstrap';
import { Articles, Knowledgebase, Support, IntellectualProperty, SellingAndBuying, UserAccounts, SearchArticles, Navigation, AskOurCommunity, AskQuestion, Tutorials, HelpCenter, ContactUs, VideoTutorials, DavidLinner, UserChristopher, VictoriaWilson, LatestUpdates, UIDesign, UXDesign, WebDesign, FeaturedTutorials, SeeAll, WebDevelopment } from "../../constant";

const FaqComponent = () => {
    const [isCollaps, setIsCollaps] = useState(false);
    const [isCollaps1, setIsCollaps1] = useState(false);
    const [isCollaps2, setIsCollaps2] = useState(false);
    const [isCollaps3, setIsCollaps3] = useState(false);
    const [isCollaps4, setIsCollaps4] = useState(false);
    const [isCollaps5, setIsCollaps5] = useState(false);
    const [isCollaps6, setIsCollaps6] = useState(false);
    const [isCollaps7, setIsCollaps7] = useState(false);
    const [isCollaps8, setIsCollaps8] = useState(false);
    const [isCollaps9, setIsCollaps9] = useState(false);
    const [isCollaps10, setIsCollaps10] = useState(false);
    const [isCollaps11, setIsCollaps11] = useState(false);
    const [isCollaps12, setIsCollaps12] = useState(false);
    const [isCollaps13, setIsCollaps13] = useState(false);
    const [isCollaps14, setIsCollaps14] = useState(false);
    const [isCollaps15, setIsCollaps15] = useState(false);
    const history = useNavigate();
    const clickApply = () => {
        history(`${process.env.PUBLIC_URL}/app/learning/learning-detail/Dubai`);
    }
    return (
        <Fragment>
            <Breadcrumb parent="Apps" title="FAQ" />
            <Container fluid={true}>
                <div className="faq-wrap">
                    <Row>
                        <Col xl="4 xl-100">
                            <Card className="bg-primary">
                                <CardBody>
                                    <Media className="faq-widgets">
                                        <Media body>
                                            <h5>{Articles}</h5>
                                            <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                        </Media><FileText />
                                    </Media>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="4 xl-50" sm="6">
                            <Card className="bg-primary">
                                <CardBody>
                                    <Media className="faq-widgets">
                                        <Media body>
                                            <h5>{Knowledgebase}</h5>
                                            <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                        </Media><BookOpen />
                                    </Media>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="4 xl-50" sm="6">
                            <Card className="bg-primary">
                                <CardBody>
                                    <Media className="faq-widgets">
                                        <Media body>
                                            <h5>{Support}</h5>
                                            <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                        </Media><Aperture />
                                    </Media>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="12">
                            <div className="header-faq">
                                <h5 className="mb-0">{"Quick Questions are answered"}</h5>
                            </div>
                            <Row className="default-according style-1 faq-accordion" id="accordionoc">
                                <div className="col-xl-8 xl-60 col-lg-6 col-md-7">
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps(!isCollaps)}
                                                    data-toggle="collapse" data-target="#collapseicon" aria-expanded={isCollaps} aria-controls="collapseicon">
                                                    <HelpCircle />
                                                    {"Integrating WordPress with Your Website?"}
                                                </button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={isCollaps}>
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps1(!isCollaps1)}
                                                    data-toggle="collapse" data-target="#collapseicon2" aria-expanded={isCollaps1} aria-controls="collapseicon2">
                                                    <HelpCircle /> {"WordPress Site Maintenance ?"}</button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={isCollaps1}>
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps2(!isCollaps2)}
                                                    data-toggle="collapse" data-target="#collapseicon3" aria-expanded={isCollaps2} aria-controls="collapseicon2">
                                                    <HelpCircle />{"Meta Tags in WordPress ?"}</button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={isCollaps2}>
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps3(!isCollaps3)}
                                                    data-toggle="collapse" data-target="#collapseicon4" aria-expanded={isCollaps3} aria-controls="collapseicon2">
                                                    <HelpCircle /> {" WordPress in Your Language ?"}</button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={isCollaps3}>
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Collapse>
                                    </Card>
                                    <div className="faq-title">
                                        <h6>{IntellectualProperty}</h6>
                                    </div>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps4(!isCollaps4)}
                                                    data-toggle="collapse" data-target="#collapseicon5" aria-expanded={isCollaps4}>
                                                    <HelpCircle /> {"WordPress Site Maintenance ?"}</button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={isCollaps4}>
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps5(!isCollaps5)}
                                                    data-toggle="collapse" data-target="#collapseicon7" aria-expanded={isCollaps5} aria-controls="collapseicon2">
                                                    <HelpCircle />{" WordPress in Your Language ?"}</button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={isCollaps5}>
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps6(!isCollaps6)}
                                                    data-toggle="collapse" data-target="#collapseicon8" aria-expanded={isCollaps6} aria-controls="collapseicon2">
                                                    <HelpCircle /> {"Integrating WordPress with Your Website ?"}</button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={isCollaps6}>
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Collapse>
                                    </Card>
                                    <div className="faq-title">
                                        <h6>{SellingAndBuying}</h6>
                                    </div>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps7(!isCollaps7)}
                                                    data-toggle="collapse" data-target="#collapseicon9" aria-expanded={isCollaps7}>
                                                    <HelpCircle /> {"WordPress Site Maintenance ?"}</button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={isCollaps7}>
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps8(!isCollaps8)}
                                                    data-toggle="collapse" data-target="#collapseicon10" aria-expanded={isCollaps8} aria-controls="collapseicon2">
                                                    <HelpCircle />{"Meta Tags in WordPress ?"}</button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={isCollaps8}>
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps9(!isCollaps9)}
                                                    data-toggle="collapse" data-target="#collapseicon11" aria-expanded={isCollaps9} aria-controls="collapseicon2">
                                                    <HelpCircle />{"Validating a Website ?"}</button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={isCollaps9} >
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps10(!isCollaps10)}
                                                    data-toggle="collapse" data-target="#collapseicon12" aria-expanded={isCollaps10} aria-controls="collapseicon2">
                                                    <HelpCircle />{"Know Your Sources ?"}</button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={isCollaps10}>
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Collapse>
                                    </Card>
                                    <div className="faq-title">
                                        <h6>{UserAccounts}</h6>
                                    </div>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps11(!isCollaps11)}
                                                    data-toggle="collapse" data-target="#collapseicon13" aria-expanded={isCollaps11}>
                                                    <HelpCircle />{"Integrating WordPress with Your Website ?"}</button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={isCollaps11}>
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps12(!isCollaps12)}
                                                    data-toggle="collapse" data-target="#collapseicon14" aria-expanded={isCollaps12} aria-controls="collapseicon2">
                                                    <HelpCircle />{"WordPress Site Maintenance ?"}</button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={isCollaps12}>
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps13(!isCollaps13)}
                                                    data-toggle="collapse" data-target="#collapseicon16" aria-expanded={isCollaps13} aria-controls="collapseicon2">
                                                    <HelpCircle />{" WordPress in Your Language ?"}</button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={isCollaps13}>
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps14(!isCollaps14)}
                                                    data-toggle="collapse" data-target="#collapseicon17" aria-expanded={isCollaps14} aria-controls="collapseicon2">
                                                    <HelpCircle />  {"Validating a Website ?"}</button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={isCollaps14}>
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Collapse>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed ps-0" onClick={() => setIsCollaps15(!isCollaps15)}
                                                    data-toggle="collapse" data-target="#collapseicon18" aria-expanded={isCollaps15} aria-controls="collapseicon2">
                                                    <HelpCircle />{"Meta Tags in WordPress ?"}</button>
                                            </h5>
                                        </CardHeader>
                                        <Collapse isOpen={isCollaps15}>
                                            <CardBody>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</CardBody>
                                        </Collapse>
                                    </Card>
                                </div>
                                <div className="col-xl-4 xl-40 col-lg-6 col-md-5">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="card card-mb-faq xs-mt-search">
                                                <div className="card-header faq-header">
                                                    <h5>{SearchArticles}</h5>
                                                    <HelpCircle />
                                                </div>
                                                <div className="card-body faq-body">
                                                    <div className="faq-form">
                                                        <input className="form-control" type="text" placeholder="Search.." />
                                                        <Search className="search-icon" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="card card-mb-faq">
                                                <div className="card-header faq-header">
                                                    <h5>{Navigation}</h5><Settings />
                                                </div>
                                                <div className="card-body faq-body">
                                                    <div className="navigation-btn"><a className="btn btn-primary" href="#javascript">
                                                        <MessageSquare className="m-r-10" />{AskQuestion}</a></div>
                                                    <div className="navigation-option">
                                                        <ul>
                                                            <li><a href="#javascript"><Edit />{Tutorials}</a></li>
                                                            <li><a href="#javascript"><Globe />{HelpCenter}</a></li>
                                                            <li><a href="#javascript"><BookOpen />{Knowledgebase}</a></li>
                                                            <li><a href="#javascript"><FileText />{Articles}</a><span className="badge bg-primary rounded-pill pull-right">{"42"}</span></li>
                                                            <li><a href="#javascript"><Youtube />{VideoTutorials}</a><span className="badge bg-primary rounded-pill pull-right">{"648"}</span></li>
                                                            <li><a href="#javascript"><MessageCircle />{AskOurCommunity}</a></li>
                                                            <li><a href="#javascript"><Mail />{ContactUs}</a></li>
                                                        </ul>
                                                        <hr />
                                                        <ul>
                                                            <li><a href="#javascript"><MessageCircle />{AskOurCommunity}</a></li>
                                                            <li><a href="#javascript"><Mail />{ContactUs}</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <Card>
                                                <div className="card-header faq-header">
                                                    <h5 className="d-inline-block">{LatestUpdates}</h5><span className="pull-right d-inline-block">{SeeAll}</span>
                                                </div>
                                                <div className="card-body faq-body">
                                                    <div className="media updates-faq-main">
                                                        <div className="updates-faq"><RotateCcw className="font-primary" /></div>
                                                        <div className="media-body updates-bottom-time">
                                                            <p><a href="#javascript">{DavidLinner} </a>{"requested money back for a double debit card charge"}</p>
                                                            <p>{"10 minutes ago"}</p>
                                                        </div>
                                                    </div>
                                                    <div className="media updates-faq-main">
                                                        <div className="updates-faq"><DollarSign className="font-primary" /></div>
                                                        <div className="media-body updates-bottom-time">
                                                            <p>{"All sellers have received monthly payouts"}</p>
                                                            <p>{"2 hours ago"}</p>
                                                        </div>
                                                    </div>
                                                    <div className="media updates-faq-main">
                                                        <div className="updates-faq"><Link className="font-primary" /></div>
                                                        <div className="media-body updates-bottom-time">
                                                            <p>{UserChristopher} <a href="#javascript">{"Wallace"}</a> {"is on hold and awaiting for staff reply"}</p>
                                                            <p>{"45 minutes ago"}</p>
                                                        </div>
                                                    </div>
                                                    <div className="media updates-faq-main">
                                                        <div className="updates-faq"><Check className="font-primary" /></div>
                                                        <div className="media-body updates-bottom-time">
                                                            <p>{"Ticket #43683 has been closed by"} <a href="#javascript">{VictoriaWilson}</a></p>
                                                            <p>{"Dec 7, 11:48"}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </Col>
                        <Col lg="12">
                            <div className="header-faq">
                                <h5 className="mb-0">{FeaturedTutorials}</h5>
                            </div>
                            <Row>
                                <Col xl="3 xl-50 box-col-6" md="6">
                                    <Card className="features-faq product-box">
                                        <div className="faq-image product-img">
                                            <img className="img-fluid" src={one} alt="" />
                                            <div className="product-hover">
                                                <ul>
                                                    <li><i className="icon-link" onClick={() => clickApply()}></i></li>
                                                    <li><i className="icon-import"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <CardBody>
                                            <h6>{WebDesign}</h6>
                                            <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                        </CardBody>
                                        <div className="card-footer"><span>{"Dec 15, 2022"}</span><span className="pull-right"><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i></span></div>
                                    </Card>
                                </Col>
                                <Col xl="3 xl-50 box-col-6" md="6">
                                    <Card className="features-faq product-box">
                                        <div className="faq-image product-img">
                                            <img className="img-fluid" src={two} alt="" />
                                            <div className="product-hover">
                                                <ul>
                                                    <li><i className="icon-link" onClick={() => clickApply()}></i></li>
                                                    <li><i className="icon-import"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <CardBody>
                                            <h6>{WebDevelopment}</h6>
                                            <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                        </CardBody>
                                        <div className="card-footer"><span>{"Dec 15, 2022"}</span><span className="pull-right"><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star-o font-primary"></i></span></div>
                                    </Card>
                                </Col>
                                <Col xl="3 xl-50 box-col-6" md="6">
                                    <Card className="features-faq product-box">
                                        <div className="faq-image product-img">
                                            <img className="img-fluid" src={three} alt="" />
                                            <div className="product-hover">
                                                <ul>
                                                    <li><i className="icon-link" onClick={() => clickApply()}></i></li>
                                                    <li><i className="icon-import"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <CardBody>
                                            <h6>{UIDesign}</h6>
                                            <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                        </CardBody>
                                        <div className="card-footer"><span>{"Dec 15, 2022"}</span><span className="pull-right"><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i></span></div>
                                    </Card>
                                </Col>
                                <Col xl="3 xl-50 box-col-6" md="6">
                                    <Card className="features-faq product-box">
                                        <div className="faq-image product-img">
                                            <img className="img-fluid" src={four} alt="" />
                                            <div className="product-hover">
                                                <ul>
                                                    <li><i className="icon-link" onClick={() => clickApply()}></i></li>
                                                    <li><i className="icon-import"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <CardBody>
                                            <h6>{UXDesign}</h6>
                                            <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                        </CardBody>
                                        <div className="card-footer"><span>{"Dec 15, 2022"}</span><span className="pull-right"><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star-half-o font-primary"></i></span></div>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="12">
                            <div className="header-faq">
                                <h5 className="mb-0">{"Latest articles and videos"}</h5>
                            </div>
                            <Row>
                                <Col xl="4" md="6">
                                    <Row>
                                        <Col sm="12">
                                            <Card>
                                                <CardBody>
                                                    <Media>
                                                        <Codepen className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{"Using Video"}</h6>
                                                            <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col sm="12">
                                            <Card>
                                                <CardBody>
                                                    <Media>
                                                        <Codepen className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{"Vel illum qu"}</h6>
                                                            <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col sm="12">
                                            <Card>
                                                <CardBody>
                                                    <Media><Codepen className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{" Cum sociis natoqu"}</h6>
                                                            <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."} </p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl="4" md="6">
                                    <Row>
                                        <Col sm="12">
                                            <Card>
                                                <CardBody>
                                                    <Media>
                                                        <FileText className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{" Donec pede justo"}</h6>
                                                            <p>{" Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."} </p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col sm="12">
                                            <Card>
                                                <CardBody>
                                                    <Media>
                                                        <FileText className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{"Nam quam nunc"}</h6>
                                                            <p>{" Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col sm="12">
                                            <Card>
                                                <CardBody>
                                                    <Media>
                                                        <FileText className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{"Using Video"} </h6>
                                                            <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl="4">
                                    <Row>
                                        <Col xl="12" md="6">
                                            <Card>
                                                <CardBody>
                                                    <Media>
                                                        <Youtube className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{" Vel illum qu"}</h6>
                                                            <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col xl="12" md="6">
                                            <Card>
                                                <CardBody>
                                                    <Media>
                                                        <Youtube className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{" Cum sociis natoqu"}</h6>
                                                            <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col xl="12">
                                            <Card>
                                                <CardBody>
                                                    <Media><Youtube className="m-r-30" />
                                                        <Media body>
                                                            <h6 className="f-w-600">{"Donec pede justo"}</h6>
                                                            <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Fragment>
    );
};

export default FaqComponent;