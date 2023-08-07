import React, {useState} from 'react';
import {
	Button,
  Container,
	Modal,
	ModalBody,
	ModalHeader,
	ModalFooter,
} from 'reactstrap';

const MIME_TYPE = {
    JSON: "application/json",
    CSV: "text/csv",
    SVG: "image/svg+xml",
    KML: "application/vnd.google-earth.kml+xml"
}

export default function SaveTrip(props) {

	return (
		<Modal isOpen={props.isOpen} toggle={props.toggleSaveTrip}>
		    <SaveTripHeader toggleSaveTrip={props.toggleSaveTrip} />
        <SaveTripBody />
        <FileSavingApp  places={props.places} tripName={props.tripName} toggleSaveTrip={props.toggleSaveTrip} />
		</Modal>
	);
}

function SaveTripHeader(props) {
	return (
		<ModalHeader className='ml-2' toggle={props.toggleSaveTrip}>
			Save Trip
		</ModalHeader>
	);
}

function SaveTripBody() {
	return(
		<ModalBody>
			Save your trip as a JSON file.
		</ModalBody>
	);
}

function FileSavingApp(props) {
  function handleJSONSave() {
    const tripJSON = buildTripJSON(props.places);
    const fileName = (props.tripName).replace(/ /g, "_").toLowerCase();
    // const fileName = props.tripName;
    downloadFile(fileName + ".json", MIME_TYPE.JSON, tripJSON);
    props.toggleSaveTrip();
  }

  return (
    <ModalFooter>
      <Button data-testid='save-button' onClick={handleJSONSave}>
        Download
      </Button>
    </ModalFooter>
  )
}

function downloadFile(fileNameWithExtension, mimeType, fileText) {
  const file = new Blob([fileText], { type: mimeType });
  const link = document.createElement("a");
  const url = URL.createObjectURL(file);
  link.href = url;
  link.download = fileNameWithExtension;
  document.body.appendChild(link);
  link.click();
  setTimeout(function() {
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }, 0);
}

function buildTripJSON(places) {
  // Pass in your actual trip values to use.
  // Turn the object into a string with a spacing of 2 for readability.
  
  return '{ \n' + '"places":' + JSON.stringify(places, null, 2) + '}';
}
