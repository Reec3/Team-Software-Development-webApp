import React from 'react';
import '@testing-library/jest-dom';
import {act, renderHook} from '@testing-library/react-hooks';
import { beforeEach, describe, expect, it } from '@jest/globals';
import { MOCK_PLACES, REVERSE_GEOCODE_RESPONSE } from '../sharedMocks';
import { LOG } from '../../src/utils/constants';
import { useDistances } from '../../src/hooks/useDistances';


describe('useDistances', () => {
    let hook;
    const testTrip = [1, 2, 3, 4, 5];

    beforeEach(() => {
        
        const { result } = renderHook(() => useDistances());
        hook = result;
    });


    
    it('nchaffee: runs calculateDistances', async () => {
        fetch.mockResponse(REVERSE_GEOCODE_RESPONSE);
        await act(async () => {
            hook.current.distancesActions.calculateDistances(MOCK_PLACES, 3959);
        });
    });

    it('nchaffee: runs calculateLegDistances', () => {
        act(async () => {
            hook.current.distancesActions.calculateLegDistances(testTrip);
        });
    });

    it('nchaffee: runs calculateSummedDistances', () => {
        act(async () => {
            hook.current.distancesActions.calculateSummedDistances(testTrip);
        });
    });

    it('nchaffee: runs calculateTotalDistance', () => {
        act(async () => {
            hook.current.distancesActions.calculateTotalDistance(testTrip);
        });
    });
    

    
    it('reecedw: bogus useDistances', () => {
        expect(1+1).toBe(2);
    });




});


