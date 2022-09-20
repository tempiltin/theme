import React, { Fragment } from 'react';
import { positionUSA } from '../../../data/LeafletMapData';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const USAMap = () => {

    return (
        <Fragment>
            <Col sm="6">
                <Card>
                    <CardHeader>
                        <h5>Leaflet UK MAP</h5>
                        <span>Below Map is displaying the UK map.</span>
                    </CardHeader>
                    <CardBody>
                        <MapContainer
                            className="jvector-map-height"
                            style={{ height: 400 }}
                            zoom={13}
                            center={positionUSA}
                            attributionControl={true}
                            zoomControl={true}
                            doubleClickZoom={true}
                            scrollWheelZoom={true}
                            dragging={true}
                            animate={true}
                            easeLinearity={0.35}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={positionUSA}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default USAMap;