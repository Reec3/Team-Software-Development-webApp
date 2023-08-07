package com.tco.misc;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import java.lang.Exception;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class TestSQLGuide {
    @Test
    @DisplayName("victor45: Testing number of found places for empty match string, limit 20")
    public void testEmptyMatchStringFound(){
      SQLGuide.queryDatabase("", 20);
      assertEquals(50427, SQLGuide.getFound());
    }

    @Test
    @DisplayName("victor45: Testing 'brew' match string, limit 50, asserting at least one place is returned")
    public void testBrewMatchString(){
      assertNotEquals(new Places(), SQLGuide.queryDatabase("brew", 50));
    }

    @Test
    @DisplayName("victor45: Testing 'Hardap' match string, limit 20, asserting 20 places returned")
    public void testNumberPlacesReturned(){
      assertEquals(20, SQLGuide.queryDatabase("Hardap", 20).size());
    }

    @Test
    @DisplayName("ebmartin: Testing Credentials Username")
    public void testCredentialsUser(){
    assertEquals("cs314-db",SQLGuide.Credential.USER);
    }

    @Test
    @DisplayName("ebmartin: Testing Credentials Password")
    public void testCredentialsPass(){
    assertEquals("eiK5liet1uej",SQLGuide.Credential.PASSWORD);
    }

    @Test
    @DisplayName("ebmartin: Testing SELECT")
    public void testSelect(){
    assertEquals("SELECT DISTINCT world.name,world.municipality,region.name AS region,country.name AS country,continent.name AS continent,latitude,longitude FROM world INNER JOIN continent ON world.continent = continent.id INNER JOIN country ON world.iso_country = country.id INNER JOIN region ON world.iso_region = region.id WHERE world.name LIKE \"%%\"  OR municipality LIKE \"%%\"  OR region.name LIKE \"%%\"  OR country.name LIKE \"%%\"  OR continent.name LIKE \"%%\" LIMIT 20 ;", SQLGuide.Select.match("", 20));
    }
    
}
