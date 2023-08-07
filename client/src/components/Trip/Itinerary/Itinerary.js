import React, { useState } from 'react';
import { useToggle } from '../../../hooks/useToggle';
import { Table, Collapse, Button } from 'reactstrap';
import { DistancesActionsDropdown, ItineraryActionsDropdown, PlaceActionsDropdown } from './actions.js';
import { latLngToText, placeToLatLng } from '../../../utils/transformers';
import AddPlace from './AddPlace';
import LoadTrip from './LoadTrip';
import SetUnits from './SetUnits';
import EditName from './EditName';
import OptTrip from './OptTrip';
import SaveTrip from './SaveTrip';
import ColorPicker from './ColorPicker';
import MapLayer from './MapLayer';
import { BiEdit, BiSliderAlt } from 'react-icons/bi';

export default function Itinerary(props) {
    function tripIsEmpty() {
        return !props.places || props.places.length === 0;
    }

    return (
        <Table responsive>
            <TripHeader places={props.places}
						placeActions={props.placeActions}
						disableRemoveAll={tripIsEmpty()} totalDistance={props.totalDistance} distancesUnits={props.distancesUnits} mapAttribution={props.mapAttribution} setMapAttribution={props.setMapAttribution}
						setDistancesUnits={props.setDistancesUnits} earthRadius={props.earthRadius} setEarthRadius={props.setEarthRadius} setMapMarker={props.setMapMarker}
						enableDistances={props.enableDistances} distancesActions={props.distancesActions} optimizedPlaces={props.optimizedPlaces}
						optimizedDistance={props.optimizedDistance} optimizeActions={props.optimizeActions} mapLayer={props.mapLayer} setMapLayer={props.setMapLayer}
						setSearchMatch={props.setSearchMatch} searchMatch={props.searchMatch} setSearchType={props.setSearchType} setSearchWhere={props.setSearchWhere}
            numFound={props.numFound} foundPlaces={props.foundPlaces} searchActions={props.searchActions} setFoundPlaces={props.setFoundPlaces} lineColor={props.lineColor} setLineColor={props.setLineColor}/>
            <PlaceList places={props.places}
						placeActions={props.placeActions}
						selectedIndex={props.selectedIndex}
						enableDistances={props.enableDistances}
						earthRadius={props.earthRadius}
						distancesActions={props.distancesActions}
						legDistances={props.legDistances}
						summedDistances={props.summedDistances}/>
        </Table>
    );
}

function TripHeader(props) {
	const [showAddPlace, toggleAddPlace] = useToggle(false); const [showLoadTrip, toggleLoadTrip] = useToggle(false);
	const [showSetUnits, toggleSetUnits] = useToggle(false); const [showEditName, toggleEditName] = useToggle(false);
	const [showOptTrip, toggleOptTrip] = useToggle(false); const [showSaveTrip, toggleSaveTrip] = useToggle(false);
	const [showColorPicker, toggleColorPicker] = useToggle(false); const [showMapLayer, toggleMapLayer] = useToggle(false);
	const [tripName, setTripName] = useState("My Trip");
    return (
		<React.Fragment>
			<thead>
				<tr>
					<th className='trip-header-title w-' colSpan={3}>{tripName}&nbsp; <BiEdit size="1.3em" onClick={() => toggleEditName()}/></th>
					<th className="trip-header-total-distance text-center" colSpan={1}>{props.enableDistances ? props.totalDistance + " " + props.distancesUnits : ""}</th>
					<th className='trip-header-actions' colSpan={1}>
						<ItineraryActionsDropdown placeActions={props.placeActions} places={props.places} disableRemoveAll={props.disableRemoveAll} toggleAddPlace={toggleAddPlace} toggleLoadTrip={toggleLoadTrip} toggleSaveTrip={toggleSaveTrip} enableDistances={props.enableDistances} earthRadius={props.earthRadius} distancesActions={props.distancesActions}/></th>
				</tr>
				<tr>
					<th className="trip-subheader-title h6" colSpan={2}>Destination</th>
					<th className="trip-subheader-leg-distance h6 text-center" colSpan={1}>{props.enableDistances ? <>&#916;</> : ""}</th>
					<th className="trip-subheader-total-distance h6 text-center" colSpan={1}>{props.enableDistances ? <>Total &#916;</> : ""}</th>
					<th className="trip-distances-actions" colSpan={1}>{props.enableDistances ?<DistancesActionsDropdown toggleMapLayer={toggleMapLayer} toggleColorPicker={toggleColorPicker} toggleSetUnits={toggleSetUnits} toggleOptTrip={toggleOptTrip} optimizeActions={props.optimizeActions} places={props.places} earthRadius={props.earthRadius}/>: ""}</th>
				</tr>
			</thead>
			<AddPlace isOpen={showAddPlace} toggleAddPlace={toggleAddPlace} append={props.placeActions.append} replaceAll={props.placeActions.replaceAll} enableDistances={props.enableDistances} earthRadius={props.earthRadius} distancesActions={props.distancesActions} setSearchMatch={props.setSearchMatch} searchMatch={props.searchMatch} setSearchType={props.setSearchType} setSearchWhere={props.setSearchWhere} numFound={props.numFound} setFoundPlaces={props.setFoundPlaces} foundPlaces={props.foundPlaces} searchActions={props.searchActions}/>
			<LoadTrip isOpen={showLoadTrip} toggleLoadTrip={toggleLoadTrip} replaceAll={props.placeActions.replaceAll} enableDistances={props.enableDistances} distancesUnits = {props.distancesUnits} setDistancesUnits={props.setDistancesUnits} earthRadius={props.earthRadius} setEarthRadius={props.setEarthRadius} distancesActions={props.distancesActions}/>
			<SetUnits isOpen={showSetUnits} toggleSetUnits={toggleSetUnits} distancesUnits={props.distancesUnits} setDistancesUnits={props.setDistancesUnits} earthRadius={props.earthRadius} setEarthRadius={props.setEarthRadius} distancesActions={props.distancesActions} places={props.places}/>
			<EditName isOpen={showEditName} toggleEditName={toggleEditName} setTripName={setTripName}/>
			<OptTrip isOpen={showOptTrip} toggleOptTrip={toggleOptTrip} calculateDistances={props.distancesActions.calculateDistances} totalDistance={props.totalDistance} places={props.places} replaceAll={props.placeActions.replaceAll} enableDistances={props.enableDistances} distancesUnits={props.distancesUnits} earthRadius={props.earthRadius} optimizedPlaces={props.optimizedPlaces} optimizedDistance={props.optimizedDistance}/>
			<SaveTrip isOpen={showSaveTrip} toggleSaveTrip={toggleSaveTrip} places={props.places} tripName={tripName}/>
			<ColorPicker isOpen={showColorPicker} toggleColorPicker={toggleColorPicker} lineColor={props.lineColor} setLineColor={props.setLineColor} setMapMarker={props.setMapMarker}/>
			<MapLayer isOpen={showMapLayer} toggleMapLayer={toggleMapLayer} mapLayer={props.mapLayer} setMapLayer={props.setMapLayer} mapAttribution={props.mapAttribution} setMapAttribution={props.setMapAttribution} />
		</React.Fragment>
    );
}

function PlaceList(props) {
	return (
		<tbody>
			{props.places.map((place, index) => (
				<PlaceRow
					key={`table-${JSON.stringify(place)}-${index}`}
					place={place}
					placeActions={props.placeActions}
					selectedIndex={props.selectedIndex}
					index={index}
					enableDistances={props.enableDistances}
					earthRadius={props.earthRadius}
					distancesActions={props.distancesActions}
					legDistances={props.legDistances}
					summedDistances={props.summedDistances}
				/>
			))}
		</tbody>
	);
}

function PlaceRow(props) {
	const [showFullName, toggleShowFullName] = useToggle(false);
	const name = props.place.defaultDisplayName;
	const location = latLngToText(placeToLatLng(props.place));

	return (
		<tr className={props.selectedIndex === props.index ? 'selected-row' : ''}>
			<td colSpan={2} data-testid={`place-row-${props.index}`} 
				onClick={() => placeRowClicked(toggleShowFullName, props.placeActions.selectIndex,props.index)}>
				{!showFullName ? name : props.place.formatPlace()}
				<AdditionalPlaceInfo showFullName={showFullName} location={location} />
			</td>
			<td colSpan={1} className="text-center"> 
				{props.legDistances !== undefined && props.enableDistances ? props.legDistances[props.index] : ""} </td>
			<td colSpan={1} className="text-center"> 
				{props.summedDistances !== undefined && props.enableDistances ? props.summedDistances[props.index] : ""}</td>
			<td colSpan={1}>
				<PlaceActionsDropdown 
						placeActions={props.placeActions}
						index={props.index}
						enableDistances={props.enableDistances}
						earthRadius={props.earthRadius}
						distancesActions={props.distancesActions}
				/>
			</td>
		</tr>
	);
}

function AdditionalPlaceInfo(props){
	return(
		<Collapse isOpen={props.showFullName}>
			{props.location}
		</Collapse>
	);
}

function placeRowClicked(toggleShowFullName, selectIndex, placeIndex){
    toggleShowFullName();
    selectIndex(placeIndex);
}
