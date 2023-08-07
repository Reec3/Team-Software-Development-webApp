import {useState} from 'react';
import '@testing-library/jest-dom';
import {act, renderHook} from '@testing-library/react-hooks';
import { beforeEach, describe, expect, it } from '@jest/globals';
import { REVERSE_GEOCODE_RESPONSE } from '../sharedMocks';
import { LOG } from '../../src/utils/constants';
import { useSearch} from '../../src/hooks/useSearch';



describe('useSearch', () => {
    let hook;

    beforeEach(() => {
        const {result} = renderHook(() => useSearch());
        hook = result;
    });

    it('nchaffee: sendSearchRequest: searchType && searchWhere are both true', async () => {
        fetch.mockResponse(REVERSE_GEOCODE_RESPONSE);
        await act(async () => {
            hook.current.searchActions.sendSearchRequest();
        });

    });

    /*    
    it('nchaffee: sendSearchRequest: searchWhere is false', async () => {
        hook.current.setSearchWhere(null);
        fetch.mockResponse(REVERSE_GEOCODE_RESPONSE);
        await act(async () => {
            hook.current.searchActions.sendSearchRequest();
        });
    });

            
    it('nchaffee: sendSearchRequest: searchType is false', async () => {
        hook.current.setSearchType(null);
        fetch.mockResponse(REVERSE_GEOCODE_RESPONSE);
        await act(async () => {
            hook.current.searchActions.sendSearchRequest();
        });

    });
    */
});