package com.tco.misc;

import java.util.Arrays;

public class OptimizeTrip {
    private static int tripLength;
    private static long[][] distances;
    private static double radius;

    public static Places findOptimalTrip(Places tour, double earthRadius) {
      if (tour.size() <= 2) {
        return tour;
      }

      tripLength = tour.size();
      distances = new long[tripLength][tripLength];
      radius = earthRadius;
      computeDistancesMatrix(tour);

      //Nearest Neighbor optimization
      int[] originalDestinations = new int[tour.size()];
      int originalTotalDistance = 0;
      for (int i = 0; i < originalDestinations.length; i++) { //fill array with consecutive integers
        originalDestinations[i] = i;

        if (i == originalDestinations.length - 1) {
          originalTotalDistance += distances[i][0];
        } else {
          originalTotalDistance += distances[i][i+1];
        }
      }

      int[] optimizedDestinations = findBestNearestNeighborRoute(originalDestinations);  //returns ordering of nn optimized route

      if (optimizedDestinations[tripLength] >= originalTotalDistance) {
        return tour;
      }

      optimizedDestinations = rotateDestArray(optimizedDestinations);

      //create Places object with correct optimized order
      Places optimizedTour = new Places();
      for (int i = 0; i < optimizedDestinations.length-1; i++) {
        optimizedTour.add(tour.get(optimizedDestinations[i]));
      }

      return optimizedTour;
    }

    //Rotates destinations array so that 0 is at index 0 while maintaining order from the optimization
    public static int[] rotateDestArray(int[] destinations){
      int[] tempArr = new int[destinations.length];
      int homeIndex = -1;

      //find index with value 0
      for(int i = 0; i < destinations.length; i++){
        if(destinations[i] == 0){
          homeIndex = i;
        }
      }

      //load temp array with values after 0
      for(int i = 0; i < ((destinations.length -1) - homeIndex); i++){
        tempArr[i] = destinations[i + homeIndex];
      }

      //load temp array with values before 0, after the values after 0
      for(int i = 0; i < homeIndex; i++){
        tempArr[i + ((destinations.length - 1) - homeIndex)] = destinations[i];
      }

      tempArr[tempArr.length - 1] = destinations[destinations.length - 1];
      return tempArr;
    }

    private static void computeDistancesMatrix(Places tour) {
      for (int i = 0; i < distances.length; i++) {
        for (int j = 0; j < distances[i].length; j++) {
          distances[i][j] = GreatCircleDistance.calculateDistance(tour.get(i), tour.get(j), radius);
        }
      }
    }

    private static int[] findBestNearestNeighborRoute(int[] destinations) {
      int[] currentRoute = createNearestNeighborRoute(destinations[0]);
      int[] bestRoute = currentRoute;

      for (int i = 1; i < destinations.length; i++) {
        currentRoute = createNearestNeighborRoute(destinations[i]);
        if (currentRoute[tripLength] < bestRoute[tripLength]) { //compare trip distances
          bestRoute = currentRoute;
        }
      }

      return bestRoute;
    }

    private static int[] createNearestNeighborRoute(int startIndex) {
      int[] route = new int[tripLength+1];  //route is empty to start with
      boolean[] visited = new boolean[tripLength]; //no places have been visited to start with, default value is false
      int numVisited = 0;
      int totalDistance = 0;
      
      route[0] = startIndex;  //first place in route is starting location
      visited[startIndex] = true; //mark first place as visited
      numVisited++;
      int closestIndex = startIndex;

      while (numVisited < tripLength) {
        long[] result = findNearestNeighbor(closestIndex, visited);  //find index of closest neighbor
        closestIndex = (int)result[0];
        totalDistance += result[1];
        route[numVisited] = closestIndex;  //append closest neighbor to route
        visited[closestIndex] = true; //mark closest neighbor as visited
        numVisited++;
      }

      totalDistance += distances[closestIndex][startIndex];
      route[tripLength] = totalDistance;  //append total trip distance to end of route
      return route;
    }

    private static long[] findNearestNeighbor(int currentPlaceIndex, boolean[] visited) {
      long minDistance = Long.MAX_VALUE;
      int closestNeighbor = currentPlaceIndex;

      for (int i = 0; i < distances[currentPlaceIndex].length; i++) {  //iterate over current place's neighbors
        if (!visited[i]) {
          if (distances[currentPlaceIndex][i] < minDistance) {
            minDistance = distances[currentPlaceIndex][i];
            closestNeighbor = i;
          }
        }
      }


      return new long[]{closestNeighbor, minDistance}; //return both the index of closest neighbor and distance to neighbor
    }

}
