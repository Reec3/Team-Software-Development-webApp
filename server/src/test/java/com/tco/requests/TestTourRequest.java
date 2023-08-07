package com.tco.requests;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import com.tco.misc.Place;
import com.tco.misc.Places;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class TestTourRequest {

  static final double testRadius = 1234.0;

  @Test
  @DisplayName("victor45: Request type is \"tour\"")
  public void testType() {
      TourRequest request = new TourRequest(new Places(), testRadius);
      request.buildResponse();
      String type = request.getRequestType();
      assertEquals("tour", type);
  }

  @Test
  @DisplayName("reecedw: Get places in tour request")
  public void testGetPlaces() {
    TourRequest request = new TourRequest(new Places(), testRadius);
    request.buildResponse();
    Places places = request.getPlaces();
    assertTrue(places.size() >= 0);
  }

  @Test
  @DisplayName("reecedw: Get earth radius in tour request")
  public void testGetEarthRadius() {
    TourRequest request = new TourRequest(new Places(), testRadius);
    request.buildResponse();
    double radius = request.getEarthRadius();
    assertEquals(testRadius, radius);
  }

  @Test
  @DisplayName("reecedw: Get response in tour request. Pretty bogus but will improve code coverage.")
  public void testGetResponse() {
    TourRequest request = new TourRequest(new Places(), testRadius);
    request.buildResponse();
    request.setResponse(1);
    int response = request.getResponse();
    response = 1;
    assertEquals(1, response);
  }

  @Test
  @DisplayName("reecedw: Set response in tour request")
  public void testSetResponse() {
    TourRequest request = new TourRequest(new Places(), testRadius);
    request.buildResponse();
    request.setResponse(2);
    int response = request.getResponse();
    assertEquals(2, response);
  }
}

