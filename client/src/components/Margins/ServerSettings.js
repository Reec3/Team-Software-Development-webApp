import React from 'react';
import { Button, Col, Container, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { LOG } from '../../utils/constants';
import { useServerInputValidation } from '../../hooks/useServerInputValidation';
import { sendAPIRequest } from '../../utils/restfulAPI';

export default function ServerSettings(props) {
    const [serverInput, setServerInput, config, validServer, resetModal] = useServerInputValidation(props.serverSettings.serverUrl, props.toggleOpen);

    function closeModalWithoutSaving() { resetModal(props.serverSettings.serverUrl);}

    return (
        <Modal isOpen={props.isOpen} toggle={closeModalWithoutSaving} {...props}>
            <Header toggleOpen={closeModalWithoutSaving} />
            <Body 
                serverInput={serverInput}
                setServerInput={setServerInput}
                serverSettings={props.serverSettings}
                serverName={getCurrentServerName(config, props.serverSettings)}
                validServer={validServer}/>
            <Footer 
                config={config}
                serverInput={serverInput}
                validServer={validServer}
                resetModal={resetModal}
                closeModalWithoutSaving={closeModalWithoutSaving}
                processServerConfigSuccess={props.processServerConfigSuccess}
                places={props.places}
                calculateDistances={props.calculateDistances}
                setEnableDistances={props.setEnableDistances}
                showMessage={props.showMessage}/>
        </Modal>
    );
}

async function verifyDistancesRequest(props) {
    const distancesResponse = await sendAPIRequest({ requestType: "distances", places: [], earthRadius: 1}, props.serverInput);
    if (distancesResponse) {
        LOG.info(`Distances verification request to ${props.serverInput} succeeded. Distances operations are supported by this server.`);
        props.setEnableDistances(true);
    } else {
        props.showMessage(`Distances verification request to ${props.serverInput} did not succeed. Distances operations are not supported by this server.`, "error");
        props.setEnableDistances(false);
    }
}

function getCurrentServerName(config, serverSettings) {
    if (config) {
        return config.serverName;
    }
    else if (serverSettings.serverConfig) {
        return serverSettings.serverConfig.serverName;
    }
    return "";
}

function Header(props) {
    return (
        <ModalHeader className="ml-2" toggle={props.toggleOpen}>
            Server Connection
        </ModalHeader>
    );
}

function Body(props) {
    const urlInput =
        <Input
            value={props.serverInput}
            placeholder={props.serverSettings.serverUrl}
            onChange={(e) => { props.setServerInput(e.target.value) }}
            valid={props.validServer}
            invalid={!props.validServer}
        />;

    return (
        <ModalBody>
            <Container>
                <SettingsRow label="Name" value={props.serverName} />
                <SettingsRow label="URL" value={urlInput} />
                <SettingsRow 
                    label="Features" 
                    value={buildFeaturesList(props.serverSettings.serverConfig.features)} 
                />
            </Container>
        </ModalBody>
    );
}

function SettingsRow({label, value}) {
    return (
			<Row className='my-2 vertical-center'>
				<Col xs={3}>
                    {label}:
                </Col>
				<Col xs={9}>
					{label === 'Features' ? (
						value?.map((feature) => (
							<div key={`client-feature-${feature}`}>
								{feature}
								<br />
							</div>
						))
					) : (
						<div>{value}</div>
					)}
				</Col>
			</Row>
		);
}

function Footer(props) {
    return (
        <ModalFooter>
            <Button color="secondary" onClick={props.closeModalWithoutSaving}>Cancel</Button>
            <Button color="primary" onClick={() => {
                props.processServerConfigSuccess(props.config, props.serverInput);
                props.resetModal(props.serverInput);
                verifyDistancesRequest(props);
                props.calculateDistances(props.places);
            }}
                disabled={!props.validServer}
            >
                Save
            </Button>
        </ModalFooter>
    );
}

function buildFeaturesList(featuresList){
    return featuresList?.map(feature => feature.charAt(0).toUpperCase() + feature.slice(1)).sort();
}