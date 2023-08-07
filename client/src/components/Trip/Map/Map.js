import React from 'react';
import { Map as LeafletMap, Polyline, TileLayer } from 'react-leaflet';
import Marker from './Marker';
import { placeToLatLng } from '../../../utils/transformers';
import { DEFAULT_STARTING_POSITION } from '../../../utils/constants';
import 'leaflet/dist/leaflet.css';

const MAP_BOUNDS = [[-90, -180], [90, 180]];
const MAP_MIN_ZOOM = 1;
const MAP_MAX_ZOOM = 19;

export default function Map(props) {
    async function handleMapClick(mapClickInfo) {
        props.enableDistances ?
            props.placeActions.append(mapClickInfo.latlng).then((newPlaces) => {
                props.distancesActions.calculateDistances(newPlaces, props.earthRadius);
            }) :
            props.placeActions.append(mapClickInfo.latlng)
    }

    return (
        <LeafletMap
            className="mapStyle"
            boxZoom={false}
            useFlyTo={true}
            zoom={15}
            minZoom={MAP_MIN_ZOOM}
            maxZoom={MAP_MAX_ZOOM}
            maxBounds={MAP_BOUNDS}
            center={DEFAULT_STARTING_POSITION}
            onClick={handleMapClick}
            data-testid="Map"
        >
            <TileLayer mapLayer={props.mapLayer} mapAttribution={props.mapAttribution} url={props.mapLayer} attribution={props.mapAttribution} />
            <TripLines places={props.places} lineColor={props.lineColor} />
            <PlaceMarker places={props.places} selectedIndex={props.selectedIndex} mapMarker={props.mapMarker}/>
        </LeafletMap>
    );
}

function TripLines(props) {
    const pathData = computePaths(props.places);
    return pathData.map((path, index) =>
        <Polyline
            color={props.lineColor}
            key={`${JSON.stringify(path)}-${index}`}
            positions={path}
        />
    );
}

function computePaths(places) {
    if (places.length < 2) {
        return [];
    }

    const pathPointPairs = [];
    for (let i = 0; i < places.length; i++) {
        const fromPlace = places[i];
        const toPlace = places[(i+1) % places.length];
        pathPointPairs.push([placeToLatLng(fromPlace), placeToLatLng(toPlace)]);
    }
    return pathPointPairs;
}

function PlaceMarker({places, selectedIndex, mapMarker}) {
    if (selectedIndex === -1) {
        return null;
    }
    return <Marker place={places[selectedIndex]} mapMarker={mapMarker}/>;
}