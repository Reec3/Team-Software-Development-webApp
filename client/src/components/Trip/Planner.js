import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Map from './Map/Map';
import Itinerary from './Itinerary/Itinerary';
import icon1 from '../../static/images/icon1.png';

export default function Planner(props) {
    const [lineColor, setLineColor] = useState("#3388FF");
    const [mapLayer, setMapLayer] = useState('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    const [mapAttribution, setMapAttribution] = useState('&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors');
    const [mapMarker, setMapMarker] = useState(icon1);

    return (
        <Container><Section>
            <Map places={props.places}
                    selectedIndex={props.selectedIndex}
                    placeActions={props.placeActions}
                    earthRadius={props.earthRadius}
                    enableDistances={props.enableDistances}
                    distancesActions={props.distancesActions}
                    lineColor={lineColor} mapLayer={mapLayer} mapAttribution={mapAttribution} mapMarker={mapMarker}/>
            </Section>
            <Section>
                <Itinerary setLineColor={setLineColor} lineColor={lineColor} places={props.places} selectedIndex={props.selectedIndex} placeActions={props.placeActions}
                enableDistances={props.enableDistances} distancesUnits={props.distancesUnits} setDistancesUnits={props.setDistancesUnits} mapAttribution={mapAttribution} setMapAttribution={setMapAttribution}
                earthRadius={props.earthRadius} setEarthRadius={props.setEarthRadius} legDistances={props.legDistances} mapLayer={mapLayer} setMapLayer={setMapLayer}
                summedDistances={props.summedDistances} totalDistance={props.totalDistance} distancesActions={props.distancesActions}
                optimizedPlaces={props.optimizedPlaces} optimizedDistance={props.optimizedDistance} optimizeActions={props.optimizeActions}
                setSearchMatch={props.setSearchMatch} searchMatch={props.searchMatch} setSearchType={props.setSearchType} setSearchWhere={props.setSearchWhere}
                numFound={props.numFound} foundPlaces={props.foundPlaces} searchActions={props.searchActions} setFoundPlaces={props.setFoundPlaces} setMapMarker={setMapMarker}/>
            </Section>
        </Container>
    );
}

function Section(props) {
    return (
        <Row>
            <Col sm={12} md={{ size: 10, offset: 1 }}>
                {props.children}
            </Col>
        </Row>
    );
}
