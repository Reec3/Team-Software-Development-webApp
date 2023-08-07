import React from 'react';
import { render, screen } from '@testing-library/react';
import Planner from '../../../src/components/Trip/Planner';
import Page from '../../../src/components/Page';

describe('Planner', () => {
    const createSnackBar = jest.fn();

    beforeEach(() => {
        render(<Page/>);
        //render(<Planner createSnackBar={createSnackBar} />);
    });

    it('base: renders a Leaflet map', async () => {
        screen.getByText('Leaflet');
    });

    it('base: renders trip table', async () => {
        screen.getByText('My Trip');
    });
});