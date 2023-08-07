import React, { useEffect, useState } from 'react';
import { Collapse } from 'reactstrap';
import Header from './Margins/Header';
import Footer from './Margins/Footer';
import About from './About/About';
import Planner from './Trip/Planner';
import { useToggle } from '../hooks/useToggle';
import { useDistances } from '../hooks/useDistances';
import { usePlaces } from '../hooks/usePlaces';
import { useOptimize } from '../hooks/useOptimize';
import { useSearch } from '../hooks/useSearch';
import { LOG } from '../utils/constants';
import { getOriginalServerUrl, sendAPIRequest } from '../utils/restfulAPI';

export default function Page(props) {
	const [showAbout, toggleAbout] = useToggle(false);
	const [serverSettings, processServerConfigSuccess] = useServerSettings(props.showMessage);
	const {places, selectedIndex, placeActions} = usePlaces();
	const {enableDistances, setEnableDistances, distancesUnits, setDistancesUnits, earthRadius,
		   setEarthRadius, legDistances, summedDistances, totalDistance, distancesActions} = useDistances();
	const {optimizedPlaces, setOptimizedPlaces, optimizedDistance, setOptimizedDistance, optimizeActions} = useOptimize();
	const {setSearchMatch, searchMatch, setSearchType, setSearchWhere, setFoundPlaces, numFound, foundPlaces, searchActions} = useSearch();

	return (
		<>
			<Header toggleAbout={toggleAbout} />
			<div className="body">
				<Collapse isOpen={showAbout}>
					<About closePage={toggleAbout} />
				</Collapse>
				<Collapse isOpen={!showAbout} data-testid="planner-collapse">
					<Planner showMessage={props.showMessage} places={places} selectedIndex={selectedIndex}
						placeActions={placeActions} enableDistances={enableDistances} 
						distancesUnits={distancesUnits} setDistancesUnits={setDistancesUnits} earthRadius={earthRadius} 
						setEarthRadius={setEarthRadius} legDistances={legDistances} summedDistances={summedDistances} 
						totalDistance={totalDistance} distancesActions={distancesActions} optimizedPlaces={optimizedPlaces}
						optimizedDistance={optimizedDistance} optimizeActions={optimizeActions} setSearchMatch={setSearchMatch} searchMatch={searchMatch} setFoundPlaces={setFoundPlaces}
						setSearchType={setSearchType} setSearchWhere={setSearchWhere} numFound={numFound} foundPlaces={foundPlaces} searchActions={searchActions}/>
				</Collapse>
			</div>
			<Footer serverSettings={serverSettings} processServerConfigSuccess={processServerConfigSuccess} places={places}
				setEnableDistances={setEnableDistances} calculateDistances={distancesActions.calculateDistances} showMessage={props.showMessage}/>
		</>
	)
}

function useServerSettings(showMessage) {
	const [serverUrl, setServerUrl] = useState(getOriginalServerUrl());
	const [serverConfig, setServerConfig] = useState(null);

	useEffect(() => {
		sendConfigRequest();
	}, []);

	function processServerConfigSuccess(config, url) {
		LOG.info("Switching to Server:", url);
		setServerConfig(config);
		setServerUrl(url);
	}

	async function sendConfigRequest() {
		const configResponse = await sendAPIRequest({ requestType: "config" }, serverUrl);
		if (configResponse) {
			processServerConfigSuccess(configResponse, serverUrl);
		} else {
			setServerConfig(null);
			showMessage(`Config request to ${serverUrl} failed. Check the log for more details.`, "error");
		}
	}

	return [{ serverUrl: serverUrl, serverConfig: serverConfig }, processServerConfigSuccess];
}
