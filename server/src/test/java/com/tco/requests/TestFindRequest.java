package com.tco.requests;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import com.tco.misc.Place;
import com.tco.misc.Places;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class TestFindRequest {
  
  private FindRequest find;

  @BeforeEach
  public void createConfigurationForTestCases() {
    find = new FindRequest();
    find.buildResponse();
    find.setMatch("NULL");
    find.setLimit(20);
    find.setFound(3);
    find.setPlaces(new Places());
  }

  @Test
  @DisplayName("victor45: Request type is \"find\"")
  public void testType() {
      String type = find.getRequestType();
      assertEquals("find", type);
  }

  @Test
  @DisplayName("ebmartin: Test getLimit()")
  public void testGetLimit() {
      int limit = find.getLimit();
      assertEquals(20, limit);
  }

  @Test
  @DisplayName("ebmartin: Test getFound()")
  public void testGetFound() {
      int found = find.getFound();
      assertEquals(3, found);
  }

  @Test
  @DisplayName("reecedw: Test setFound()")
  public void testSetFound() {
      find.setFound(3);
      int found = find.getFound();
      assertEquals(3, found);
  }

  @Test
  @DisplayName("ebmartin: Test getMatch()")
  public void testGetMatch() {
      String match = find.getMatch();
      assertEquals("NULL", match);
  }

  @Test
  @DisplayName("ebmartin: Test getPlaces()")
  public void testGetPlaces() {
      Places places = find.getPlaces();
      assertTrue(places.isEmpty());
  }

}
