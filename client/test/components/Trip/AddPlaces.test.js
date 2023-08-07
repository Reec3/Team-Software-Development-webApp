import React from 'react';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import user from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import AddPlace from '../../../src/components/Trip/Itinerary/AddPlace';

describe('AddPlace', () => {
	const placeObj = {
		latLng: '40.57, -105.085',
		name: 'Colorado State University, South College Avenue, Fort Collins, Larimer County, Colorado, 80525-1725, United States',
	};

	const props = {
		toggleAddPlace: jest.fn(),
		append: jest.fn(),
		isOpen: true,
		setSearchType: jest.fn(),
		setSearchWhere: jest.fn(),
		setSearchMatch: jest.fn(),
		setFoundPlaces: jest.fn(),
		searchActions: {sendSearchRequest: jest.fn()},
		foundPlaces: [],
	};

	beforeEach(() => {
		render(
			<AddPlace
			  foundPlaces={props.foundPlaces}
				append={props.append}
				isOpen={props.isOpen}
				toggleAddPlace={props.toggleAddPlace}
				setSearchType={props.setSearchType}
				setSearchWhere={props.setSearchWhere}
				setSearchMatch={props.setSearchMatch}
				setFoundPlaces={props.setFoundPlaces}
				searchActions={props.searchActions}
			/>
		);
	});

	it('base: validates input', async () => {
		const coordInput = screen.getByTestId('coord-input');
		user.type(coordInput, placeObj.latLng);

		await waitFor(() => {
			expect(coordInput.value).toEqual(placeObj.latLng);
		});
	});

	it('base: handles invalid input', () => {
		const coordInput = screen.getByTestId('coord-input');
		user.paste(coordInput, '1');

		waitFor(() => {
			expect(coordInput.value).toEqual('1');
		});

		const addButton = screen.getByTestId('add-place-button');
		expect(addButton.classList.contains('disabled')).toBe(true);
	});

	it('ebmartin: Open dropdown menu when clicked then Airport', () => {
        user.click(screen.getByTestId('dropdown-menu-button'));
		user.click(screen.getByTestId('dropdown-menu-Airport'));
		//add expect here
    });

	it('ebmartin: Open dropdown menu when clicked then Balloonport', () => {
        user.click(screen.getByTestId('dropdown-menu-button'));
		user.click(screen.getByTestId('dropdown-menu-Balloonport'));
		//add expect here
	});
	it('reecedw: Open dropdown menu when clicked then Heliport', () => {
        user.click(screen.getByTestId('dropdown-menu-button'));
		user.click(screen.getByTestId('dropdown-menu-Heliport'));
		//add expect here
	});
	it('reecedw: Open dropdown menu when clicked then All', () => {
        user.click(screen.getByTestId('dropdown-menu-button'));
		user.click(screen.getByTestId('dropdown-menu-All'));
		//expect(user.click(screen.getByTestId('dropdown-menu-All')))
	});

});
