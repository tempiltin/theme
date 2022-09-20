import React, { Fragment } from 'react';
import { centerCanada, positionCanada, rectangleCanada } from '../../../data/LeafletMapData';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { Circle, FeatureGroup, LayerGroup, MapContainer, Popup, Rectangle, TileLayer } from 'react-leaflet';

const CanadaMap = () => {

    const fillBlueOptions = { fillColor: 'blue' };
    const fillRedOptions = { fillColor: 'red' };
    const greenOptions = { color: 'green', fillColor: 'green' };
    const purpleOptions = { color: 'purple' };

    return (
        <Fragment>
            <Col sm="6">
                <Card>
                    <CardHeader>
                        <h5>
                            Leaflet Canada MAP
                        </h5>
                        <span>Below Map is displaying the Canada map.</span>
                    </CardHeader>
                    <CardBody>
                        <MapContainer
                            className="jvector-map-height"
                            style={{ height: 400 }}
                            zoom={5} center={positionCanada} zoomControl={true} doubleClickZoom={true}
                            scrollWheelZoom={true} dragging={true} animate={true} >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <LayerGroup>
                                <Circle center={centerCanada} pathOptions={fillBlueOptions} radius={200} />
                                <Circle
                                    center={centerCanada}
                                    pathOptions={fillRedOptions}
                                    radius={100}
                                    stroke={false}
                                />
                                <LayerGroup>
                                    <Circle
                                        center={centerCanada}
                                        pathOptions={greenOptions}
                                        radius={100}
                                    />
                                </LayerGroup>
                            </LayerGroup>
                            <FeatureGroup pathOptions={purpleOptions}>
                                <Popup>Popup in FeatureGroup</Popup>
                                <Circle center={[51.51, -0.06]} radius={200} />
                                <Rectangle bounds={rectangleCanada} />
                            </FeatureGroup>
                        </MapContainer>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default CanadaMap;