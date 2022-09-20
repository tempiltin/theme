import React, { Fragment } from 'react';
import { boundsIndia, positionIndia } from '../../../data/LeafletMapData';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { MapContainer, SVGOverlay, TileLayer } from 'react-leaflet';

const IndiaMap = () => {

    return (
        <Fragment>
            <Col sm="6">
                <Card>
                    <CardHeader>
                        <h5>Leaflet India MAP</h5>
                        <span>Below Map is displaying the India map.</span>
                    </CardHeader>
                    <CardBody>
                        <MapContainer
                            className="jvector-map-height"
                            style={{ height: 400 }}
                            zoom={5} center={positionIndia} zoomControl={true} doubleClickZoom={true}
                            scrollWheelZoom={true} dragging={true} animate={true} >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <SVGOverlay attributes={{ stroke: 'blue' }} bounds={boundsIndia}>
                                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                                <circle r="5" cx="10" cy="10" fill="skyblue" />
                                <text x="50%" y="50%" stroke="blue">
                                    text
                                </text>
                            </SVGOverlay>
                        </MapContainer>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default IndiaMap;