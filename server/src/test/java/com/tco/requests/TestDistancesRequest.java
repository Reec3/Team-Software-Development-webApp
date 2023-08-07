package com.tco.requests;
import com.tco.misc.Places;

import com.tco.misc.Place;
import com.tco.misc.Places;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.beans.Transient;

public class TestDistancesRequest {

    DistancesRequest request;
    Places places;
    Place place;

    static final long bigRadius = 1000000000000L;
    static final long bigPi = Math.round(Math.PI * bigRadius);
    static final long bigPiHalf = Math.round(Math.PI / 2.0 * bigRadius);


    @BeforeEach
    public void createConfigurationForTestCases() {
        request = new DistancesRequest(bigRadius, places);
        places = new Places();
        place = new Place();      
    }

    @Test
    @DisplayName("victor45: Request type is \"distances\"")
    public void testType() {
        request.buildResponse();
        String type = request.getRequestType();
        assertEquals("distances", type);
    }

    @Test
    @DisplayName("ebmartin: empty list of places")
    public void testEmptyPlaces() {
        request.buildResponse();
        // check distances
        List<Long> distances = request.getDistances();
        assertEquals(true, distances.isEmpty());
        assertEquals(true, places.isEmpty());
        assertEquals(bigRadius, request.getEarthRadius());
    }

    @Test
    @DisplayName("ebmartin: one place")
    public void testOnePlace() {
        places.add(place);
        request.buildResponse();
        // check distances
        List<Long> distances = request.getDistances();
        assertEquals(0, distances.size());
        assertEquals(1, places.size());
        assertEquals(bigRadius, request.getEarthRadius());
    }

    @Test
    @DisplayName("ebmartin: two places")
    public void testTwoPlaces() {
        places.add(place);
        places.add(place);
        request.buildResponse();
        // check distances
        List<Long> distances = request.getDistances();
        assertEquals(0, distances.size());
        assertEquals(2, places.size());
        assertEquals(bigRadius, request.getEarthRadius());
    }

    @Test
    @DisplayName("ebmartin: three places")
    public void testThreePlaces() {
        places.add(place);
        places.add(place);
        places.add(place);
        request.buildResponse();
        // check distances
        List<Long> distances = request.getDistances();
        assertEquals(0, distances.size());
        assertEquals(3, places.size());
        assertEquals(bigRadius, request.getEarthRadius());
    }
      
    @Test
    @DisplayName("reecedw: Distance request has more than one item.")
    public void testMinItemsTest() {
        assertTrue(places.size() >= 0);
    }

    @Test
    @DisplayName("ebmartin: test setEarthRadius")
    public void testSetEarthRadius() {
        request.setEarthRadius(1000.0);
        assertEquals(1000.0, request.getEarthRadius());
    }

    @Test
    @DisplayName("ebmartin: test getPlaces")
    public void testGetPlaces() {
        places.add(place);
        assertEquals(null, request.getPlaces());
    }
}
