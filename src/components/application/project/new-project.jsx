import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import Dropzone from 'react-dropzone-uploader'
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import DatePicker from "react-datepicker";
import { useForm } from 'react-hook-form'
import { addNewProject } from '../../../redux/project-app/action'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { ProjectTitle, ClientName, ProjectRate, ProjectStatus, ProgressLevel, ProjectSize, Small, Medium, Big, StartingDate, EndingDate, EnterSomeDetails, UploadProjectFile, Add, Cancel, Done, Doing } from '../../../constant'
import { classes } from '../../../data/layouts';

const Newproject = (props) => {

  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [startDate, setstartDate] = useState(new Date())
  const [endDate, setendDate] = useState(new Date());
  const defaultLayoutObj = classes.find(item => Object.values(item).pop(1) === 'compact-wrapper');
  const layout = localStorage.getItem('layout') || Object.keys(defaultLayoutObj).pop();

  const handleStartDate = date => {
    setstartDate(date);
  };

  const handleEndDate = date => {
    setendDate(date);
  };

  const getUploadParams = ({ meta }) => {
    return {
      url: 'https://httpbin.org/post'
    }
  }


  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { }

  const AddProject = data => {
    console.log("data", data);
    if (data !== '') {
      dispatch(addNewProject(data))
      props.history(`${process.env.PUBLIC_URL}/app/project/project-list/${layout}`)
    } else {
      errors.showMessages();
    }
  };
  return (
    <Fragment>
      <Breadcrumb parent="Project" title="Create Project" />
      <Container fluid={true} className="projectlist">
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form className="theme-form" onSubmit={handleSubmit(AddProject)}>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{ProjectTitle}</Label>
                        <input className="form-control" type="text" name="title" placeholder="Project name *" {...register('title', { required: true })} />
                        <span style={{ color: "red" }}>{errors.title && 'Title is required'}</span>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{ClientName}</Label>
                        <input className="form-control" type="text" name="client_name" placeholder="Name client or company name" {...register('client_name', { required: true })} />
                        <span style={{ color: "red" }}>{errors.client_name && 'Client Name is required'}</span>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="4">
                      <FormGroup>
                        <Label>{ProjectRate}</Label>
                        <input className="form-control" type="number" name="rate" defaultValue="10" placeholder="Enter project Rate" {...register('rate', { required: true })} />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label>{ProgressLevel}</Label>
                        <Input type="select" name="progress_level" className="form-control digits" >
                          <option value="25">{"25"}</option>
                          <option value="50">{"50"}</option>
                          <option value="70">{"70"}</option>
                          <option value="100">{"100"}</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label>{ProjectStatus}</Label>
                        <Input type="select" name="status" placeholder="Select Status" className="form-control digits" >
                          <option value="Done">{Done}</option>
                          <option value="Doing">{Doing}</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="4">
                      <FormGroup>
                        <Label>{ProjectSize}</Label>
                        <select className="form-control digits">
                          <option>{Small}</option>
                          <option>{Medium}</option>
                          <option>{Big}</option>
                        </select>
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label>{StartingDate}</Label>
                        <DatePicker className="datepicker-here form-control" selected={startDate} onChange={handleStartDate} />
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <Label>{EndingDate}</Label>
                        <DatePicker className="datepicker-here form-control" selected={endDate} endDate={endDate} onChange={handleEndDate} />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{EnterSomeDetails}</Label>
                        <input type="textarea" className="form-control" name="description" rows="3" {...register('description', { required: true })} />
                        <span style={{ color: "red" }}>{errors.description && 'Some Details is required'}</span>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{UploadProjectFile}</Label>
                        <Dropzone
                          getUploadParams={getUploadParams}
                          onChangeStatus={handleChangeStatus}
                          maxFiles={1}
                          multiple={false}
                          canCancel={false}
                          inputContent="Drop A File"
                          styles={{
                            dropzone: { width: '100%', height: 50 },
                            dropzoneActive: { borderColor: 'green' },
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Button color="success" className="me-3">{Add}</Button>
                        <Link to={`${process.env.PUBLIC_URL}/app/project/project-list`}>
                          <Button color="danger">{Cancel}</Button>
                        </Link>
                      </FormGroup>
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

export default Newproject;