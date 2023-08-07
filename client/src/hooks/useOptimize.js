import { useContext, useState } from 'react';
import { LOG } from '../utils/constants';
import { sendAPIRequest } from '../utils/restfulAPI';
import { getOriginalServerUrl } from '../utils/restfulAPI';

export function useOptimize() {
  const [optimizedPlaces, setOptimizedPlaces] = useState([]);
  const [optimizedDistance, setOptimizedDistance] = useState(0);

  const context = { optimizedPlaces, setOptimizedPlaces,
                    optimizedDistance, setOptimizedDistance};

  const optimizeActions = {
    optimizeTripRoute: async(places, radius) => optimizeTripRoute(places, radius, context),
    calculateOptimizedDistance: () => calculateOptimizedDistance(),
  };

  return {optimizedPlaces, setOptimizedPlaces, optimizedDistance, setOptimizedDistance, optimizeActions};
}

async function optimizeTripRoute(placesList, radius, context) {
  const tourResponse = await sendAPIRequest({ requestType: "tour", places: placesList, earthRadius: radius, response: 1 }, getOriginalServerUrl());

  if (tourResponse) {
    context.setOptimizedPlaces(tourResponse.places);
    context.setOptimizedDistance(calculateOptimizedDistance);
  } else {
    LOG.error("Tour request to server failed.");
  }
}

function calculateOptimizedDistance() {
  //todo implement
  return -1;
}