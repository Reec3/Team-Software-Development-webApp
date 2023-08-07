import React from 'react';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import user from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import OptTrip from '../../../src/components/Trip/Itinerary/OptTrip';

describe('OptTrip', () => {

	const props = {
		toggleOptTrip: jest.fn(),
		isOpen: true,
		places : [],
		optMethod : jest.fn(),
		replaceAll : jest.fn(),
		calculateDistances: jest.fn(),
	};

	beforeEach(() => {
		render(
			<OptTrip
				isOpen={props.isOpen}
				toggleOptTrip={props.toggleOptTrip}
				optMethod={props.optMethod}
				places={props.places}
				replaceAll={props.replaceAll}
				calculateDistances={props.calculateDistances}
			/>
		);
	});

	it('ebmartin: handles place length less than three', () => {
		const optButton = screen.getByTestId('opt-trip-button');
		expect(optButton.classList.contains('disabled')).toBe(true);
	});

	it('ebmartin: check decline button', () => {
		user.click(screen.getByTestId('opt-trip-decline'));
		expect(props.toggleOptTrip).toHaveBeenCalled();
	});
	
});

describe('OptTrip', () => {

	const props = {
		toggleOptTrip: jest.fn(),
		isOpen: true,
		places : [1,2,3,4,5,6,7,8,9,10,11],
		optMethod : jest.fn(),
		replaceAll : jest.fn(),
		calculateDistances: jest.fn(),
	};

	beforeEach(() => {
		render(
			<OptTrip
				isOpen={props.isOpen}
				toggleOptTrip={props.toggleOptTrip}
				optMethod={props.optMethod}
				places={props.places}
				replaceAll={props.replaceAll}
				calculateDistances={props.calculateDistances}
			/>
		);
	});

	it('ebmartin: Sets method to three opt', () => {
		user.click(screen.getByTestId('opt-trip-button'));
		expect((props.optMethod)==('Three-Opt'));
	});
	
});

describe('OptTrip', () => {

	const props = {
		toggleOptTrip: jest.fn(),
		isOpen: true,
		places : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
		optMethod : jest.fn(),
		replaceAll : jest.fn(),
		calculateDistances: jest.fn(),
	};

	beforeEach(() => {
		render(
			<OptTrip
				isOpen={props.isOpen}
				toggleOptTrip={props.toggleOptTrip}
				optMethod={props.optMethod}
				places={props.places}
				replaceAll={props.replaceAll}
				calculateDistances={props.calculateDistances}
			/>
		);
	});

	it('ebmartin: Sets method to two opt', () => {
		user.click(screen.getByTestId('opt-trip-button'));
		expect((props.optMethod)==('Two-Opt'));
	});
	
});

describe('OptTrip', () => {

	const props = {
		toggleOptTrip: jest.fn(),
		isOpen: true,
		places : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70],
		optMethod : jest.fn(),
		replaceAll : jest.fn(),
		calculateDistances: jest.fn(),
	};

	beforeEach(() => {
		render(
			<OptTrip
				isOpen={props.isOpen}
				toggleOptTrip={props.toggleOptTrip}
				optMethod={props.optMethod}
				places={props.places}
				replaceAll={props.replaceAll}
				calculateDistances={props.calculateDistances}
			/>
		);
	});

	it('ebmartin: Sets method to NN', () => {
		user.click(screen.getByTestId('opt-trip-button'));
		expect((props.optMethod)==('Nearest-Neighbor'));
	});

});