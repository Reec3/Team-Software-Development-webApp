import { useState } from 'react';
import { LOG } from '../utils/constants';
import { sendAPIRequest } from '../utils/restfulAPI';
import { getOriginalServerUrl } from '../utils/restfulAPI';

export function useDistances() {
  const [enableDistances, setEnableDistances] = useState(true);
  const [legDistances, setLegDistances] = useState([]);
  const [summedDistances, setSummedDistances] = useState([]);
  const [totalDistance, setTotalDistance] = useState(0);
  const [earthRadius, setEarthRadius] = useState(3959);
  const [distancesUnits, setDistancesUnits] = useState("mi");

  const context = { legDistances, setLegDistances,
                    summedDistances, setSummedDistances,
                    totalDistance, setTotalDistance,
                    earthRadius, setEarthRadius};

  const distancesActions = {
    calculateDistances: async(places, radius) => calculateDistances(places, radius, context),
    calculateLegDistances: (distancesArr) => calculateLegDistances(distancesArr),
    calculateSummedDistances: (distancesArr) => calculateSummedDistances(distancesArr),
    calculateTotalDistance: (distancesArr) => calculateTotalDistance(distancesArr),
  };

  return {enableDistances, setEnableDistances, distancesUnits, setDistancesUnits, earthRadius, setEarthRadius, legDistances, summedDistances, totalDistance, distancesActions};
}

async function calculateDistances(placesList, radius, context) {
  const distancesResponse = await sendAPIRequest({ requestType: "distances", places: placesList, earthRadius: radius}, getOriginalServerUrl());

  if (distancesResponse) {
      context.setLegDistances(calculateLegDistances(distancesResponse.distances));
      context.setSummedDistances(calculateSummedDistances(distancesResponse.distances));
      context.setTotalDistance(calculateTotalDistance(distancesResponse.distances));
  } else {
    LOG.error("Distances request to server failed.");
  }
}

function calculateLegDistances(distancesArr) {
  let legDistances = [];
  legDistances.push(0);
  for (let i = 0; i < distancesArr.length-1; i++) {
    legDistances.push(distancesArr[i]);
  }
  return legDistances;
}

function calculateSummedDistances(distancesArr) {
  let summedDistances = [];
  summedDistances.push(0);
  let runningSum = 0;
  for (let i = 0; i < distancesArr.length-1; i++) {
    runningSum += distancesArr[i];
    summedDistances.push(runningSum);
  }
  return summedDistances;
}

function calculateTotalDistance(distancesArr) {
  let total = 0;
  for (let i = 0; i < distancesArr.length; i++) {
    total += distancesArr[i];
  }
  return total;
}