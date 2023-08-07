import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { expect } from '@jest/globals';
import { MOCK_PLACES } from "../../sharedMocks";

import Map from '../../../src/components/Trip/Map/Map';

describe('Map', () => {

    const places = MOCK_PLACES;
    const props = {
        mapMarker : "icon1"
    }
    const placeActions = {
        append: jest.fn()
    };
    const mapLayer='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const mapAttribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
    const url=mapLayer;
    const attribution=mapAttribution;


    beforeAll(() => {
        Object.defineProperty(window, 'scrollTo', { value: () => {}, writable: true });
    });

    beforeEach(() => {
        render(<Map props={props} places={places} placeActions={placeActions} mapLayer={mapLayer} mapAttribution={mapAttribution} url={mapLayer} attribution={mapAttribution} />);
    });

    it('base: appends calls append when the map is clicked', () => {
        user.click(screen.getByRole('presentation'));
        expect(placeActions.append).toHaveBeenCalled();
    });
});