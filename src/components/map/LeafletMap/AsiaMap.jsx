import React, { Fragment } from 'react';
import { centerAsia, multiPolylineAsia, polylineAsia, positionAsia, rectangleAsia } from '../../../data/LeafletMapData';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { Circle, CircleMarker, MapContainer, Polyline, Popup, Rectangle, TileLayer } from 'react-leaflet';

const AsiaMap = () => {
    const fillBlueOptions = { fillColor: 'blue' };
    const blackOptions = { color: '#7366ff' };
    const redOptions = { color: '#f73164' };
    const limeOptions = { color: 'brown' };
    return (
        <Fragment>
            <Col sm="6">
                <Card>
                    <CardHeader>
                        <h5>Leaflet Asia MAP</h5>
                    </CardHeader>
                    <CardBody>
                    <span>Below Map is displaying the Aisa map.</span>
                        <MapContainer
                            className="jvector-map-height"
                            style={{ height: 400 }}
                            zoom={3} center={positionAsia} zoomControl={true} doubleClickZoom={true}
                            scrollWheelZoom={true} dragging={true} animate={true} >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Circle center={centerAsia} pathOptions={fillBlueOptions} radius={80} />
                            <CircleMarker center={[46.0479, 100.6197]} pathOptions={redOptions} radius={10}>
                                <Popup>Popup in CircleMarker</Popup>
                            </CircleMarker>
                            <Polyline pathOptions={limeOptions} positions={polylineAsia} />
                            <Polyline pathOptions={limeOptions} positions={multiPolylineAsia} />
                            <Rectangle bounds={rectangleAsia} pathOptions={blackOptions} />
                        </MapContainer>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default AsiaMap;