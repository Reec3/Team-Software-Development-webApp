import React from 'react';
import { ButtonGroup, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { BiDotsVerticalRounded, BiSliderAlt, BiTrip, BiRuler, BiDroplet , BiLayer} from 'react-icons/bi';
import { FaHome, FaTrashAlt, FaFileUpload, FaSave, FaSearchLocation } from 'react-icons/fa';
import { DEFAULT_STARTING_POSITION } from '../../../utils/constants';

export function ItineraryActionsDropdown(props) {
    return (
        <ActionsDropdown {...props} isSlider={false}>
            <DropdownItem onClick={() => { props.enableDistances ? 
                props.placeActions.append(DEFAULT_STARTING_POSITION).then((newPlaces) => 
                {props.distancesActions.calculateDistances(newPlaces, props.earthRadius);}) 
                : props.placeActions.append(DEFAULT_STARTING_POSITION)}}
                >
                <FaHome data-testid='home-button'/>
            </DropdownItem>
            <DropdownItem onClick={() => props.toggleAddPlace()} data-testid='add-place-button'>
                <FaSearchLocation />
            </DropdownItem>
            <DropdownItem onClick={() => props.toggleLoadTrip()} data-testid='trip-upload-button'>
                <FaFileUpload />
            </DropdownItem>
            <DropdownItem onClick={() => props.toggleSaveTrip()} data-testid='trip-save-button'>
                <FaSave />
            </DropdownItem>
            <DropdownItem disabled={props.disableRemoveAll} onClick={() => { props.placeActions.removeAll();
                (props.enableDistances ? props.distancesActions.calculateDistances([], props.earthRadius) : "");
                }} data-testid='delete-all-button'>
                <FaTrashAlt />
            </DropdownItem>
        </ActionsDropdown>
    );
}

export function DistancesActionsDropdown(props) {
    return (
        <ActionsDropdown {...props} isDistances={true}>
            <DropdownItem data-testid='map-layer-button' onClick={() => props.toggleMapLayer()}>
                <BiLayer size="1.5em"/>
            </DropdownItem>
            <DropdownItem data-testid='color-picker-button' onClick={() => props.toggleColorPicker()}>
                <BiDroplet size="1.5em"/>
            </DropdownItem>
            <DropdownItem data-testid='opt-trip-button' onClick={() => { props.toggleOptTrip(); props.optimizeActions.optimizeTripRoute(props.places, props.earthRadius); }}>
                <BiTrip size="1.5em"/>
            </DropdownItem>
            <DropdownItem data-testid='set-units-button' onClick={() => props.toggleSetUnits()}>
                <BiRuler size="1.5em"/>
            </DropdownItem>
        </ActionsDropdown>
    );
}

export function PlaceActionsDropdown(props) {
    return (
        <ActionsDropdown {...props} isDistances={false}>
            <DropdownItem onClick={() => {
                let newPlaces = props.placeActions.removeAtIndex(props.index);
                props.enableDistances ? props.distancesActions.calculateDistances(newPlaces, props.earthRadius) : null;
                }} data-testid={`delete-button-${props.index}`}>
                <FaTrashAlt />
            </DropdownItem>
        </ActionsDropdown>
    );
}

function ActionsDropdown(props) {
    return (
        <UncontrolledDropdown direction="left">
            <DropdownToggle tag="div" data-testid={`row-toggle-${props.index}`}>
                {props.isDistances ?
                    <BiSliderAlt size="1.5em" />
                :
                    <BiDotsVerticalRounded size="1.5em" />
                }
            </DropdownToggle>
            <DropdownMenu>
                <ButtonGroup>
                    {props.children}
                </ButtonGroup>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}
