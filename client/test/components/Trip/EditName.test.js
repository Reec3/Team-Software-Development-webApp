import React from 'react';
import EditName from '../../../src/components/Trip/Itinerary/EditName';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

describe('EditName', () => {

	const props = {
		toggleEditName : jest.fn(),
        setTripName : jest.fn(),
		isOpen: true,
	};
    beforeEach(() =>{
        render(
            <EditName
                toggleEditName={props.toggleEditName}
                isOpen={props.isOpen}
                setTripName={props.setTripName}
            />)
    });

    it('nchaffee: name trip/click save button', () => {
        userEvent.click(screen.getByRole('textbox', {placeholder: /Trip Name/i}));
        userEvent.keyboard('testing');
        userEvent.click(screen.getByTestId('saveButton'));
        expect(props.setTripName).toBeCalled();
        expect(EditName.isOpen).toBeFalsy();
    });


    it('nchaffee: name trip/click cancel button', () => {
        userEvent.click(screen.getByRole('textbox', {placeholder: /Trip Name/i}));
        userEvent.keyboard('testing');
        userEvent.click(screen.getByTestId('cancelButton'));
        expect(EditName.isOpen).toBeFalsy();
    });


});