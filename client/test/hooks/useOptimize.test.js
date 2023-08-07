import {useState} from 'react';
import '@testing-library/jest-dom';
import {act, renderHook} from '@testing-library/react-hooks';
import { beforeEach, describe, expect, it } from '@jest/globals';
import { REVERSE_GEOCODE_RESPONSE } from '../sharedMocks';
import { LOG } from '../../src/utils/constants';
import { useOptimize } from '../../src/hooks/useOptimize';


describe('useOptimize', () => {
    let hook;

    beforeEach(() => {
        const {result} = renderHook(() => useOptimize());
        hook = result;
    });


    it('nchaffee: render hook and call optimizeTripRoute', async () => {
        fetch.mockResponse(REVERSE_GEOCODE_RESPONSE);
        await act(async () => {
            hook.current.optimizeActions.optimizeTripRoute();
        });

    });

    it('nchaffee: render hook and call calculateOptimizedDistance', async () => {
        fetch.mockResponse(REVERSE_GEOCODE_RESPONSE);
        await act(async () => {
            hook.current.optimizeActions.calculateOptimizedDistance();
        });

    });












});

