import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import SetUnits from '../../../src/components/Trip/Itinerary/SetUnits.js';


describe('SetUnits', () => {

    //handleCloseModal props
    const handleClose = jest.fn();
    const toggleSetUnits = jest.fn();

    const setDistancesUnits = jest.fn();
    const setEarthRadius = jest.fn();
    const distancesActions = {
        calculateDistances: jest.fn(),
        calculateLegDistances: jest.fn(),
        calculateSummedDistances: jest.fn(),
        calculateTotalDistance: jest.fn()
    };

    beforeEach(() => {
        render(<SetUnits
                isOpen={true}
                handleCloseModal={handleClose}
                toggleSetUnits={toggleSetUnits}
                setDistancesUnits={setDistancesUnits}
                setEarthRadius={setEarthRadius}
                distancesActions={distancesActions}/>);
    });


    //These might need to be changed when the ux is fixed: issue #413

    it('nchaffee: closes modal (handleCloseModal)', () => {
        user.click(screen.getByTestId('select-button-0'));
        user.click(screen.getByText(/Save/i));
    });
    
    
    it('nchaffee: user input for custom unit', () => {
        user.click(screen.getByTestId('custom-unit-select'));
        user.click(screen.getByPlaceholderText('name'));
        user.keyboard('bird');
        user.click(screen.getByPlaceholderText('radius'));
        user.keyboard('4000');
        user.click(screen.getByText(/Save/i));
    });
    
    
    it('nchaffee: user input for custom unit', () => {
        user.click(screen.getByTestId('custom-unit-select'));
        user.click(screen.getByPlaceholderText('name'));
        user.keyboard('testingbadinput');
        user.click(screen.getByPlaceholderText('radius'));
        user.keyboard('-99999');
        user.click(screen.getByText(/Cancel/i));
    });

});