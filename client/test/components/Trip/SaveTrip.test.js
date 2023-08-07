import React from 'react';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import user from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import SaveTrip from '../../../src/components/Trip/Itinerary/SaveTrip';

describe('SaveTrip', () => {

	const props = {
		toggleSaveTrip: jest.fn(),
		isOpen: true,
		places : [],
        tripName: 'My Trip',
        buildTripJSON: jest.fn(),
	};

	beforeEach(() => {
		render(
			<SaveTrip
				isOpen={props.isOpen}
				toggleSaveTrip={props.toggleSaveTrip}
				places={props.places}
                tripName={props.tripName}
			/>
		);
	});

	it('ebmartin: renders SaveTrip Modal Header', () => {
        expect(screen.getByText(/Save Trip/i)).toBeDefined();
    });

});

