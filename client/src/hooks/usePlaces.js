import { useState } from 'react';
import { reverseGeocode } from '../utils/reverseGeocode';
import { LOG } from '../utils/constants';
import { Place } from '../models/place.model';

export function usePlaces() {
    const [places, setPlaces] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const context = { places, setPlaces, selectedIndex, setSelectedIndex };

    const placeActions = {
        append: async (place) => append(place, context),
        removeAtIndex: (index) => removeAtIndex(index, context),
        removeAll: () => removeAll(context),
        selectIndex: (index) => selectIndex(index, context),
        replaceAll: async (newPlaces, shouldAppend) => replaceAll(newPlaces, shouldAppend, context)
    };

    return {places, selectedIndex, placeActions};
}

async function append(latLng, context) {
    const { places, setPlaces, setSelectedIndex } = context;

    const newPlaces = [...places];

    const fullPlace = await reverseGeocode(latLng);
    newPlaces.push(fullPlace);

    setPlaces(newPlaces);
    setSelectedIndex(newPlaces.length - 1);

    return newPlaces;
}

function removeAtIndex(index, context) {
    const { places, setPlaces, selectedIndex, setSelectedIndex } = context;

    if (index < 0 || index >= places.length) {
        LOG.error(`Attempted to remove index ${index} in places list of size ${places.length}.`);
        return;
    }
    const newPlaces = places.filter((place, i) => index !== i);
    setPlaces(newPlaces);

    if (newPlaces.length === 0) {
        setSelectedIndex(-1);
    } else if (selectedIndex >= index && selectedIndex !== 0) {
        setSelectedIndex(selectedIndex - 1);
    }
    
    return newPlaces;
}

function removeAll(context) {
    const { setPlaces, setSelectedIndex } = context;

    setPlaces([]);
    setSelectedIndex(-1);
}

// unsure if this needs to be async
async function replaceAll(newPlaces, shouldAppend, context) {
    let places_to_add = [];
    if (shouldAppend) {
        places_to_add = context.places;
    }
    const { setPlaces, setSelectedIndex } = context;
    for (let i = 0; i < newPlaces.length; i++) {
        let place = new Place(newPlaces[i]);
        places_to_add.push(place);
    }
    setPlaces(places_to_add);
    setSelectedIndex(places_to_add.length - 1);
    return places_to_add;
}

function selectIndex(index, context) {
    const { places, setSelectedIndex } = context;

    if (index < -1 || index >= places.length) {
        LOG.error(`Attempted to select index ${index} in places list of size ${places.length}.`);
        setSelectedIndex(-1);
        return;
    }
    setSelectedIndex(index);
}