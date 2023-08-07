import React, { useState } from 'react';
import {
	Button,
	Modal, ModalHeader, ModalBody, ModalFooter,
	DropdownToggle, DropdownMenu, DropdownItem, UncontrolledButtonDropdown
} from 'reactstrap';

export default function MapLayer(props) {
  const [layerName, setLayerName] = useState('Choose a new Background Layer');

  return (
    <Modal size="sm" isOpen={props.isOpen} toggle={props.toggleMapLayer}>
      <MapLayerHeader toggle={props.toggleMapLayer}/>
      <MapLayerBody mapAttribution={props.mapAttribution} setMapAttribution={props.setMapAttribution} 
                    mapLayer={props.mapLayer} setMapLayer={props.setMapLayer} layerName={layerName} setLayerName={setLayerName}/>
      <MapLayerFooter toggle={props.toggleMapLayer}/>
    </Modal>
  );
}

function MapLayerHeader(props) {
  return (
    <ModalHeader className='ml-2' toggle={props.toggleMapLayer}>
      Select Map Background Layer
    </ModalHeader>
  )
}

function MapLayerBody(props) {

	return(
		<ModalBody>
      <UncontrolledButtonDropdown>
						<DropdownToggle color="primary" caret outline>{props.layerName}</DropdownToggle>
						<DropdownMenu data-testid='dropdown-layer'>
							<DropdownItem data-testid='dropdown-layer-default' onClick={() => { props.setLayerName('Default'); props.setMapLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'); props.setMapAttribution('&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors')}}>Default</DropdownItem>
							<DropdownItem data-testid='dropdown-layer-satellite' onClick={() => { props.setLayerName('Satellite'); props.setMapLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'); props.setMapAttribution('Tiles &copy; Esri ')}}>Satellite</DropdownItem>
							<DropdownItem data-testid='dropdown-layer-dark' onClick={() => { props.setLayerName('Dark'); props.setMapLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'); props.setMapAttribution('&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors')}}>Dark</DropdownItem>
              <DropdownItem data-testid='dropdown-layer-outdoors' onClick={() => { props.setLayerName('Outdoors'); props.setMapLayer('https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=6dcc3bb9fc2b4b4f8d326d3029ab56e1'); props.setMapAttribution('&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors')}}>Outdoors</DropdownItem>
              <DropdownItem data-testid='dropdown-layer-transport' onClick={() => { props.setLayerName('Transport'); props.setMapLayer('https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=6dcc3bb9fc2b4b4f8d326d3029ab56e1'); props.setMapAttribution('&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors')}}>Transport</DropdownItem>
							<DropdownItem data-testid='dropdown-layer-hell' onClick={() => { props.setLayerName('Hell'); props.setMapLayer('https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=6dcc3bb9fc2b4b4f8d326d3029ab56e1'); props.setMapAttribution('&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors')}}>Hell</DropdownItem>
              <DropdownItem data-testid='dropdown-layer-natgeo' onClick={() => { props.setLayerName('NatGeo'); props.setMapLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'); props.setMapAttribution('Tiles &copy; Esri &mdash; National Geographic')}}>NatGeo</DropdownItem>
						</DropdownMenu>
					</UncontrolledButtonDropdown>
		</ModalBody>
	);
}

function MapLayerFooter(props) {
  return (
    <ModalFooter>
      <Button data-testid='button-layer-save' color="primary" size="sm" onClick={() => props.toggle()}>
        Save
      </Button>
    </ModalFooter>
  );
}