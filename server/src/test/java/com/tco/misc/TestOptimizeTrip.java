package com.tco.misc;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class TestOptimizeTrip {

    @Test
    @DisplayName("victor45: Testing nearest neighbor opt on 3 places")
    public void testingNNOptimizationOfThreePlaces(){
      Place place1 = new Place();
      place1.put("latitude", "40.49");
      place1.put("longitude", "-104.06");

      Place place2 = new Place();
      place2.put("latitude", "52.14");
      place2.put("longitude", "-91.45");

      Place place3 = new Place();
      place3.put("latitude", "42.33");
      place3.put("longitude", "-104.15");


      Places places = new Places();
      places.add(place1);
      places.add(place2);
      places.add(place3);

      Places newPlaces = OptimizeTrip.findOptimalTrip(places, 3959);

      places.remove(1);
      places.add(place2);

      assertEquals(places, newPlaces);
    }

    @Test
    @DisplayName("victor45: Testing nearest neighbor opt on the same 4 places")
    public void testingNNOptimizationOnSamePlaces(){
      Place place1 = new Place();
      place1.put("latitude", "40.49");
      place1.put("longitude", "-104.06");


      Places places = new Places();
      places.add(place1);
      places.add(place1);
      places.add(place1);
      places.add(place1);

      Places newPlaces = OptimizeTrip.findOptimalTrip(places, 55555);

      assertEquals(places, newPlaces);
    }

    @Test
    @DisplayName("nchaffee: Testing destinations array rotation with 5 places")
    public void testingRotatDestArry(){
      int[] testArr = new int[5];
      
      for(int i = 0; i < 5; i++){
        testArr[i] = i;
      }

      testArr[3] = 0;
      testArr[0] = 3;

      testArr = OptimizeTrip.rotateDestArray(testArr);

      int[] expectedArr = {0, 3, 1, 2, 4};
      assertArrayEquals(testArr, expectedArr);
    }

    
}
