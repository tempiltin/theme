import React, { Fragment } from 'react';
import { centerAustralia, rectangleAustralia } from '../../../data/LeafletMapData';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { FeatureGroup, LayerGroup, MapContainer, Popup, Rectangle, TileLayer } from 'react-leaflet';

const AustraliaMap = () => {

    const purpleOptions = { color: '#7366ff' };
    return (
        <Fragment>
            <Col sm="6">
                <Card>
                    <CardHeader>
                        <h5>Leaflet Australia MAP</h5>
                    </CardHeader>
                    <CardBody>
                        <span>Below Map is displaying the Australia map.</span>
                        <MapContainer
                            className="jvector-map-height"
                            style={{ height: 400 }}
                            zoom={4} center={centerAustralia} zoomControl={true} doubleClickZoom={true}
                            scrollWheelZoom={true} dragging={true} animate={true} >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <LayerGroup>
                                <LayerGroup>
                                </LayerGroup>
                            </LayerGroup>
                            <FeatureGroup pathOptions={purpleOptions}>
                                <Popup>Popup in FeatureGroup</Popup>
                                <Rectangle bounds={rectangleAustralia} />
                            </FeatureGroup>
                        </MapContainer>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default AustraliaMap;