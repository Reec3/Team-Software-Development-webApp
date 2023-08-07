import React, {useState} from 'react';
import {
	Button,
	Modal,
	ModalBody,
	ModalHeader,
	Input,
	Container,
	ModalFooter,
} from 'reactstrap';
import loadPic from '../../../static/images/itinerary.png';
import {isJsonResponseValid} from '../../../utils/restfulAPI';
import * as tripFileSchema from '../../../../schemas/TripFile.json';

// global state
const FILE_FORMATS = ".json, application/json";

export default function LoadTrip(props) {
	const [addTripActive, setAddTripActive] = useState(false);
	const [places, setPlaces] = useState([]);
	const [newUnits, setNewUnits] = useState(props.distancesUnits);
	const [newRadius, setNewRadius] = useState(props.earthRadius);

	return (
		<Modal isOpen={props.isOpen} toggle={props.toggleLoadTrip}>
			<LoadTripHeader toggleLoadTrip={props.toggleLoadTrip} />
			<FileLoaderApp  addTripActive={addTripActive}
							setAddTripActive={setAddTripActive}
							places={places} setPlaces={setPlaces}
							earthRadius = {props.earthRadius}
							setNewUnits = {setNewUnits} setNewRadius = {setNewRadius} 
							distancesUnits = {props.distancesUnits}/>
			<LoadTripFooter addTripActive={addTripActive}
							places={places} newUnits = {newUnits} newRadius = {newRadius}
							replaceAll = {props.replaceAll}
							toggleLoadTrip={props.toggleLoadTrip}
							enableDistances={props.enableDistances}
							distancesActions={props.distancesActions}
							setDistancesUnits={props.setDistancesUnits} setEarthRadius={props.setEarthRadius}/>
		</Modal>
	);
}

function LoadTripHeader(props) {
	return (
		<ModalHeader className='ml-2' toggle={props.toggleLoadTrip}>
			Upload a Trip
			<ModalBody>
      			<img src={loadPic} className="img-fluid" alt='itinerary'/>
     		</ModalBody>
		</ModalHeader>
	);
}

function FileLoaderApp(props) {
	const { file, readFile } = useFileReader(props);
	
	function handleFileUpload(event) {
		const fileName = event.target.files[0].name;
		const fileObject = event.target.files[0];
		readFile(fileName, fileObject)
	}
	return (
		<Container>
			<i>Select a JSON file to upload...</i>
			<Input type="file" accept={FILE_FORMATS} onChange={handleFileUpload} />
		</Container>
	  );
}

function useFileReader(props) {
	const [file, setFile] = useState(null);

	function readFile(fileName, fileObject) {
	  const reader = new FileReader();
	  reader.readAsText(fileObject, "UTF-8");
	  reader.onload = event => {
		const file = { name: fileName, text: event.target.result };
		
		parseFile(file, props);
		
		setFile(file);
	  };
	}
	return { file, readFile };
}

function parseFile(file, props) {
	const extension = file.name.split('.').pop();
	if (extension === "json") {
	  const parsed_json = JSON.parse(file.text);
	  let validity_check = isJsonResponseValid(parsed_json, tripFileSchema);
	  if (validity_check) {
		  props.setAddTripActive(true);
		  if (typeof parsed_json.earthRadius !== 'undefined'){
			  props.setNewRadius(parsed_json.earthRadius);
		  }else{
			  props.setNewRadius(props.earthRadius);
		  }
		  if (typeof parsed_json.units !== 'undefined'){
			  props.setNewUnits(parsed_json.units);
		  }else{
			  props.setNewUnits(props.distancesUnits);
		  }
		  create_places_from_json(parsed_json, props);
	  }
	  else { props.setAddTripActive(false);}
	} else { props.setAddTripActive(false);}
}

function LoadTripFooter(props) {
	return (
		<ModalFooter>
			<Button 
				color='primary' 
				disabled={!props.addTripActive} 
				type="submit" 
				onClick={() => {
					set_units_from_json(props.newUnits, props);
					set_radius_from_json(props.newRadius, props);
					(props.enableDistances ?
						props.replaceAll(props.places, false).then((places_to_add) => {
							props.distancesActions.calculateDistances(places_to_add, props.newRadius);
						}) :
						props.replaceAll(props.places, false)).then(props.toggleLoadTrip)
				}} 
				>Add Trip</Button>
		</ModalFooter>
	);
}

function create_places_from_json(parsed_json, props) {
	// create a list of places from the json file
	let places = [];
	for (let i = 0; i < parsed_json.places.length; i++) {
		places.push(parsed_json.places[i]);
	}
	props.setPlaces(places);
}
  
function set_units_from_json(parsed_json_units, props) {
	// set the units from the json file
	props.setDistancesUnits(parsed_json_units);
}

function set_radius_from_json(parsed_json_radius, props) {
	// set the earth radius from the json file
	props.setEarthRadius(parsed_json_radius);
}
