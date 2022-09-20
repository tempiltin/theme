import React, { Fragment } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';

const WorldMap = () => {
    return (
        <Fragment>
            <Col sm="6">
                <Card>
                    <CardHeader>
                        <h5>Leaflet WORLD MAP</h5>
                        <span>Below Map is displaying the world map.</span>
                    </CardHeader>
                    <CardBody>
                        <MapContainer
                            className="jvector-map-height"
                            style={{ height: 400 }}
                            center={[50, 10]}
                            zoom={1}
                            maxZoom={10}
                            attributionControl={true}
                            zoomControl={true}
                            doubleClickZoom={true}
                            scrollWheelZoom={true}
                            dragging={true}
                            animate={true}
                            easeLinearity={0.35}
                        >
                            <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
                        </MapContainer>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default WorldMap;