import React from 'react';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import user from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import MapLayer from '../../../src/components/Trip/Itinerary/MapLayer';

describe('MapLayer', () => {
	
	const props = {
		toggleMapLayer: jest.fn(),
		isOpen: true,
		setMapLayer: jest.fn(),
		setMapAttribution: jest.fn(),
		mapLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		mapAttribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
	};

	beforeEach(() => {
		render(
			<MapLayer
				isOpen={props.isOpen}
				toggleMapLayer={props.toggleMapLayer}
				layerName={props.layerName}
				setMapLayer={props.setMapLayer}
				setMapAttribution={props.setMapAttribution}
				mapLayer={props.mapLayer}
				mapAttribution={props.mapAttribution}
			/>
		);
	});

	it('ebmartin: Open dropdown menu when clicked Default', () => {
        user.click(screen.getByTestId('dropdown-layer'));
		user.click(screen.getByTestId('dropdown-layer-default'));
		//add expect here
    });

	it('ebmartin: Open dropdown menu when clicked Satellite', () => {
        user.click(screen.getByTestId('dropdown-layer'));
		user.click(screen.getByTestId('dropdown-layer-satellite'));
		//add expect here
	});

	it('ebmartin: Open dropdown menu when clicked Dark', () => {
        user.click(screen.getByTestId('dropdown-layer'));
		user.click(screen.getByTestId('dropdown-layer-dark'));
		//add expect here
	});
	it('ebmartin: Open dropdown menu when clicked Outdoors', () => {
        user.click(screen.getByTestId('dropdown-layer'));
		user.click(screen.getByTestId('dropdown-layer-outdoors'));
		//add expect here
	});
	it('ebmartin: Open dropdown menu when clicked Transport', () => {
        user.click(screen.getByTestId('dropdown-layer'));
		user.click(screen.getByTestId('dropdown-layer-transport'));
		//add expect here
	});
	it('ebmartin: Open dropdown menu when clicked Hell', () => {
        user.click(screen.getByTestId('dropdown-layer'));
		user.click(screen.getByTestId('dropdown-layer-hell'));
		//add expect here
	});
	it('ebmartin: Open dropdown menu when clicked NatGeo', () => {
        user.click(screen.getByTestId('dropdown-layer'));
		user.click(screen.getByTestId('dropdown-layer-natgeo'));
		//add expect here
	});

	it('ebmartin: Open dropdown menu when clicked NatGeo', () => {
        user.click(screen.getByTestId('button-layer-save'));
		expect(props.toggleMapLayer).toHaveBeenCalled();
	});
	

});
