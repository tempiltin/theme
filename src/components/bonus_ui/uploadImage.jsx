import React, { Fragment, useState } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { SelectSingleImageUpload } from '../../constant';
import Files from 'react-files'
import Breadcrumbs from "../../layout/breadcrumb";

const UploadImage = () => {
    const [files, setFiles] = useState([]);

    function deleteFile(e) {
        setFiles([]);
        return files

    }

    const onFilesChange = (files) => {
        setFiles(files)
    }
    const onFilesError = (error, file) => {
        setFiles(file)
    }

    return (
        <Fragment>
            <Breadcrumbs parent="Bouns Ui" title="Upload Image" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{SelectSingleImageUpload}</h5>
                            </CardHeader>
                            <CardBody className="fileUploader">
                                <Files
                                    className='files-dropzone fileContainer'
                                    onChange={onFilesChange}
                                    onError={onFilesError}
                                    accepts={['image/*']}
                                    multiple={false}
                                    maxFileSize={10000000}
                                    minFileSize={0}
                                    clickable
                                >
                                    {
                                        files.length > 0
                                            ? <div className='files-gallery'>
                                                {files.map((file, index) =>
                                                    <img className='files-gallery-item' src={file.preview.url} key={index} alt='' />
                                                )}
                                            </div>
                                            :
                                            <div className="d-flex justify-content-center">
                                                <button className="chooseFileButton me-2">Upload Image</button>
                                            </div>
                                    }
                                </Files>
                                {files.length > 0 ?
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-success mt-2" type="button" onClick={() => deleteFile(files)}>
                                            Delete
                                        </button></div> : ''}

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>

    );
};

export default UploadImage;