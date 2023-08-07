import React from 'react';
import { ItineraryActionsDropdown, DistancesActionsDropdown, PlaceActionsDropdown} from '../../../src/components/Trip/Itinerary/actions';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';




describe('ItineraryActionsDropdown', () => {
    
    const DEFAULT_STARTING_POSITION = { lat: 40.5734, lng: -105.0865 };

    const props = {
        placeActions : {append: jest.fn(), removeAtIndex: jest.fn(), removeAll: jest.fn(), selectIndex: jest.fn(), replaceAll: jest.fn()},
        distancesActions : {calculateDistances: jest.fn()},
        toggleAddPlace : jest.fn(),
        toggleLoadTrip : jest.fn(),
        toggleSaveTrip : jest.fn(),
        enableDistances : false,
        earthRadius : jest.fn(),
    };



    beforeEach(() => {
        render(<ItineraryActionsDropdown
            toggleAddPlace={props.toggleAddPlace}
            toggleLoadTrip={props.toggleLoadTrip}
            toggleSaveTrip={props.toggleSaveTrip}
            enableDistances={props.enableDistances}
            earthRadius={props.earthRadius}
            placeActions={props.placeActions}
            distancesActions={props.distancesActions}
            DEFAULT_STARTING_POSITION={DEFAULT_STARTING_POSITION}

        />);
    });

    it('nchaffee: true', () => {
        userEvent.click(screen.getByTestId('add-place-button'));
        expect(props.toggleAddPlace).toHaveBeenCalled();
    });

    it('nchaffee: true', () => {
        userEvent.click(screen.getByTestId('trip-upload-button'));
        expect(props.toggleLoadTrip).toHaveBeenCalled();
    });

    it('reecedw: true delete all button', () => {
        userEvent.click(screen.getByTestId('delete-all-button'));
        expect(props.placeActions.removeAll).toHaveBeenCalled();
    });

    it('reecedw: true save button', () => {
        userEvent.click(screen.getByTestId('trip-save-button'));
        expect(props.toggleSaveTrip).toHaveBeenCalled();
    });

    it('ebmartin: test home button', () => {
        userEvent.click(screen.getByTestId('home-button'));
        expect(props.placeActions.append).toHaveBeenCalled();
    });

});

describe('DistancesActionsDropdown', () => {

    const props = {
        toggleOptTrip : jest.fn(),
        toggleSetUnits : jest.fn(),
        toggleMapLayer : jest.fn(),
        toggleColorPicker : jest.fn(),
        isDistances : true,
        optimizeActions : {optimizeTripRoute : jest.fn()},
    };

    beforeEach(() => {
        render(<DistancesActionsDropdown
            toggleOptTrip={props.toggleOptTrip}
            toggleSetUnits={props.toggleSetUnits}
            toggleMapLayer={props.toggleMapLayer}
            toggleColorPicker={props.toggleColorPicker}
            isDistances={props.isDistances}
            optimizeActions={props.optimizeActions}
        />);
    });

    it('ebmartin: test optTrip button', () => {
        userEvent.click(screen.getByTestId('opt-trip-button'));
        expect(props.toggleOptTrip).toHaveBeenCalled();
    });

    it('ebmartin: test setUnits button', () => {
        userEvent.click(screen.getByTestId('set-units-button'));
        expect(props.toggleSetUnits).toHaveBeenCalled();
    });

    //adding test for map-layer-button
    it('reecedw: test map-layer-button', () => {
        userEvent.click(screen.getByTestId('map-layer-button'));
        expect(props.toggleMapLayer).toHaveBeenCalled();
    });

    it('reecedw: test color-picker-button', () => {
        userEvent.click(screen.getByTestId('color-picker-button'));
        expect(props.toggleColorPicker).toHaveBeenCalled();
    });

});
