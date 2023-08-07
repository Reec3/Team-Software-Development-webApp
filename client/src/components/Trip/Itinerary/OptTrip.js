import React, { useEffect, useState } from 'react';
import {
	Button,
	Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

export default function OptTrip(props) {
	const [optMethod, setOptMethod] = useState('None');
	const distSaved = props.totalDistance - props.optimizedDistance;
  let optMethodTypes = ['None','Nearest-Neighbor', 'Two-Opt', 'Three-Opt'];

	return (
		<Modal isOpen={props.isOpen} toggle={props.toggleOptTrip}>
			<OptTripHeader toggleOptTrip={props.toggleOptTrip} />
			<OptTripBody
				enableDistances={props.enableDistances}
				distancesUnits={props.distancesUnits}
				distSaved={distSaved}
				/>
			<OptTripFooter
       	places={props.places}
				optMethod={optMethod}
				setOptMethod={setOptMethod}
				replaceAll = {props.replaceAll}
				optMethodTypes={optMethodTypes}
				enableDistances={props.enableDistances}
				distancesUnits={props.distancesUnits}
				earthRadius={props.earthRadius}
				calculateDistances={props.calculateDistances}
				optimizedPlaces={props.optimizedPlaces}
				toggleOptTrip={props.toggleOptTrip}/>
		</Modal>
	);
}

function OptTripHeader(props) {
	return (
		<ModalHeader className='ml-2' data-testid='opt-trip-header' toggle={props.toggleOptTrip}>
			Trip Optimization
		</ModalHeader>
		
	);
}

function OptTripBody(props) {
	return(
		<ModalBody>
			Optimize your trip for a shorter round-trip distance!
		</ModalBody>
	);
}

function OptTripFooter(props) {
	return (
		<ModalFooter>
			<Button color='primary' data-testid='opt-trip-decline' 
				onClick={() => { props.toggleOptTrip();}}>
				Decline
			</Button>
			<Button color='primary' data-testid='opt-trip-button' 
				onClick={() => {
					if (props.places.length < 20) {
						props.setOptMethod(props.optMethodTypes[3]);
					} else if (props.places.length < 50) {
						props.setOptMethod(props.optMethodTypes[2]);
					} else {
						props.setOptMethod(props.optMethodTypes[1]);
					}
					props.replaceAll(props.optimizedPlaces, false);
					props.calculateDistances(props.optimizedPlaces, props.earthRadius);
					props.toggleOptTrip();
				}}
				disabled={props.places.length < 3}>
				Optimize
			</Button>
		</ModalFooter>
	);
}

