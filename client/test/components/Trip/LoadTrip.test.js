import React from 'react';
import LoadTrip from '../../../src/components/Trip/Itinerary/LoadTrip';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { render, screen, waitFor } from '@testing-library/react';
// import user from '@testing-library/user-event';
//import { MOCK_PLACES } from "../../sharedMocks";
//import userEvent from '@testing-library/user-event';


describe('LoadTrip', () => {

    const props = {
        toggleLoadTrip: jest.fn(),
		isOpen: true,
		setDistancesUnits: jest.fn(),
		distancesUnits : 'miles',
	};

	beforeEach(() => {
		render(
			<LoadTrip
				isOpen={props.isOpen}
				toggleLoadTrip={props.toggleLoadTrip}
			/>
		);
	});

    it('nchaffee: renders LoadTrip Modal Header', () => {
        expect(screen.getByText(/Upload a Trip/i)).toBeDefined();
    });

	//Writing a test for set_units_from_json_file
	it('reecedw: test set units from json', () => {
		//const { getByText } = render(<LoadTrip />);
		//const button = getByText(/Upload a Trip/i);
		//userEvent.click(button);
		const file = new File(['{"units":"miles"}'], 'test.json', { type: 'application/json' });
		let units = 'miles';
		props.setDistancesUnits(units);
		expect(props.distancesUnits).toBe('miles');
		});

});