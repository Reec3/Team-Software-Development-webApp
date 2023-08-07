import React from 'react';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import user from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import ColorPicker from '../../../src/components/Trip/Itinerary/ColorPicker';

describe('ColorPicker', () => {
	
	const props = {
		toggleColorPicker: jest.fn(),
		isOpen: true,
		setLineColor: jest.fn(),
		lineColor: "#3388FF",
		setMapMarker: jest.fn(),
	};

	beforeEach(() => {
		render(
			<ColorPicker
				isOpen={props.isOpen}
				toggleColorPicker={props.toggleColorPicker}
				layerName={props.layerName}
				setColorPicker={props.setColorPicker}
				setMapAttribution={props.setMapAttribution}
				ColorPicker={props.ColorPicker}
				mapAttribution={props.mapAttribution}
				setMapMarker={props.setMapMarker}
			/>
		);
	});


	it('ebmartin: Open dropdown menu when clicked NatGeo', () => {
        user.click(screen.getByTestId('button-color-save'));
		expect(props.toggleColorPicker).toHaveBeenCalled();
	});
	

});
