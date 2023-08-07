import React, { useEffect, useState, useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import {
	Button,
	Modal, ModalBody, ModalHeader, ModalFooter,
	Input,
	Collapse, UncontrolledCollapse,
	DropdownToggle, DropdownMenu, DropdownItem, UncontrolledButtonDropdown,
	Table
} from 'reactstrap';
import Coordinates from 'coordinate-parser';
import { reverseGeocode } from '../../../utils/reverseGeocode';
import { useToggle } from '../../../hooks/useToggle';
import { latLngToText, placeToLatLng } from '../../../utils/transformers';

export default function AddPlace(props) {
	const [foundPlace, setFoundPlace] = useState();
	const [coordString, setCoordString] = useState('');
	const [typeName, setTypeName] = useState('All');
	const [selectedPlaces, setSelectedPlaces] = useState([]);
	const [existsCheckedRow, setExistsCheckedRow] = useState(false);

	function handleCloseModal() {
		props.toggleAddPlace();
		setSelectedPlaces([]);
		setExistsCheckedRow(false);
		setCoordString('');
		setFoundPlace();
	}

	return (
		<Modal isOpen={props.isOpen} toggle={handleCloseModal}>
			<AddPlaceHeader toggleAddPlace={handleCloseModal}/>
			<PlaceFilter places={props.places} typeName={typeName} setTypeName={setTypeName} foundPlace={foundPlace} setFoundPlace={setFoundPlace} coordString={coordString} setCoordString={setCoordString} setSearchType={props.setSearchType} setSearchWhere={props.setSearchWhere} searchActions={props.searchActions}/>
			<PlaceSearch foundPlace={foundPlace} setFoundPlace={setFoundPlace} coordString={coordString} setCoordString={setCoordString}setSearchMatch={props.setSearchMatch} searchMatch={props.searchMatch} setSearchType={props.setSearchType} setSearchWhere={props.setSearchWhere} numFound={props.numFound} foundPlaces={props.foundPlaces} setFoundPlaces={props.setFoundPlaces} searchActions={props.searchActions} selectedPlaces={selectedPlaces} setSelectedPlaces={setSelectedPlaces} existsCheckedRow={existsCheckedRow} setExistsCheckedRow={setExistsCheckedRow}/>
			<AddPlaceFooter append={props.append} replaceAll={props.replaceAll} foundPlace={foundPlace} setFoundPlace={setFoundPlace} earthRadius={props.earthRadius} setCoordString={setCoordString} enableDistances={props.enableDistances} distancesActions={props.distancesActions} setSearchMatch={props.setSearchMatch} setSearchType={props.setSearchType} setExistsCheckedRow={setExistsCheckedRow} existsCheckedRow={existsCheckedRow} setSearchWhere={props.setSearchWhere} numFound={props.numFound} selectedPlaces={selectedPlaces} setSelectedPlaces={setSelectedPlaces} foundPlaces={props.foundPlaces} setFoundPlaces={props.setFoundPlaces} searchActions={props.searchActions} toggleAddPlace={handleCloseModal}/>
		</Modal>
	);
}

function AddPlaceHeader(props) {
	return (
		<ModalHeader className='ml-2' toggle={props.toggleAddPlace}>
			Search Places
		</ModalHeader>
	);
}

function PlaceFilter(props) {
	const [value, setValue] = useState('')
	const options = useMemo(() => countryList().getData(), [])
	const changeHandler = value => {setValue(value) , props.setSearchWhere([value.label])}
	options[0].label = 'All'; options[1].label = 'Afghanistan'
	const customStyles={
			control: (provided)=>({
				...provided,
				width:'250px'
		 })
	 }

	return (
	  <ModalBody>
			<Button data-testid='dropdown-menu-button' color="primary" id="toggler" size='sm' style={{ marginBottom: '0.2rem'}}>Filter Options</Button>
			<UncontrolledCollapse data-testid='dropdown-menu-toggled' toggler="#toggler">
			<hr/>
				<UncontrolledButtonDropdown size='med'>
						<DropdownToggle caret outline>{props.typeName}</DropdownToggle>
						<DropdownMenu>
							<DropdownItem data-testid='dropdown-menu-All' onClick={() => { props.setTypeName('All'); props.setSearchType(['other'])}}>All</DropdownItem>
							<DropdownItem data-testid='dropdown-menu-Airport' onClick={() => { props.setTypeName('Airport'); props.setSearchType(['airport'])}}>Airport</DropdownItem>
							<DropdownItem data-testid='dropdown-menu-Balloonport' onClick={() => { props.setTypeName('Balloonport'); props.setSearchType(['balloonport'])}}>Balloonport</DropdownItem>
							<DropdownItem data-testid='dropdown-menu-Heliport' onClick={() => { props.setTypeName('Heliport'); props.setSearchType(['heliport'])}}>Heliport</DropdownItem>
						</DropdownMenu>
					</UncontrolledButtonDropdown>
					<hr/>
				<Select placeholder='Search by country' styles={customStyles} options={options} value={value} onChange={changeHandler} />
			</UncontrolledCollapse>
		</ModalBody>
	);
  }

function PlaceSearch(props) {
	useEffect(() => {
		verifyCoordinates(props.coordString, props.setFoundPlace, props);
	}, [props.coordString]);

	useEffect(() => {
		props.searchActions.sendSearchRequest();
	}, [props.searchMatch]);
	
	return (
		<ModalBody>
				<Input
					onChange={(input) => props.setCoordString(input.target.value)}
					placeholder='Enter Search Query or Coordinates...'
					data-testid='coord-input'
					value={props.coordString}
				/>
				{props.foundPlaces.length > 0 && props.searchMatch !== '' && !props.foundPlace ? <b>Found {props.foundPlaces.length} places.</b> : ""}
				<PlaceInfo foundPlace={props.foundPlace} />
				<PlacesInfo foundPlaces={props.foundPlaces} foundPlace={props.foundPlace} searchMatch={props.searchMatch}selectedPlaces={props.selectedPlaces} setSelectedPlaces={props.setSelectedPlaces} existsCheckedRow={props.existsCheckedRow} setExistsCheckedRow={props.setExistsCheckedRow}/>
		</ModalBody>
	);
}


function PlaceInfo(props) {
	return (
		<Collapse isOpen={!!props.foundPlace}>
			<br />
			{props.foundPlace?.formatPlace()}
		</Collapse>
	);
}

function PlacesInfo(props) {
	return (
		<Collapse isOpen={props.foundPlaces.length > 0 && props.searchMatch !== '' && !props.foundPlace}>
			<br />
			<FoundPlacesList foundPlaces={props.foundPlaces} selectedPlaces={props.selectedPlaces} setSelectedPlaces={props.setSelectedPlaces} existsCheckedRow={props.existsCheckedRow} setExistsCheckedRow={props.setExistsCheckedRow}/>
		</Collapse>
	);
}

function FoundPlacesList(props) {
	return (
		<div className="table-div">
		<Table>
		<tbody>
			{props.foundPlaces.map((place, index) => (
				<PlaceRow
					key={`table-${JSON.stringify(place)}-${index}`}
					place={place}
					index={index}
					selectedPlaces={props.selectedPlaces}
					setSelectedPlaces={props.setSelectedPlaces}
					existsCheckedRow={props.existsCheckedRow}
					setExistsCheckedRow={props.setExistsCheckedRow}
				/>
			))}
		</tbody>
		</Table>
		</div>
	);
}

function PlaceRow(props) {
	const [checked, setChecked] = useState(false); const [showFullName, toggleShowFullName] = useToggle(false);
	const handleChange = () => {
		if (checked) {	//user unselected row
			let arr = props.selectedPlaces;
			const index = arr.indexOf(props.place);
			if (index > -1) { arr.splice(index, 1); }
			props.setSelectedPlaces(arr);
			if (arr.length === 0) { props.setExistsCheckedRow(false); }
		} else {	//user selected row
			props.selectedPlaces.push(props.place);
			props.setSelectedPlaces(props.selectedPlaces);
			props.setExistsCheckedRow(true);
		}
		setChecked(!checked);	//toggles checked
	};
	return (
		<tr className={checked ? 'selected-row' : ''}>
			<td colSpan={2} onClick={() => toggleShowFullName()}>
				{!showFullName ? props.place.name : expandedPlaceName(props.place)}
				<AdditionalPlaceInfo showFullName={showFullName} location={latLngToText(placeToLatLng(props.place))}/>
			</td>
			<td colSpan={1}>
				<Input type="checkbox" checked={checked} onChange={handleChange} />
			</td>
		</tr>
	);
}

function expandedPlaceName(place) {
	let string = place.name;
	string += (place.municipality ? ', ' + place.municipality : '');
	string += (place.region ? ', ' + place.region : '');
	string += (place.country ? ', ' + place.country : '');

	return string;
}

function AdditionalPlaceInfo(props){
	return(
		<Collapse isOpen={props.showFullName}>
			{props.location}
		</Collapse>
	);
}

function AddPlaceFooter(props) {
	const styles = { root: {display:'flex', justifyContent: 'space-between', width:'100%'} }
	return (
		<ModalFooter>
				<Button data-testid='random-button' style={{ marginBottom: '0.2rem'}} onClick={() => props.setCoordString(calcDrunkenStumble())} >Drunken Stumble</Button>
				<Button color='primary'
					onClick={() => {
						(props.enableDistances ?
							(props.foundPlaces.length > 0 && !props.foundPlace ?
								props.replaceAll(props.selectedPlaces, true).then((newPlaces) => {
									props.distancesActions.calculateDistances(newPlaces, props.earthRadius);
								}) :
								props.append(props.foundPlace).then((newPlaces) => {
									props.distancesActions.calculateDistances(newPlaces, props.earthRadius);
							})) :
							(props.append(props.foundPlace),
							props.replaceAll(props.selectedPlaces, true)))
						props.toggleAddPlace();
					}}
					data-testid='add-place-button'
					disabled={!props.foundPlace && !props.existsCheckedRow}
				>
					{props.existsCheckedRow ? "Add Places" : "Add Place"}
				</Button>
		</ModalFooter>
	);
}

async function verifyCoordinates(coordString, setFoundPlace, props) {
	try {
		const latLngPlace = new Coordinates(coordString);
		const lat = latLngPlace.getLatitude();
		const lng = latLngPlace.getLongitude();
		if (lat !== undefined && lng !== undefined) {
			const fullPlace = await reverseGeocode({ lat, lng });
			setFoundPlace(fullPlace);
		}
	} catch (error) {
		setFoundPlace(undefined);
		initiateSearch(coordString, props);
	}
}

async function initiateSearch(searchQuery, props) {
	
	try{
		props.setSearchMatch(searchQuery)

	} catch (error) {
		props.setFoundPlaces([]);
	}
}

function calcDrunkenStumble() {
    var drunkenCoords =  Number.parseFloat(Math.random() * (90 + 90) - 90).toFixed(5).toString() + ' ' + 
                            Number.parseFloat(Math.random() * (180 + 180) - 180).toFixed(5).toString();
    return drunkenCoords;
}
